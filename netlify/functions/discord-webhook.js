exports.handler = async (event, context) => {
  // Vérifier que c'est une requête POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parser les données du formulaire
    const data = JSON.parse(event.body);
    const { name, email, subject, message } = data;

    // URL de votre webhook Discord (vous devrez la remplacer)
    const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

    if (!DISCORD_WEBHOOK_URL) {
      throw new Error('Discord webhook URL not configured');
    }

    // Créer le message formaté pour Discord
    const discordMessage = {
      embeds: [{
        title: "📬 Nouveau message du portfolio",
        color: 0x64ffda, // Couleur cyan de votre thème
        fields: [
          {
            name: "👤 Nom",
            value: name || "Non renseigné",
            inline: true
          },
          {
            name: "📧 Email", 
            value: email || "Non renseigné",
            inline: true
          },
          {
            name: "📝 Sujet",
            value: subject || "Non renseigné",
            inline: false
          },
          {
            name: "💬 Message",
            value: message || "Non renseigné",
            inline: false
          }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "Portfolio - Joachim Douillard"
        }
      }]
    };

    // Envoyer à Discord
    const discordResponse = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordMessage),
    });

    if (!discordResponse.ok) {
      throw new Error(`Discord webhook failed: ${discordResponse.status}`);
    }

    // Envoyer aussi à Netlify Forms pour l'email
    const netlifyFormData = new URLSearchParams();
    netlifyFormData.append('form-name', 'contact');
    netlifyFormData.append('name', name);
    netlifyFormData.append('email', email);
    netlifyFormData.append('subject', subject);
    netlifyFormData.append('message', message);

    const netlifyResponse = await fetch('https://joachimdouillard.netlify.app/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: netlifyFormData.toString(),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Message envoyé avec succès!'
      }),
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Erreur lors de l\'envoi du message',
        details: error.message 
      }),
    };
  }
};