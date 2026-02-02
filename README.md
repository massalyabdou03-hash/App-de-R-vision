# 🎓 Zaat Révision

Application web de révision pour **Licence 1 Informatique** - Programme Sénégalais

![Version](https://img.shields.io/badge/version-2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 📚 Description

**Zaat Révision** est une application web progressive (PWA) conçue pour aider les étudiants en Licence 1 Informatique au Sénégal à réviser efficacement leurs cours.

### ✨ Fonctionnalités principales

- ✅ **Suivi de progression** : Marque les notions maîtrisées et suis ta progression
- 📊 **Statistiques détaillées** : Visualise tes progrès par matière
- 💡 **Exercices pratiques** : Exercices avec solutions complètes
- 🔗 **Ressources externes** : Liens vers des plateformes d'apprentissage
- 📝 **Prise de notes** : Notes personnelles pour chaque chapitre
- 💾 **Sauvegarde automatique** : Tes données sont sauvegardées localement
- 📱 **PWA installable** : Utilise l'app comme une application native
- 🌐 **100% hors ligne** : Fonctionne sans connexion internet

## 📖 Matières couvertes

| Matière | Chapitres | Notions |
|---------|-----------|---------|
| 🧮 **Algorithmique** | 2 | Variables, structures de contrôle, instructions |
| 💻 **Programmation** | 1 | Langages, syntaxe, compilation |
| 🗄️ **Bases de Données** | 2 | SQL, modèle relationnel, requêtes |
| 📊 **MERISE** | 3 | MCD, MLD, entités, associations |
| 🖥️ **Architecture des Ordinateurs** | 2 | Composants, systèmes de numération |
| 🖱️ **Systèmes d'Exploitation** | 1 | OS, processus, threads |

## 🚀 Installation locale

### Méthode 1 : Téléchargement simple

1. Télécharge les fichiers `index.html`, `style.css`, `app.js`
2. Place-les dans le même dossier
3. Double-clique sur `index.html`
4. ✨ L'application s'ouvre dans ton navigateur !

### Méthode 2 : Clone avec Git

```bash
git clone https://github.com/votre-username/zaat-revision.git
cd zaat-revision
# Ouvre index.html dans ton navigateur
```

## 📱 Installation comme PWA

### Sur ordinateur (Chrome/Edge) :

1. Ouvre l'application dans ton navigateur
2. Clique sur l'icône ➕ dans la barre d'adresse
3. Clique sur "Installer Zaat Révision"
4. L'app s'ouvre comme une application native !

### Sur mobile (Android/iOS) :

1. Ouvre l'app dans Chrome/Safari
2. Appuie sur le menu (⋮ ou ⋯)
3. Sélectionne "Ajouter à l'écran d'accueil"
4. L'icône apparaît sur ton écran d'accueil !

## 💾 Import / Export des données

### Exporter tes données

1. Va dans la page "À propos"
2. Clique sur "📥 Exporter mes données"
3. Un fichier JSON est téléchargé avec toutes tes progressions

### Importer des données

1. Va dans la page "À propos"
2. Clique sur "📤 Importer des données"
3. Sélectionne ton fichier JSON
4. Tes données sont restaurées !

## 🛠️ Technologies utilisées

- **HTML5** : Structure de l'application
- **CSS3** : Design moderne et responsive
- **JavaScript Vanilla** : Logique de l'application (aucun framework)
- **LocalStorage API** : Sauvegarde des données localement
- **PWA** : Service Worker pour fonctionnement hors ligne
- **Google Fonts** : Typographie (Chakra Petch, Inter)

## 🌐 Déploiement

### GitHub Pages

```bash
# 1. Crée un repo sur GitHub
# 2. Push ton code
git add .
git commit -m "Initial commit"
git push origin main

# 3. Active GitHub Pages dans Settings > Pages
# 4. Ton app sera disponible à : https://username.github.io/zaat-revision
```

### Netlify

1. Va sur [netlify.com](https://netlify.com)
2. Drag & drop ton dossier
3. ✨ Ton app est en ligne !

### Vercel

```bash
# Installe Vercel CLI
npm i -g vercel

# Déploie
vercel

# Ton app est en ligne !
```

## 📂 Structure du projet

```
zaat-revision/
├── index.html          # Page principale
├── style.css           # Styles CSS
├── app.js              # Logique JavaScript
├── manifest.json       # Manifest PWA
├── service-worker.js   # Service Worker pour PWA
├── icons/              # Icônes de l'app
│   ├── icon-192.png
│   └── icon-512.png
└── README.md           # Ce fichier
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Crée une branche (`git checkout -b feature/amelioration`)
3. Commit tes changements (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amelioration`)
5. Ouvre une Pull Request

## 📝 Idées d'améliorations futures

- [ ] Mode sombre / clair
- [ ] Quiz interactifs
- [ ] Système de badges et récompenses
- [ ] Synchronisation cloud (Firebase)
- [ ] Partage de progression entre amis
- [ ] Flashcards pour révision rapide
- [ ] Minuteur Pomodoro intégré
- [ ] Graphiques de progression temporelle

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**Massaly**

Créé avec ❤️ pour les étudiants en Licence 1 Informatique au Sénégal 🇸🇳

## 🙏 Remerciements

- Merci à tous les étudiants qui utilisent cette app
- Merci aux professeurs pour leurs retours
- Merci aux contributeurs open source

## 📞 Contact & Support

- **Issues** : [GitHub Issues](https://github.com/votre-username/zaat-revision/issues)
- **Email** : votre-email@example.com

---

⭐ Si cette app t'aide, n'hésite pas à mettre une étoile sur GitHub !

**Bon courage dans tes révisions ! 🎓📚**
