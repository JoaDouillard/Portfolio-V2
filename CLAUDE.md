# 📝 CLAUDE.md - Notes et Exigences du Projet

## 🎯 Exigences de Responsive Design

### **IMPORTANT : Gestion automatique des écrans**

L'utilisateur souhaite que cette application React + Tailwind soit **auto-gérée** pour les différents écrans :

- ❌ **PAS** de vérification écran par écran manuelle
- ❌ **PAS** de réglage pixel par pixel dans le CSS
- ❌ **PAS** de gestion manuelle des breakpoints pour chaque composant

### **Objectif : Simplicité**

- ✅ Utiliser les **templates** et **composants réutilisables** de React
- ✅ Exploiter les **classes responsive** de Tailwind (sm:, md:, lg:, xl:)
- ✅ Créer des **composants adaptatifs** automatiquement
- ✅ Gestion **fluide** et **automatique** des tailles d'écran

### **Approche technique souhaitée :**

1. **React** pour la modularité et la réutilisabilité
2. **Tailwind** pour le responsive intégré
3. **Templates** pour éviter la duplication de code
4. **Auto-sizing** plutôt que fixed-sizing

---

## 🚧 État actuel du projet

### **Problèmes résolus :**
- ✅ Background dark navy correct
- ✅ Grille CSS fonctionnelle
- ✅ Couleurs et thème identiques à l'original
- ✅ Favicon et titre corrects
- ✅ Structure de base complète

### **Prochaines étapes :**
1. **React Router** pour la navigation
2. **Composants des pages** : About, Skills, Contact, Projects
3. **Responsive design automatique**
4. **Déploiement Netlify**

---

## 📋 Notes techniques

### **Architecture actuelle :**
- **SPA React** avec un seul composant App.js
- **Styles inline** pour éviter les conflits Tailwind
- **Structure en grille** fidèle à l'original
- **Assets** dans public/assets/

### **Améliorations à apporter :**
- Migration vers des **composants modulaires**
- Implémentation du **routing**
- Optimisation du **responsive** avec Tailwind
- **Tests** et optimisation pour production

---

*Ce fichier sert de référence pour les développements futurs du portfolio.*