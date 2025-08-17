import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Données des projets
const projectsData = {
  1: {
    title: "Projet Symfony",
    date: "2025",
    tech: "Symfony, Composer, PHP, SQLite, Twig..",
    github: "https://github.com/JoaDouillard/SymfonyProject.git",
    images: {
      intro: "/assets/images/projects/project1/DemoP1.webm",
      details: "/assets/images/projects/project1/DetailsP1.webm",
      bonnesPratiques: "/assets/images/projects/go_to_github.svg",
      conclusion: "/assets/images/projects/project1/DemoP1.webm",
      cahierdescharges: "/assets/images/projects/go_to_github.svg",
    },
    intro: `Dans le cadre de notre formation, mon camarade Alex Guigue et moi-même avons développé une application de gestion d'événements musicaux que nous avons appelée <b>Symfony</b>.<br><br>Le bute : répondre au besoin de connexion entre organisateurs, artistes et public d'un événement musical. Ce projet fullstack combine un backend Symfony 6 avec une API RESTful mais aussi une interface graphique faite avec des Template Twig.<br><br>Dans une deuxième partie du projet nous avons créé une interface React interactive qui requête notre API nouvellement créée, nous avons nommé cette interface "Event Manager Client".<br><br>Pour créer cette Application nous avons créé une approche de travail. Elle était structurée autour du cahier des charges que nous avons établi en début de projet. Chacun prenait en charge une tâche spécifique issue de ce document et s'occupait de l'implémenter de A à Z. Cette méthode nous a permis d'avancer efficacement tout en assurant une couverture complète des fonctionnalités requises. Lorsqu'un membre rencontrait un obstacle, nous organisions des sessions de pair programming pour résoudre ensemble les problèmes techniques complexes.`,
    details: `Le backend du projet a été développé avec Symfony 6, utilisant Doctrine ORM pour la gestion de la base de données SQLite. Nous avons implémenté une architecture RESTful pour l'API, permettant une communication fluide entre le backend et les interfaces client. La sécurité a été gérée via le système d'authentification de Symfony avec JWT pour l'API.<br><br>Côté frontend, nous avons utilisé Twig pour le rendu des templates dans l'application principale Symfony, avec Bootstrap pour assurer un design responsive. L'interface React a été construite avec React Router pour la navigation et Axios pour les appels API. Nous avons également mis en place un système de cache pour optimiser les performances, notamment pour les requêtes fréquentes comme la liste des événements populaires.<br><br>Une difficulté technique particulière était la gestion des relations many-to-many entre les événements, les artistes et les utilisateurs, que nous avons résolue en implémentant des entités d'association avec des propriétés supplémentaires.`,
    bonnesPratiques: `Nous avons adopté plusieurs bonnes pratiques tout au long du développement pour assurer la qualité et la maintenabilité du code :<br><br><ul><br><li><strong>Code review</strong> : Chaque fonctionnalité était soumise à une revue de code par l'autre membre de l'équipe avant d'être intégrée.</li><br><li><strong>Clean code</strong> : Application des principes SOLID et respect des standards PSR pour PHP.</li><br><li><strong>Architecture MVC</strong> : Stricte séparation des responsabilités suivant le pattern Modèle-Vue-Contrôleur, tant dans Symfony que dans l'interface React.</li><br><li><strong>Gestion des dépendances</strong> : Utilisation de Composer et npm pour gérer proprement les dépendances et leurs versions.</li><br><li><strong>Convention de nommage</strong> : Respect strict des conventions de nommage pour les classes, méthodes et variables, facilitant la compréhension du code.</li></ul><br><br>Ces pratiques nous ont permis de maintenir un code de qualité et de faciliter la collaboration, tout en assurant une base solide pour les évolutions futures du projet.`,
    conclusion: `Ce projet a constitué une étape déterminante dans mon parcours de développeur web. Sur le plan technique, j'ai considérablement approfondi ma maîtrise du framework Symfony et des architectures MVC structurées. La mise en œuvre concrète de bonnes pratiques de développement, notamment les tests automatisés et l'intégration continue, a transformé ma vision du développement logiciel vers une approche plus professionnelle et industrialisée.<br><br>Au-delà des compétences techniques, cette expérience m'a permis de développer des aptitudes essentielles en gestion de projet. La répartition des tâches basée sur le cahier des charges et le respect des délais m'ont enseigné la discipline et la rigueur nécessaires dans un environnement professionnel. Les défis rencontrés, notamment dans la conception du modèle de données complexe, ont renforcé ma capacité à résoudre méthodiquement des problèmes techniques.<br><br>Sur le plan personnel, ce projet a été une opportunité de développer ma résilience face aux obstacles et ma capacité à collaborer efficacement au sein d'une équipe. Les sessions de pair programming et les revues de code m'ont fait comprendre la valeur du partage de connaissances et de la communication claire dans un contexte de développement collaboratif.<br><br>Cette expérience a confirmé mon attrait pour les défis techniques complexes et les projets structurants qui combinent innovation et rigueur méthodologique. Les compétences et la confiance acquises durant ce projet constituent désormais des atouts précieux que je compte mettre à profit dans mes futures missions professionnelles, avec une vision plus claire de mon évolution en tant que développeur web spécialisé en technologies back-end robustes et évolutives.`,
    cahierdescharges: `## Structure technique\n- **Backend**: Symfony 6\n- **Frontend**: React avec Vite.js\n- **Base de données**: SQLite (obligatoire)\n- **Architecture**: Deux applications distinctes lancées séparément\n\n## Fonctionnalités principales\n\n### 1. Partie Fullstack\n- **Accès**: Page d'accueil publique, reste de l'application protégé par authentification\n- **Navigation**: Adaptative selon le profil utilisateur (admin/user)\n- **Ressources principales**: Utilisateurs, Artistes, Événements\n\n#### Rôles utilisateurs\n- **Admin**:\n  - Attribution automatique au premier utilisateur inscrit\n  - Gestion exclusive des artistes (création/modification)\n  - Accès à la liste complète des utilisateurs\n\n- **Utilisateur standard**:\n  - Consultation des artistes et événements\n  - Création/modification/suppression de ses propres événements\n  - Inscription/désinscription aux événements\n  - Inscription automatique à ses propres événements\n  - Filtrage et recherche (artistes par nom, événements par date)`,
  },
  2: {
    title: "QuadTree",
    date: "2024",
    tech: "C++, Visual Studio & QT",
    github: "https://github.com/JoaDouillard",
    images: {
      intro: "/assets/images/projects/project2/DetailsP2.svg",
      details: "/assets/images/projects/project2/DetailsP2.svg",
      bonnesPratiques: "/assets/images/projects/go_to_github.svg",
      conclusion: "/assets/images/projects/project2/DetailsP2.svg",
      cahierdescharges: "/assets/images/projects/go_to_github.svg",
    },
    intro: `Dans le cadre de notre cours "Qualité de développement" centré sur le C++, mon collègue Mathieu Dumas et moi-même nous avons développé une structure de données QuadTree. Ce projet s'inscrivait dans une démarche pédagogique visant à nous familiariser avec les bonnes pratiques de développement et l'optimisation des performances.<br><br>Le QuadTree est une structure de données spatiale qui partitionne récursivement l'espace 2D en quatre quadrants. Cette structure est particulièrement adaptée pour des applications nécessitant des requêtes spatiales rapides comme la détection de collisions, le rendu graphique sélectif, ou les systèmes d'information géographique.<br><br>Notre mission consistait à implémenter un template C++ TQuadTree respectant scrupuleusement les spécifications d'interface fournies dans le cahier des charges, tout en optimisant les performances tant en termes de vitesse d'exécution que de consommation mémoire. Notre implémentation devait passer avec succès une série de tests unitaires rigoureux et démontrer son efficacité dans une application graphique de simulation de particules.<br><br>Le projet était structuré en deux parties :<br>- La bibliothèque QuadTree : Un module C++ fournissant l'implémentation TQuadTree avec des tests unitaires extensifs<br>- L'application Particules : Une démonstration visuelle utilisant Qt pour mettre en évidence les gains de performance apportés par notre QuadTree lors de la visualisation de dizaines de milliers de rectangles`,
    details: `Notre implémentation du QuadTree est basée sur un template C++ qui utilise les concepts C++20 pour garantir la type-safety (empêcher les erreurs de typage) des objets spatiaux manipulés.<br><br>La structure de données divise récursivement l'espace en quatre quadrants égaux, permettant des recherches spatiales rapides avec une complexité logarithmique O(log n) plutôt que linéaire O(n). Chaque nœud gère ses limites spatiales via la structure SLimits et utilise des smart pointers pour une gestion mémoire optimisée.<br><br>Les deux fonctionnalités principales de requêtage spatial sont :<ul><li>findInscribed - Retourne les éléments entièrement contenus dans une zone</li><li>findColliding - Retourne les éléments qui intersectent une zone</li></ul><br>Pour faciliter l'intégration avec la STL (La STL est la bibliothèque standard du C++ qui fournit des conteneurs (comme vector, map), des algorithmes (comme sort, find) et des itérateurs pour manipuler ces structures de manière générique), nous avons implémenté des itérateurs compatibles (std::input_iterator) offrant trois modes d'accès : tous les éléments, éléments en collision, ou éléments inscrits dans une zone donnée.<br><br>Les tests de performance ont démontré que notre solution peut gérer efficacement des dizaines de milliers de rectangles avec des temps de réponse de l'ordre de quelques millisecondes, notamment grâce à l'élimination rapide des branches non pertinentes lors des requêtes spatiales.`,
    bonnesPratiques: `Notre projet QuadTree a été développé en respectant scrupuleusement les principes de qualité logicielle et les bonnes pratiques du C++ moderne.<br><br><strong>Architecture et design</strong><ul><li>Utilisation du <em>design pattern Composite</em> pour la structure hiérarchique des nœuds du QuadTree</li><li>Séparation claire des responsabilités avec une conception modulaire</li><li>Application du principe RAII (Resource Acquisition Is Initialization) pour la gestion des ressources</li><li>Interface minimaliste mais complète, suivant le principe "easy to use, hard to misuse"</li></ul><br><strong>Qualité du code</strong><ul><li>Utilisation systématique de concepts C++20 pour garantir la validité des types</li><li>Documentation exhaustive avec Doxygen et commentaires explicatifs pour les sections complexes</li><li>Nommage explicite des variables et fonctions selon les conventions modernes</li><li>Construction d'une suite de tests unitaires complète avec couverture > 90%</li><li>Vérification continue via static analyzers (Clang-Tidy, CppCheck) et Sanitizers</li></ul><br><strong>Optimisations</strong><ul><li>Utilisation de smart pointers (std::unique_ptr) pour éviter les fuites mémoire</li><li>Implémentation de move semantics pour minimiser les copies d'objets volumineux</li><li>Réduction de l'empreinte mémoire par lazy initialization des quadrants enfants</li><li>Optimisation des algorithmes de recherche avec early-exit lorsque possible</li><li>Élagage efficace des branches non pertinentes durant les requêtes spatiales</li><li>Paramétrage de la profondeur maximale pour éviter une fragmentation excessive</li></ul><br><strong>Collaboration et versioning</strong><ul><li>Développement piloté par les tests (TDD) implémenté tout au long du cycle</li><li>Utilisation de Git avec une stratégie de branching claire (feature branches)</li><li>Code reviews systématiques avant chaque merge</li><li>Intégration continue avec vérification automatique de la qualité</li></ul><br>L'application de ces bonnes pratiques nous a permis d'obtenir un code robuste, maintenable et performant, validé par les métriques de qualité et les tests de performance.`,
    conclusion: `Ce projet a constitué une expérience d'apprentissage qui nous a permis de mettre en pratique des concepts de programmation C++ tout en résolvant un problème concret d'optimisation spatiale.<br><br>Nous avons découvert un moyen d'optimiser notre code, particulièrement efficace pour la recherche d'objets 2D sur une map (dans notre cas).<br>D'un point de vue pédagogique, ce projet nous a forcés à réfléchir sur comment bien utiliser la mémoire et le processeur de nos ordinateurs.<br><br>Si nous devions poursuivre ce travail, nous explorerions l'extension de notre structure vers un Octree (3D).`,
    cahierdescharges: `## Objectifs techniques\n- Implémentation complète d'un QuadTree en C++\n- Support des opérations CRUD (Create, Read, Update, Delete)\n- Optimisation des performances pour grandes datasets\n- Interface simple et intuitive\n\n## Fonctionnalités requises\n\n### Structure de données\n- Division récursive de l'espace en quadrants\n- Gestion dynamique des noeuds\n- Équilibrage automatique\n\n### Opérations supportées\n- Insertion de points O(log n)\n- Suppression avec réorganisation\n- Requêtes spatiales par région\n- Recherche de proximité\n\n### Tests et validation\n- Suite de tests unitaires complète\n- Tests de performance avec datasets volumineux\n- Validation de la complexité algorithmique`,
  },
  3: {
    title: "The Verdant Sentinel",
    date: "2025",
    tech: "Unity, C#, Blender, 3DS Max, Jira, GitHub",
    github:
      "https://drive.google.com/file/d/1oqaX_V7OgIHJ3jqKby8K9ECvfV17MzMz/view?usp=sharing",
    images: {
      intro: "/assets/images/projects/project3/DemoP3.webm",
      details: "/assets/images/projects/go_to_github.svg",
      bonnesPratiques: "/assets/images/projects/project3/DetailsP3.webp",
      conclusion: "/assets/images/projects/project3/DemoP3.webm",
      cahierdescharges: "/assets/images/projects/go_to_github.svg",
    },
    intro: `The Verdant Sentinel est un jeu d'action-aventure en solo dans un univers forestier mystique, développé en équipe de six personnes. Dans ce jeu à l'esthétique low poly colorée, le joueur incarne le dernier survivant d'une tribu massacrée qui dispose d'une heure pour s'équiper et affronter l'entité censée protéger son village. Cette dernière as disparue lorsque le village en avait le plus besoin. En effet la créature a abandonné sont rôle lorsque le village a été attaqué par des colonialistes.<br><br><strong>Membres du projet et leurs rôles</strong><table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;"><tr font-weight: bold;"><td>Nom</td><td>Rôle</td><td>Référent</td></tr><tr><td>Corentin Detournay</td><td>Programation</td><td>Code</td></tr><tr><td>Joachim Douillard</td><td>Modéliseur 3D</td><td>Inclusivité + écologie</td></tr><tr><td>Christophe Bolon</td><td>Programation</td><td>Code</td></tr><tr><td>Mathis Ciochetto</td><td>Modéliseur 3D</td><td>Inclusivité + écologie</td></tr><tr><td>Virgile Marion</td><td>3D pour le moment</td><td>Game design + histoire</td></tr><tr><td>Enzo Bordet</td><td>Programation</td><td>Tests</td></tr></table><br><br>Le projet est développé dans un environnement Unity, avec une répartition flexible des tâches entre programmation et modélisation 3D. Le gameplay est centré sur l'exploration, la récolte de ressources et un système de combat dynamique. Le joueur doit préparer son équipement et ses compétences durant les trois jours de jeu pour affronter l'entité finale avant qu'elle ne disparaisse.<br><br>Notre approche de développement met l'accent sur l'accessibilité et le numérique responsable, avec des optimisations de code et des fonctionnalités d'inclusion pour différents types de joueurs.`,
    details: `Développé avec Unity, The Verdant Sentinel intègre plusieurs systèmes techniques sophistiqués. Le cœur du gameplay repose sur un système de combat dynamique avec diverses armes, un mécanisme de récolte de ressources, et un système de crafting permettant de créer des objets essentiels.<br><br>Le jeu inclut une gestion du temps simulant trois jours dans l'univers du jeu, avec un cycle jour/nuit influençant l'environnement et certaines mécaniques.<br><br>L'environnement forestier a été modélisé en style low poly coloré à l'aide de Blender et 3DS Max, optimisé pour maintenir de bonnes performances tout en préservant une esthétique attrayante.<br><br>Un système d'IA contrôle les ennemis et l'entité finale avec des patterns d'attaques et comportements variés. Le projet intègre également une gestion de sauvegarde permettant aux joueurs de conserver leur progression entre les sessions.`,
    bonnesPratiques: `Notre équipe a implémenté de nombreuses bonnes pratiques tout au long du développement.<br><br><strong>Sur le plan du code :</strong><ul><li>Architecture modulaire avec des systèmes de scripts découplés</li><li>Optimisation pour minimiser les calculs inutiles, réduisant la consommation CPU et mémoire</li><li>Système de pooling d'objets pour éviter les instantiations/destructions répétitives</li></ul><br><strong>Pour la partie graphique :</strong><ul><li>Assets low poly avec équilibre optimal entre qualité visuelle et légèreté</li><li>Textures compressées et atlas pour réduire l'empreinte mémoire</li><li>Niveau de détail (LOD) dynamique adaptant la complexité des modèles selon la distance</li></ul><br><strong>Concernant l'accessibilité :</strong><ul><li>Options de configuration des couleurs pour les personnes daltoniennes</li><li>Système de sous-titres complet</li><li>Contrôles entièrement remappables</li><li>Assistance de visée optionnelle</li></ul><br><strong>Processus de développement :</strong><ul><li>Pratiques agiles avec des sprints hebdomadaires</li><li>Revue de code systématique via GitHub</li><li>Tests automatisés pour les fonctionnalités critiques</li></ul><br><strong>Optimisation énergétique :</strong><ul><li>Limitation des calculs de physique aux zones visibles</li><li>Réduction de la complexité des algorithmes de pathfinding</li><li>Diminution de la consommation de batterie sur les appareils portables</li></ul>`,
    conclusion: `Ce projet collaboratif m'a permis d'approfondir mes compétences en développement de jeux vidéo avec Unity et en modélisation 3D, tout en travaillant efficacement au sein d'une équipe aux rôles bien définis. En clair, ce projet à était professionnalisant de par les exigences de notre cahier des charges mais aussi de par l'exercice de collaboration que nous avons du mettre en place moi et mes camarades pour mener le projet jusqu'à son terme.<br><br>Travailler avec des coéquipiers talentueux a été une expérience très enrichissante :<ul><li><strong>Corentin Detournay</strong> - Sa maîtrise du code et son leadership technique ont assuré la solidité de notre base de développement</li><li><strong>Joachim Douillard</strong> - Son expertise en modélisation 3D et son engagement pour l'accessibilité ont ajouté une dimension inclusive au projet</li><li><strong>Christophe Bolon</strong> - Ses compétences en programmation ont été cruciales pour l'implémentation des systèmes de jeu complexes</li><li><strong>Mathis Ciochetto</strong> - Ses contributions artistiques et sa sensibilité aux questions écologiques ont façonné l'esthétique durable du jeu</li><li><strong>Virgile Marion</strong> - Sa vision créative du game design et sa construction du lore ont donné vie et profondeur à l'univers du jeu</li><li><strong>Enzo Bordet</strong> - Son expertise en tests et en qualité a assuré une expérience de jeu fluide et sans bugs</li></ul>`,
    cahierdescharges: `## Présentation du Projet\n\n**Nom du projet** : The Verdant Sentinel\n\n**Genre** : Action-aventure\n\n**Public cible** : Accessible à tous les joueurs (débutants, moyens, expérimentés)\n\n**Type de jeu** : Fun game en solo\n\n**Monétisation** : Achat unique\n\n## Concept du Jeu\n\n### Pitch\nUn jeune homme, dernier survivant d'une tribu massacrée par des envahisseurs, part à la recherche de l'entité qui était censée protéger son village. Apprenant que cette entité s'apprête à quitter les lieux, il décide de se préparer pendant trois jours avant de l'affronter.\n\n### Objectif Principal\nLe joueur doit s'équiper rapidement par l'exploration et vaincre le boss final (l'entité) avant la fin du temps imparti (3 jours dans le monde du jeu).\n\n### Caractéristiques Principales\n- **Temps limité** : Le joueur dispose de 3 jours dans le monde du jeu pour se préparer et affronter l'entité\n- **Multiples fins** : Possibilité de terminer le jeu de différentes manières selon les choix d'exploration\n- **Univers forestier** : Environnement naturel et mystique`,
  },
  4: {
    title: "Event Manager Client",
    date: "2024",
    tech: "React, Vite.js, Fetch API.. ",
    github: "https://github.com/GUIGUEAxel/React-SymfonyProject",
    images: {
      intro: "/assets/images/projects/project4/DemoP4.webm",
      details: "/assets/images/projects/go_to_github.svg",
      bonnesPratiques: "/assets/images/projects/project4/DetailsP4.webm",
      conclusion: "/assets/images/projects/project4/DemoP4.webm",
      cahierdescharges: "/assets/images/projects/go_to_github.svg",
    },
    intro: `L'Event Manager Client est la partie frontend d'une architecture complète, travaillant de concert avec une API Symfony backend. Ce projet React, développé avec Vite.js, constitue l'interface utilisateur d'un système de gestion d'artistes et d'événements. Il représente la couche de présentation d'une application full-stack moderne et modulaire.<br><br>Cette application client s'appuie sur les données fournies par l'API Symfony pour offrir aux utilisateurs une expérience interactive et intuitive. Elle permet de naviguer, filtrer et interagir avec les artistes et les événements stockés dans la base de données backend. Le développement de ce composant frontend vient compléter l'architecture globale du projet, créant ainsi une solution complète de gestion événementielle.<br><br>En tant que couche de présentation d'une architecture microservices, ce projet démontre ma capacité à développer des interfaces modernes qui communiquent efficacement avec des API RESTful.`,
    details: `L'Event Manager s'articule autour de deux composants principaux :<br>- <strong>Backend API (Symfony)</strong> : Fournit les endpoints RESTful, la logique métier et la persistance des données<br>- <strong>Frontend Client (React/Vite)</strong> : Offre l'interface utilisateur et gère les interactions<br><br>Cette séparation suit les principes d'une architecture orientée services, où chaque composant a une responsabilité unique et bien définie.<br><br><strong>Technologies clés du frontend</strong><ul><li><strong>React 18</strong> : Bibliothèque JavaScript pour construire l'interface utilisateur</li><li><strong>Vite.js</strong> : Outil de build ultra-rapide qui améliore considérablement le temps de développement</li><li><strong>React Router</strong> : Gestion avancée de la navigation entre les différentes pages</li><li><strong>ESLint</strong> : Outil d'analyse statique pour maintenir la qualité et la cohérence du code</li><li><strong>Fetch API</strong> : Utilisée pour communiquer avec l'API Symfony backend</li></ul><br><strong>Organisation du code frontend</strong><ul><li><strong>Components</strong> : Éléments d'interface réutilisables comme ArtistCard, EventCard, Navbar et Footer</li><li><strong>Pages</strong> : Vues principales (Artistes, Détails d'artiste, Événements, Détails d'événement)</li><li><strong>Services</strong> : Couche d'abstraction pour les appels à l'API Symfony</li></ul>`,
    bonnesPratiques: `<strong>Architecture microservices</strong><ul><li><strong>Séparation des responsabilités</strong> : Le client React se concentre sur la présentation tandis que l'API Symfony gère la logique métier</li><li><strong>Découplage</strong> : Les deux composants peuvent évoluer indépendamment tant que le contrat d'API est respecté</li><li><strong>Scalabilité</strong> : Possibilité de faire évoluer chaque partie séparément selon les besoins</li></ul><br><strong>Organisation du code frontend</strong><ul><li><strong>Architecture modulaire</strong> : Séparation claire des responsabilités entre composants, pages et services</li><li><strong>Composants réutilisables</strong> : Création de composants génériques comme ArtistCard et EventCard</li><li><strong>Isolation des services API</strong> : Centralisation des appels API pour faciliter la maintenance</li></ul><br><strong>Optimisation des performances</strong><ul><li>Utilisation de Vite.js comme bundler pour des temps de compilation réduits</li><li>Implémentation du filtrage côté client pour minimiser les appels réseau inutiles</li><li>Utilisation judicieuse des hooks React pour éviter les rendus superflus</li></ul>`,
    conclusion: `Le projet Event Manager Client démontre ma capacité à développer la partie frontend d'une architecture complète full-stack. En créant une interface React moderne qui communique efficacement avec une API Symfony, j'ai mis en œuvre une solution complète de gestion d'artistes et d'événements.<br><br>Cette réalisation illustre ma maîtrise des architectures modernes et ma compréhension des interactions entre frontend et backend. Le développement en parallèle des deux composantes m'a permis d'adopter une vision globale du projet tout en respectant les spécificités techniques de chaque technologie.<br><br>Les défis principaux de ce projet, notamment l'implémentation d'une communication fluide entre React et l'API Symfony, ont été surmontés grâce à une architecture bien pensée et une séparation claire des responsabilités. Cette expérience a considérablement renforcé mes compétences en développement d'applications web modernes, en me permettant de maîtriser l'ensemble de la chaîne de développement.`,
    cahierdescharges: `# Cahier des Charges - Application Front-end React\n\n## 1. Présentation Générale\n- **Objectif** : Développer une interface utilisateur pour la gestion d'artistes et d'événements\n- **Technologie** : React avec ViteJS\n- **Architecture** : Application Single Page avec navigation entre composants\n\n## 2. Structure de l'Application\n- **Navigation** : Système de navigation avec boutons cliquables entre les différentes sections\n- **Pages** :\n  - Listing des artistes\n  - Détails d'un artiste\n  - Listing des événements\n  - Détails d'un événement\n\n## 3. Fonctionnalités Détaillées\n\n### 3.1 Listing des Artistes\n- **Affichage** : Liste complète des artistes disponibles\n- **Filtrage** :\n  - Champ texte pour filtrer dynamiquement les artistes par nom\n  - Filtrage effectué côté client (sans requête serveur supplémentaire)\n- **Tri** :\n  - Bouton pour trier la liste par nom (ordre alphabétique croissant/décroissant)\n- **Navigation** :\n  - Artistes cliquables redirigeant vers la page de détail correspondante`,
  },
};

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [activeSection, setActiveSection] = useState("intro");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const projectId = parseInt(id);
    if (projectsData[projectId]) {
      setProject(projectsData[projectId]);
    }
  }, [id]);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const isVideo = (path) => {
    return (
      path &&
      (path.endsWith(".mp4") || path.endsWith(".webm") || path.endsWith(".ogg"))
    );
  };

  const getCurrentMedia = () => {
    return project.images[activeSection];
  };

  const renderMarkdown = (text) => {
    return text.split("\n").map((line, index) => {
      if (line.startsWith("## ")) {
        return (
          <h2
            key={index}
            style={{
              color: "#64ffda",
              fontSize: "1.4rem",
              marginTop: "1.5rem",
              fontWeight: "600",
            }}
          >
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("# ")) {
        return (
          <h1
            key={index}
            style={{
              color: "#64ffda",
              fontSize: "1.6rem",
              borderBottom: "1px solid rgba(100, 255, 218, 0.2)",
              paddingBottom: "0.5rem",
              fontWeight: "600",
            }}
          >
            {line.replace("# ", "")}
          </h1>
        );
      } else if (line.startsWith("### ")) {
        return (
          <h3
            key={index}
            style={{ color: "#8892b0", fontSize: "1.2rem", fontWeight: "600" }}
          >
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.startsWith("- ")) {
        return (
          <li
            key={index}
            style={{
              marginLeft: "1.5rem",
              margin: "0.4rem 0",
              position: "relative",
            }}
          >
            {line.replace("- ", "")}
          </li>
        );
      } else if (line.includes("**")) {
        const parts = line.split("**");
        return (
          <p key={index} style={{ margin: "0.8rem 0" }}>
            {parts.map((part, i) =>
              i % 2 === 1 ? (
                <strong key={i} style={{ color: "#64ffda" }}>
                  {part}
                </strong>
              ) : (
                part
              )
            )}
          </p>
        );
      } else if (line.trim() === "") {
        return <br key={index} />;
      } else {
        return (
          <p key={index} style={{ margin: "0.8rem 0" }}>
            {line}
          </p>
        );
      }
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(160deg, #1a2332 0%,rgb(33, 50, 76) 30%,rgb(31, 46, 79) 70%,rgb(19, 28, 58) 100%)",
        color: "#8892b0",
        fontFamily: "Consolas, monospace",
        position: "relative",
      }}
    >
      {/* Background Éclat Technologique très assombri */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
          radial-gradient(circle at 15% 20%, rgba(5, 10, 20, 0.008) 0%, transparent 60%),
          radial-gradient(circle at 85% 80%, rgba(168, 85, 247, 0.007) 0%, transparent 50%),
          radial-gradient(ellipse at 40% 10%, rgba(8, 16, 35, 0.006) 0%, transparent 55%),
          radial-gradient(circle at 70% 40%, rgba(251, 146, 60, 0.004) 0%, transparent 45%),
          radial-gradient(circle at 50% 30%, rgba(10, 18, 40, 0.003) 0%, transparent 40%),
          radial-gradient(ellipse at 90% 10%, rgba(6, 12, 25, 0.006) 0%, transparent 50%)
        `,
          animation: "tech-glow 16s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: -1,
        }}
      ></div>

      {/* Animation CSS pour l'éclat technologique */}
      <style>{`
        @keyframes tech-glow {
          0%, 100% {
            transform: translateX(0) translateY(0) scale(1) rotate(0deg);
            opacity: 0.85;
          }
          25% {
            transform: translateX(15px) translateY(-20px) scale(1.08) rotate(1deg);
            opacity: 1;
          }
          50% {
            transform: translateX(-10px) translateY(15px) scale(0.92) rotate(-1deg);
            opacity: 0.75;
          }
          75% {
            transform: translateX(20px) translateY(-5px) scale(1.05) rotate(0.5deg);
            opacity: 0.95;
          }
        }
      `}</style>
      {/* Custom scrollbar styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .scrollable-content::-webkit-scrollbar {
            width: 8px;
          }
          
          .scrollable-content::-webkit-scrollbar-track {
            background: rgba(136, 146, 176, 0.1);
            border-radius: 4px;
          }
          
          .scrollable-content::-webkit-scrollbar-thumb {
            background:rgba(48, 78, 159, 0.77);
            border-radius: 4px;
            opacity: 0.7;
            transition: all 0.3s ease;
          }
          
          .scrollable-content::-webkit-scrollbar-thumb:hover {
            background: rgba(100, 255, 218, 0.8);
          }
        `,
        }}
      />
      {/* Header */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "70px",
          padding: window.innerWidth <= 768 ? "0 20px" : "0 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          backgroundColor:
            isSmallScreen || scrolled
              ? "rgba(10, 25, 47, 0.95)"
              : "transparent",
          backdropFilter: isSmallScreen || scrolled ? "blur(10px)" : "none",
          zIndex: 1000,
        }}
      >
        <Link
          to="/"
          style={{
            color: "#64ffda",
            fontSize: "1.2rem",
            textDecoration: "none",
            fontWeight: "medium",
          }}
        >
          Joachim_Douillard_
        </Link>
        <nav>
          <Link
            to="/contact"
            style={{
              color: "#8892b0",
              textDecoration: "none",
              fontSize: "1rem",
              transition: "color 0.3s ease",
              padding: "5px 10px",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#64ffda")}
            onMouseLeave={(e) => (e.target.style.color = "#8892b0")}
          >
            contact_me_
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: isSmallScreen
            ? "90px 20px 90px 20px"
            : "100px 50px 100px 50px",
          maxWidth: "1800px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: isSmallScreen ? "flex" : "grid",
            flexDirection: isSmallScreen ? "column" : "initial",
            gridTemplateColumns: isSmallScreen ? "none" : "350px 1fr 550px",
            gap: isSmallScreen ? "30px" : "60px",
          }}
        >
          {/* Navigation Sidebar */}
          <div
            style={{
              order: isSmallScreen ? 1 : 0,
            }}
          >
            <nav>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: isSmallScreen ? "flex" : "block",
                  flexWrap: "wrap",
                  gap: isSmallScreen ? "10px" : "0",
                  justifyContent: isSmallScreen ? "center" : "flex-start",
                }}
              >
                {[
                  { key: "intro", label: "Contexte" },
                  { key: "details", label: "Détails technique" },
                  { key: "bonnesPratiques", label: "Bonnes pratiques" },
                  { key: "conclusion", label: "Conclusion" },
                  { key: "cahierdescharges", label: "Cahier des charges" },
                ].map((section) => (
                  <li
                    key={section.key}
                    style={{ marginBottom: isSmallScreen ? "0" : "15px" }}
                  >
                    <button
                      onClick={() => handleSectionClick(section.key)}
                      style={{
                        background: "none",
                        border: "none",
                        color:
                          activeSection === section.key ? "#64ffda" : "#8892b0",
                        fontFamily: "Consolas, monospace",
                        fontSize: isSmallScreen ? "0.9rem" : "1rem",
                        padding: isSmallScreen ? "8px 12px" : "10px",
                        width: isSmallScreen ? "auto" : "100%",
                        textAlign: "left",
                        cursor: "pointer",
                        transition: "color 0.3s ease",
                        whiteSpace: "nowrap",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#64ffda")}
                      onMouseLeave={(e) =>
                        (e.target.style.color =
                          activeSection === section.key ? "#64ffda" : "#8892b0")
                      }
                    >
                      <span
                        style={{
                          color: "#64ffda",
                          opacity: activeSection === section.key ? 1 : 0,
                          marginRight: "10px",
                          transition: "opacity 0.3s ease",
                        }}
                      >
                        >
                      </span>
                      {section.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Content Area */}
          <div
            style={{
              order: isSmallScreen ? 2 : 0,
            }}
          >
            <div
              className={isSmallScreen ? "" : "scrollable-content"}
              style={{
                lineHeight: "1.6",
                maxHeight: isSmallScreen ? "none" : "calc(100vh - 280px)",
                overflowY: isSmallScreen ? "visible" : "auto",
                paddingRight: isSmallScreen ? "0" : "15px",
              }}
            >
              {activeSection === "intro" && (
                <div>
                  <h1
                    style={{
                      color: "#ccd6f6",
                      fontSize: isSmallScreen ? "1.8rem" : "2rem",
                      marginBottom: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {project.title}
                  </h1>
                  <div
                    style={{
                      marginBottom: "30px",
                      fontSize: "0.9rem",
                    }}
                  >
                    <span
                      style={{
                        color: "#64ffda",
                        marginRight: "20px",
                      }}
                    >
                      Date : {project.date}
                    </span>
                    <span
                      style={{
                        color: "#64ffda",
                      }}
                    >
                      Technologies used : {project.tech}
                    </span>
                  </div>
                  <div
                    style={{
                      lineHeight: "1.6",
                      fontSize: "1rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: project.intro }}
                  />
                </div>
              )}

              {activeSection === "details" && (
                <div>
                  <h2
                    style={{
                      color: "#ccd6f6",
                      fontSize: "1.8rem",
                      marginBottom: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Détails technique
                  </h2>
                  <div
                    style={{
                      lineHeight: "1.6",
                      fontSize: "1rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: project.details }}
                  />
                </div>
              )}

              {activeSection === "bonnesPratiques" && (
                <div>
                  <h2
                    style={{
                      color: "#ccd6f6",
                      fontSize: "1.8rem",
                      marginBottom: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Bonnes pratiques
                  </h2>
                  <div
                    style={{
                      lineHeight: "1.6",
                      fontSize: "1rem",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: project.bonnesPratiques,
                    }}
                  />
                </div>
              )}

              {activeSection === "conclusion" && (
                <div>
                  <h2
                    style={{
                      color: "#ccd6f6",
                      fontSize: "1.8rem",
                      marginBottom: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Conclusion
                  </h2>
                  <div
                    style={{
                      lineHeight: "1.6",
                      fontSize: "1rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: project.conclusion }}
                  />
                </div>
              )}

              {activeSection === "cahierdescharges" && (
                <div>
                  <h2
                    style={{
                      color: "#ccd6f6",
                      fontSize: "1.8rem",
                      marginBottom: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Cahier des charges
                  </h2>
                  <div
                    style={{
                      lineHeight: "1.6",
                      fontSize: "1rem",
                      fontFamily: "Consolas, monospace",
                    }}
                  >
                    {renderMarkdown(project.cahierdescharges)}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Media Sidebar */}
          <div
            style={{
              order: isSmallScreen ? 3 : 0,
              maxWidth: isSmallScreen ? "600px" : "none",
              margin: isSmallScreen ? "0 auto" : "0",
            }}
          >
            {getCurrentMedia() && (
              <div
                style={{
                  marginBottom: "20px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                {isVideo(getCurrentMedia()) ? (
                  <video
                    controls
                    autoPlay
                    loop
                    muted
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "500px",
                      objectFit: "cover",
                    }}
                  >
                    <source src={getCurrentMedia()} type="video/webm" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                ) : (
                  <img
                    src={getCurrentMedia()}
                    alt={`${project.title} - ${activeSection}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "500px",
                      borderRadius: "inherit",
                    }}
                  />
                )}
              </div>
            )}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                alignItems: "center",
              }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#64ffda",
                  textDecoration: "none",
                  padding: "12px 20px",
                  border: "1px solid #64ffda",
                  borderRadius: "4px",
                  transition: "all 0.3s ease",
                  fontSize: "0.9rem",
                  backgroundColor: "transparent",
                  textAlign: "center",
                  minHeight: "44px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(100, 255, 218, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                Go to GitHub
              </a>

              <Link
                to="/projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 20px",
                  border: "1px solid #64ffda",
                  color: "#64ffda",
                  textDecoration: "none",
                  borderRadius: "4px",
                  transition: "all 0.3s ease",
                  fontSize: "0.9rem",
                  backgroundColor: "transparent",
                  textAlign: "center",
                  minHeight: "44px",
                  width: "auto",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(100, 255, 218, 0.1)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                ← Retour aux projets
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          padding: "20px 50px",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          zIndex: 1000,
          backgroundColor:
            isSmallScreen || scrolled
              ? "rgba(10, 25, 47, 0.95)"
              : "transparent",
          backdropFilter: isSmallScreen || scrolled ? "blur(10px)" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "20px",
          }}
        >
          <span
            style={{
              fontSize: "0.8rem",
              marginRight: "20px",
            }}
          >
            find me in:
          </span>
          <a
            href="https://github.com/JoaDouillard?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#8892b0",
              textDecoration: "none",
              fontSize: "0.9rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#64ffda")}
            onMouseLeave={(e) => (e.target.style.color = "#8892b0")}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joachim-douillard"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#8892b0",
              textDecoration: "none",
              fontSize: "0.9rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#64ffda")}
            onMouseLeave={(e) => (e.target.style.color = "#8892b0")}
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default ProjectDetail;
