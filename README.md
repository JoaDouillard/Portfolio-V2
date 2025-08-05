# Portfolio Jekyll - Joachim Douillard

Portfolio personnel développé avec Jekyll, reprenant exactement le design et les fonctionnalités du portfolio Node.js original.

## 🚀 Fonctionnalités

- **Design identique** : Thème sombre avec les mêmes couleurs et animations
- **Layout en grille** : Page d'accueil avec disposition en grille responsive
- **Pages complètes** : Accueil, À propos, Compétences, Contact, Projets
- **Animations CSS** : Effets de hover, transitions, animations de progression
- **JavaScript interactif** : Animations, formulaires, effets visuels
- **Responsive** : Compatible mobile, tablette, desktop
- **SEO optimisé** : Meta tags, sitemap, structure sémantique

## 📁 Structure du Projet

```
new-portfolio/
├── _config.yml              # Configuration Jekyll
├── _layouts/                 # Templates de page
│   └── default.html
├── _includes/               # Composants réutilisables
│   ├── header.html
│   └── footer.html
├── assets/
│   ├── css/
│   │   └── main.css        # Styles principaux
│   ├── js/
│   │   └── main.js         # Scripts interactifs
│   └── images/             # Images du portfolio
├── index.html              # Page d'accueil
├── about.html              # Page À propos
├── skills.html             # Page Compétences
├── contact.html            # Page Contact
├── projects.html           # Page Projets
├── project.html            # Détail d'un projet
├── Gemfile                 # Dépendances Ruby
└── README.md              # Ce fichier
```

## 🛠️ Installation et Déploiement

### Prérequis

- Ruby 3.2.0 (spécifié dans `.ruby-version`)
- Bundler installé
- Git pour le versioning

### Corrections apportées pour Netlify

- **Jekyll 4.3.0** : Mise à jour depuis 4.2.0 pour compatibilité Ruby 3.4+
- **Gems ajoutées** : `csv` et `logger` (requises pour Ruby 3.4+)
- **Ruby 3.2.0** : Version fixée pour éviter les conflits
- **Configuration Netlify** : `netlify.toml` avec redirections et optimisations

### Installation locale

1. **Cloner le repository**
```bash
cd /mnt/c/Users/THE/Desktop/Portfolio/new-portfolio
```

2. **Installer les dépendances**
```bash
bundle install
```

3. **Lancer le serveur de développement**
```bash
bundle exec jekyll serve
```

4. **Ouvrir dans le navigateur**
```
http://localhost:4000
```

### Déploiement

#### Option 1: GitHub Pages
1. Créer un repository GitHub
2. Pousser le code
3. Activer GitHub Pages dans les paramètres
4. Le site sera disponible sur `https://username.github.io/repository-name`

#### Option 2: Netlify
1. Connecter le repository GitHub à Netlify
2. Configuration de build :
   - Build command: `bundle exec jekyll build`
   - Publish directory: `_site`
3. Le site sera automatiquement déployé

#### Option 3: Serveur personnel
1. Builder le site : `bundle exec jekyll build`
2. Uploader le contenu du dossier `_site` sur votre serveur web

## 🎨 Personnalisation

### Couleurs du thème

Les couleurs sont définies dans `_config.yml` :

```yaml
theme:
  colors:
    bg_color: "#0a192f"
    text_color: "#8892b0" 
    highlight_color: "#64ffda"
    red_color: "#ff6b6b"
    blue_color: "#818cf8"
```

### Informations personnelles

Modifier les informations dans `_config.yml` :

```yaml
author:
  name: "Joachim Douillard"
  github: "https://github.com/JoaDouillard"
  linkedin: "https://www.linkedin.com/in/joachim-douillard"
```

### Projets

Ajouter/modifier les projets dans `_config.yml` :

```yaml
projects:
  - id: 1
    title: "Nouveau Projet"
    description: "Description du projet"
    image: "/assets/images/projects/nouveau-projet.jpg"
```

## 🔧 Développement

### Structure des fichiers CSS

- Variables CSS dans `:root` pour la cohérence
- Sections commentées pour la maintenance
- Media queries pour le responsive
- Animations et transitions optimisées

### JavaScript

- Code modulaire avec fonctions séparées
- Event listeners optimisés
- Animations CSS couplées au JavaScript
- Gestion des erreurs et fallbacks

### Bonnes pratiques

- SEO optimisé avec Jekyll SEO Tag
- Images optimisées et lazy loading
- Code minifié en production
- Accessibilité respectée

## 📱 Compatibilité

- **Navigateurs** : Chrome, Firefox, Safari, Edge (versions récentes)
- **Responsive** : Mobile-first design
- **Performance** : Optimisé pour les Core Web Vitals
- **Accessibilité** : Conforme WCAG 2.1

## 🐛 Dépannage

### Erreurs communes

1. **Bundle install échoue**
   ```bash
   gem install bundler
   bundle install
   ```

2. **Jekyll ne se lance pas**
   ```bash
   bundle exec jekyll clean
   bundle exec jekyll serve --incremental
   ```

3. **Images ne s'affichent pas**
   - Vérifier les chemins dans `_config.yml`
   - S'assurer que les images sont dans `assets/images/`

4. **Styles CSS non appliqués**
   - Vérifier le chemin dans `_layouts/default.html`
   - Forcer le rechargement du cache

## 📞 Support

Pour toute question ou problème :
- Créer une issue sur le repository
- Contacter Joachim Douillard

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

---

**Portfolio Jekyll - Version 1.0.0**  
*Transition réussie de Node.js vers Jekyll avec conservation totale du design original*