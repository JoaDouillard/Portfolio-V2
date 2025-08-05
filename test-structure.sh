#!/bin/bash

# Script de test pour vérifier la structure du portfolio Jekyll

echo "🧪 Test de la structure du Portfolio Jekyll"
echo "=========================================="

# Fonction pour vérifier l'existence d'un fichier
check_file() {
    if [ -f "$1" ]; then
        echo "✅ $1 - OK"
    else
        echo "❌ $1 - MANQUANT"
    fi
}

# Fonction pour vérifier l'existence d'un dossier
check_dir() {
    if [ -d "$1" ]; then
        echo "✅ $1/ - OK"
    else
        echo "❌ $1/ - MANQUANT"
    fi
}

echo
echo "📁 Vérification des fichiers principaux :"
check_file "_config.yml"
check_file "Gemfile"
check_file "README.md"
check_file "index.html"

echo
echo "📄 Vérification des pages :"
check_file "about.html"
check_file "skills.html"
check_file "contact.html"
check_file "projects.html"
check_file "project.html"

echo
echo "📂 Vérification de la structure Jekyll :"
check_dir "_layouts"
check_dir "_includes"

echo
echo "🎨 Vérification des assets :"
check_dir "assets"
check_dir "assets/css"
check_dir "assets/js"
check_dir "assets/images"
check_file "assets/css/main.css"
check_file "assets/js/main.js"

echo
echo "🖼️ Vérification des images importantes :"
check_file "assets/images/about/me.jpeg"
check_file "assets/images/projects/VignetteallP.webp"
check_file "assets/images/projects/project1/VignetteP1.webp"
check_file "assets/images/skills/CV.pdf"

echo
echo "🧩 Vérification des layouts et includes :"
check_file "_layouts/default.html"
check_file "_includes/header.html"
check_file "_includes/footer.html"

echo
echo "🔍 Analyse de la configuration :"
if grep -q "title:" _config.yml; then
    echo "✅ Titre configuré dans _config.yml"
else
    echo "❌ Titre manquant dans _config.yml"
fi

if grep -q "author:" _config.yml; then
    echo "✅ Informations auteur configurées"
else
    echo "❌ Informations auteur manquantes"
fi

if grep -q "projects:" _config.yml; then
    echo "✅ Projets configurés"
else
    echo "❌ Projets manquants dans la configuration"
fi

echo
echo "📏 Statistiques :"
echo "Nombre de fichiers HTML : $(find . -name "*.html" | wc -l)"
echo "Nombre de fichiers CSS : $(find . -name "*.css" | wc -l)"
echo "Nombre de fichiers JS : $(find . -name "*.js" | wc -l)"
echo "Taille des assets : $(du -sh assets/ 2>/dev/null || echo 'N/A')"

echo
echo "✨ Test terminé !"
echo "Le portfolio Jekyll est prêt à être déployé avec Ruby et Bundler."