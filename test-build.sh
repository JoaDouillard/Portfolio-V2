#!/bin/bash

# Script de test pour vérifier que le build Jekyll fonctionne

echo "🔧 Test de build Jekyll"
echo "======================="

# Vérifier la version de Ruby
echo "📋 Version de Ruby :"
ruby --version || echo "❌ Ruby non installé"

# Vérifier Bundler
echo "📋 Version de Bundler :"
bundle --version || echo "❌ Bundler non installé"

# Installer les gems
echo "📦 Installation des gems..."
if bundle install; then
    echo "✅ Gems installées avec succès"
else
    echo "❌ Erreur lors de l'installation des gems"
    exit 1
fi

# Nettoyer les anciens builds
echo "🧹 Nettoyage..."
bundle exec jekyll clean

# Tester le build
echo "🏗️ Test du build..."
if bundle exec jekyll build --verbose; then
    echo "✅ Build réussie !"
    echo "📁 Site généré dans _site/"
    
    # Vérifier que les fichiers principaux sont présents
    if [ -f "_site/index.html" ]; then
        echo "✅ index.html généré"
    else
        echo "❌ index.html manquant"
    fi
    
    if [ -f "_site/about.html" ]; then
        echo "✅ about.html généré"
    else
        echo "❌ about.html manquant"
    fi
    
    if [ -f "_site/assets/css/main.css" ]; then
        echo "✅ CSS principal généré"
    else
        echo "❌ CSS principal manquant"
    fi
    
    echo "🎉 Build complète !"
else
    echo "❌ Erreur lors du build"
    exit 1
fi