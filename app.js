console.log("✅ Zaat Révision - App chargée avec succès");

// ============================
// DONNÉES COMPLÈTES DU PROGRAMME SÉNÉGALAIS
// ============================
let appData = {
  matieres: [
    {
      id: "alg",
      nom: "Algorithmique",
      icone: "🧮",
      chapitres: [
        {
          id: "alg-c1",
          titre: "Introduction aux algorithmes",
          notions: [
            {
              id: "alg-n1",
              titre: "Algorithme",
              resume: "Un algorithme est une suite finie et ordonnée d'instructions permettant de résoudre un problème de manière systématique.",
              exemple: "Faire la cuisine : suivre les étapes d'une recette pour obtenir un plat. Chaque étape est claire et dans un ordre précis.",
              exercice: "Écris les étapes pour retirer de l'argent à un distributeur automatique.",
              maitrise: false
            },
            {
              id: "alg-n2",
              titre: "Instruction",
              resume: "Une instruction est une action élémentaire exécutée par l'ordinateur. Elle peut être une affectation, une lecture, une écriture ou un test.",
              exemple: "Allumer une lampe : appuyer sur l'interrupteur (action unique et simple).",
              exercice: "Donne 3 instructions que tu fais chaque matin dans l'ordre.",
              maitrise: false
            },
            {
              id: "alg-n3",
              titre: "Variables et Types",
              resume: "Une variable est un espace mémoire nommé qui stocke une valeur. Elle a un type (entier, réel, booléen, caractère, chaîne).",
              exemple: "age = 20 (variable entière), nom = 'Massaly' (variable chaîne)",
              exercice: "Déclare 3 variables : ton nom, ton âge, ta moyenne.",
              maitrise: false
            }
          ],
          exercices: [
            {
              id: "alg-e1",
              titre: "Addition de deux nombres",
              difficulte: "facile",
              enonce: "Écris un algorithme qui demande deux nombres à l'utilisateur et affiche leur somme.",
              solution: "Algorithme Addition\nVariables : a, b, somme : Entier\nDébut\n  Écrire('Entrez le premier nombre : ')\n  Lire(a)\n  Écrire('Entrez le deuxième nombre : ')\n  Lire(b)\n  somme ← a + b\n  Écrire('La somme est : ', somme)\nFin",
              estComplete: false
            },
            {
              id: "alg-e2",
              titre: "Test de parité",
              difficulte: "moyen",
              enonce: "Écris un algorithme qui teste si un nombre est pair ou impair.",
              solution: "Algorithme TestParite\nVariable : n : Entier\nDébut\n  Écrire('Entrez un nombre : ')\n  Lire(n)\n  Si (n MOD 2 = 0) Alors\n    Écrire(n, ' est pair')\n  Sinon\n    Écrire(n, ' est impair')\n  FinSi\nFin",
              estComplete: false
            }
          ],
          ressources: [
            { titre: "France-IOI - Cours d'algorithmique", url: "http://www.france-ioi.org/" },
            { titre: "AlgoBox - Logiciel pédagogique", url: "https://www.xm1math.net/algobox/" }
          ],
          notes: "",
          maitrise: false
        },
        {
          id: "alg-c2",
          titre: "Structures de contrôle",
          notions: [
            {
              id: "alg-n4",
              titre: "Structure conditionnelle (Si...Alors...Sinon)",
              resume: "Permet d'exécuter des instructions différentes selon qu'une condition est vraie ou fausse.",
              exemple: "Si il pleut Alors prendre un parapluie Sinon sortir sans parapluie",
              exercice: "Écris un algorithme qui affiche 'Majeur' si l'âge >= 18, sinon 'Mineur'.",
              maitrise: false
            },
            {
              id: "alg-n5",
              titre: "Boucle Pour (For)",
              resume: "Répète un bloc d'instructions un nombre déterminé de fois.",
              exemple: "Pour i de 1 à 10 Faire : afficher les nombres de 1 à 10",
              exercice: "Écris une boucle qui affiche les 10 premiers multiples de 3.",
              maitrise: false
            },
            {
              id: "alg-n6",
              titre: "Boucle Tant Que (While)",
              resume: "Répète un bloc tant qu'une condition est vraie. Vérification avant exécution.",
              exemple: "Tant Que (solde > 0) Faire : continuer à retirer de l'argent",
              exercice: "Écris un algorithme qui demande un mot de passe jusqu'à ce qu'il soit correct.",
              maitrise: false
            }
          ],
          exercices: [
            {
              id: "alg-e3",
              titre: "Table de multiplication",
              difficulte: "facile",
              enonce: "Affiche la table de multiplication d'un nombre donné (de 1 à 10).",
              solution: "Algorithme TableMultiplication\nVariables : n, i : Entier\nDébut\n  Écrire('Entrez un nombre : ')\n  Lire(n)\n  Pour i de 1 à 10 Faire\n    Écrire(n, ' x ', i, ' = ', n*i)\n  FinPour\nFin",
              estComplete: false
            }
          ],
          ressources: [
            { titre: "Pixees - Ressources pour l'enseignement", url: "https://pixees.fr/" }
          ],
          notes: "",
          maitrise: false
        }
      ]
    },
    {
      id: "prog",
      nom: "Programmation",
      icone: "💻",
      chapitres: [
        {
          id: "prog-c1",
          titre: "Bases de la programmation",
          notions: [
            {
              id: "prog-n1",
              titre: "Langage de programmation",
              resume: "Un langage de programmation permet de communiquer des instructions à un ordinateur. Il existe des langages compilés (C, Java) et interprétés (Python, JavaScript).",
              exemple: "Le français pour parler aux humains, Python pour parler à l'ordinateur.",
              exercice: "Cite 3 langages de programmation et leur domaine d'application.",
              maitrise: false
            },
            {
              id: "prog-n2",
              titre: "Syntaxe et Sémantique",
              resume: "La syntaxe définit les règles d'écriture du code. La sémantique définit le sens des instructions.",
              exemple: "print('Bonjour') en Python affiche 'Bonjour' à l'écran.",
              exercice: "Quelle est la différence entre une erreur de syntaxe et une erreur logique ?",
              maitrise: false
            },
            {
              id: "prog-n3",
              titre: "Compilation vs Interprétation",
              resume: "Un compilateur traduit tout le code en langage machine avant exécution. Un interpréteur traduit et exécute ligne par ligne.",
              exemple: "C/C++ sont compilés, Python est interprété.",
              exercice: "Donne un avantage et un inconvénient de chaque approche.",
              maitrise: false
            }
          ],
          exercices: [
            {
              id: "prog-e1",
              titre: "Hello World en Python",
              difficulte: "facile",
              enonce: "Écris un programme Python qui affiche 'Bonjour Sénégal !' et ton nom.",
              solution: "# Programme Hello World\nprint('Bonjour Sénégal !')\nnom = 'Massaly'\nprint('Je m\\'appelle', nom)",
              estComplete: false
            },
            {
              id: "prog-e2",
              titre: "Calculatrice simple",
              difficulte: "moyen",
              enonce: "Crée une calculatrice qui demande deux nombres et affiche addition, soustraction, multiplication et division.",
              solution: "# Calculatrice\na = float(input('Premier nombre : '))\nb = float(input('Deuxième nombre : '))\nprint('Addition:', a + b)\nprint('Soustraction:', a - b)\nprint('Multiplication:', a * b)\nif b != 0:\n    print('Division:', a / b)\nelse:\n    print('Division impossible (division par zéro)')",
              estComplete: false
            }
          ],
          ressources: [
            { titre: "Python.org - Documentation officielle", url: "https://docs.python.org/fr/" },
            { titre: "W3Schools - Tutoriels interactifs", url: "https://www.w3schools.com/python/" }
          ],
          notes: "",
          maitrise: false
        }
      ]
    },
    {
      id: "bdd",
      nom: "Bases de Données",
      icone: "🗄️",
      chapitres: [
        {
          id: "bdd-c1",
          titre: "Introduction aux bases de données",
          notions: [
            {
              id: "bdd-n1",
              titre: "Base de données",
              resume: "Une base de données est un ensemble structuré de données organisées pour être facilement accessibles, gérées et mises à jour.",
              exemple: "Le registre d'une école : liste des étudiants, leurs notes, leurs classes.",
              exercice: "Donne 3 exemples de bases de données que tu utilises au quotidien.",
              maitrise: false
            },
            {
              id: "bdd-n2",
              titre: "SGBD (Système de Gestion de Base de Données)",
              resume: "Logiciel qui permet de créer, gérer et manipuler des bases de données. Exemples : MySQL, PostgreSQL, Oracle, SQLite.",
              exemple: "MySQL est utilisé par de nombreux sites web pour stocker les informations des utilisateurs.",
              exercice: "Cite 2 SGBD et leurs caractéristiques principales.",
              maitrise: false
            },
            {
              id: "bdd-n3",
              titre: "Modèle relationnel",
              resume: "Organise les données en tables (relations) composées de lignes (tuples) et de colonnes (attributs).",
              exemple: "Table Etudiants : colonnes (id, nom, prenom, age), lignes (chaque étudiant).",
              exercice: "Crée une table 'Livres' avec 5 colonnes pertinentes.",
              maitrise: false
            }
          ],
          exercices: [
            {
              id: "bdd-e1",
              titre: "Création de table SQL",
              difficulte: "facile",
              enonce: "Écris la requête SQL pour créer une table 'Etudiant' avec id, nom, prenom, age, ville.",
              solution: "CREATE TABLE Etudiant (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  nom VARCHAR(50) NOT NULL,\n  prenom VARCHAR(50) NOT NULL,\n  age INT,\n  ville VARCHAR(50)\n);",
              estComplete: false
            }
          ],
          ressources: [
            { titre: "SQL.sh - Cours SQL complet", url: "https://sql.sh/" },
            { titre: "W3Schools SQL Tutorial", url: "https://www.w3schools.com/sql/" }
          ],
          notes: "",
          maitrise: false
        },
        {
          id: "bdd-c2",
          titre: "SQL - Langage de requêtes",
          notions: [
            {
              id: "bdd-n4",
              titre: "SELECT - Interrogation",
              resume: "Permet de récupérer des données d'une ou plusieurs tables. Syntaxe : SELECT colonnes FROM table WHERE condition.",
              exemple: "SELECT nom, prenom FROM Etudiant WHERE age > 18;",
              exercice: "Écris une requête pour afficher tous les étudiants de Dakar.",
              maitrise: false
            },
            {
              id: "bdd-n5",
              titre: "INSERT - Insertion",
              resume: "Permet d'ajouter de nouvelles lignes dans une table.",
              exemple: "INSERT INTO Etudiant (nom, prenom, age) VALUES ('Diop', 'Aminata', 20);",
              exercice: "Insère 3 étudiants dans la table Etudiant.",
              maitrise: false
            },
            {
              id: "bdd-n6",
              titre: "UPDATE et DELETE",
              resume: "UPDATE modifie des données existantes. DELETE supprime des lignes.",
              exemple: "UPDATE Etudiant SET age = 21 WHERE id = 5; DELETE FROM Etudiant WHERE age < 18;",
              exercice: "Écris une requête pour augmenter l'âge de tous les étudiants de 1 an.",
              maitrise: false
            }
          ],
          exercices: [
            {
              id: "bdd-e2",
              titre: "Requêtes SQL avancées",
              difficulte: "moyen",
              enonce: "Écris une requête pour afficher le nombre d'étudiants par ville, triés par ordre décroissant.",
              solution: "SELECT ville, COUNT(*) AS nombre_etudiants\nFROM Etudiant\nGROUP BY ville\nORDER BY nombre_etudiants DESC;",
              estComplete: false
            }
          ],
          ressources: [
            { titre: "SQLZoo - Tutoriels interactifs", url: "https://sqlzoo.net/" },
            { titre: "LeetCode SQL", url: "https://leetcode.com/problemset/database/" }
          ],
          notes: "",
          maitrise: false
        }
      ]
    },
    {
      id: "merise",
      nom: "MERISE",
      icone: "📊",
      chapitres: [
        {
          id: "merise-c1",
          titre: "Introduction à MERISE",
          notions: [
            {
              id: "merise-n1",
              titre: "Méthode MERISE",
              resume: "MERISE est une méthode française de conception de systèmes d'information. Elle permet de modéliser les données et les traitements d'un système.",
              exemple: "Concevoir le système d'information d'une bibliothèque : gérer les livres, les emprunts, les adhérents.",
              exercice: "Explique pourquoi utiliser une méthode comme MERISE avant de développer.",
              maitrise: false
            },
            {
              id: "merise-n2",
              titre: "Niveaux de modélisation",
              resume: "MERISE utilise 3 niveaux : Conceptuel (MCD, MCT), Logique/Organisationnel (MLD, MOT), Physique (MPD, MOT).",
              exemple: "MCD : on définit les entités. MLD : on transforme en tables. MPD : on implémente dans un SGBD.",
              exercice: "Quelle est la différence entre MCD et MLD ?",
              maitrise: false
            }
          ],
          exercices: [],
          ressources: [
            { titre: "Cours MERISE complet", url: "https://sqlpro.developpez.com/cours/modelisation/merise/" },
            { titre: "Outil de modélisation JMerise", url: "http://www.jfreesoft.com/JMerise/" }
          ],
          notes: "",
          maitrise: false
        },
        {
          id: "merise-c2",
          titre: "Modèle Conceptuel de Données (MCD)",
          notions: [
            {
              id: "merise-n3",
              titre: "Entité",
              resume: "Une entité représente un objet du monde réel ayant une existence propre. Elle possède des propriétés (attributs).",
              exemple: "Entité ETUDIANT : attributs (numeroEtudiant, nom, prenom, dateNaissance).",
              exercice: "Définis l'entité LIVRE avec 5 attributs pertinents.",
              maitrise: false
            },
            {
              id: "merise-n4",
              titre: "Association (Relation)",
              resume: "Une association représente un lien entre deux ou plusieurs entités. Elle peut avoir des cardinalités (0,1), (1,1), (0,n), (1,n).",
              exemple: "ETUDIANT emprunte LIVRE : cardinalités (0,n) côté Etudiant, (0,n) côté Livre.",
              exercice: "Quelle est la différence entre une cardinalité (1,1) et (0,n) ?",
              maitrise: false
            },
            {
              id: "merise-n5",
              titre: "Cardinalités",
              resume: "Indiquent combien de fois minimum et maximum une entité participe à une association.",
              exemple: "(0,1) : 0 ou 1 fois, (1,n) : 1 ou plusieurs fois, (0,n) : 0 ou plusieurs fois.",
              exercice: "Dans une bibliothèque, quelles sont les cardinalités entre ADHERENT et EMPRUNT ?",
              maitrise: false
            }
          ],
          exercices: [
            {
              id: "merise-e1",
              titre: "MCD d'une bibliothèque",
              difficulte: "moyen",
              enonce: "Réalise le MCD d'une bibliothèque avec les entités : ADHERENT, LIVRE, AUTEUR, EMPRUNT.",
              solution: "Entités :\n- ADHERENT (idAdherent, nom, prenom, adresse)\n- LIVRE (idLivre, titre, annee, isbn)\n- AUTEUR (idAuteur, nom, prenom, nationalite)\n- EMPRUNT (idEmprunt, dateEmprunt, dateRetour)\n\nAssociations :\n- ECRIRE (AUTEUR 1,n --- 0,n LIVRE)\n- EMPRUNTER (ADHERENT 0,n --- 0,n LIVRE) avec attribut dateEmprunt, dateRetour",
              estComplete: false
            }
          ],
          ressources: [
            { titre: "Tutoriel MCD en ligne", url: "https://www.base-de-donnees.com/mcd/" }
          ],
          notes: "",
          maitrise: false
        },
        {
          id: "merise-c3",
          titre: "Du MCD au MLD",
          notions: [
            {
              id: "merise-n6",
              titre: "Règles de passage MCD → MLD",
              resume: "Chaque entité devient une table. Les associations (1,n) ajoutent une clé étrangère. Les associations (n,n) créent une table intermédiaire.",
              exemple: "ETUDIANT (1,n) --- suit --- (0,n) COURS devient : ETUDIANT, COURS, SUIT(idEtudiant, idCours).",
              exercice: "Transforme le MCD bibliothèque en MLD (liste des tables avec clés).",
              maitrise: false
            }
          ],
          exercices: [
            {
              id: "merise-e2",
              titre: "MLD d'un système de commandes",
              difficulte: "difficile",
              enonce: "À partir du MCD : CLIENT (1,n)---passe---(1,1) COMMANDE (1,n)---contient---(0,n) PRODUIT, écris le MLD.",
              solution: "Tables :\n- CLIENT (idClient, nom, prenom, email)\n- COMMANDE (idCommande, dateCommande, #idClient)\n- PRODUIT (idProduit, nom, prix)\n- CONTIENT (idCommande, idProduit, quantite)\n\nClés étrangères :\n- COMMANDE.idClient → CLIENT.idClient\n- CONTIENT.idCommande → COMMANDE.idCommande\n- CONTIENT.idProduit → PRODUIT.idProduit",
              estComplete: false
            }
          ],
          ressources: [
            { titre: "Exercices MERISE corrigés", url: "https://www.developpez.net/forums/f899/general-developpement/alm/modelisation/merise/" }
          ],
          notes: "",
          maitrise: false
        }
      ]
    },
    {
      id: "archi",
      nom: "Architecture des Ordinateurs",
      icone: "🖥️",
      chapitres: [
        {
          id: "archi-c1",
          titre: "Composants de l'ordinateur",
          notions: [
            {
              id: "archi-n1",
              titre: "Processeur (CPU)",
              resume: "Le processeur est le cerveau de l'ordinateur. Il exécute les instructions des programmes. Il contient l'UAL (Unité Arithmétique et Logique) et l'UC (Unité de Contrôle).",
              exemple: "Intel Core i7, AMD Ryzen sont des processeurs modernes.",
              exercice: "Quelle est la différence entre un processeur 32 bits et 64 bits ?",
              maitrise: false
            },
            {
              id: "archi-n2",
              titre: "Mémoire RAM",
              resume: "Mémoire vive volatile qui stocke temporairement les données et programmes en cours d'exécution. Elle est rapide mais perd son contenu à l'extinction.",
              exemple: "8 Go de RAM permet de faire tourner plusieurs applications simultanément.",
              exercice: "Pourquoi la RAM est-elle plus rapide que le disque dur ?",
              maitrise: false
            },
            {
              id: "archi-n3",
              titre: "Mémoires de stockage",
              resume: "Disque dur (HDD), SSD (Solid State Drive) : stockage permanent des données. Le SSD est beaucoup plus rapide que le HDD.",
              exemple: "Un SSD de 256 Go démarre Windows en 10 secondes, un HDD en 30-40 secondes.",
              exercice: "Quels sont les avantages et inconvénients d'un SSD par rapport à un HDD ?",
              maitrise: false
            }
          ],
          exercices: [],
          ressources: [
            { titre: "Comment fonctionne un ordinateur", url: "https://www.commentcamarche.net/informatique/" }
          ],
          notes: "",
          maitrise: false
        },
        {
          id: "archi-c2",
          titre: "Systèmes de numération",
          notions: [
            {
              id: "archi-n4",
              titre: "Binaire, Octal, Hexadécimal",
              resume: "Le binaire (base 2) utilise 0 et 1. L'octal (base 8) utilise 0-7. L'hexadécimal (base 16) utilise 0-9 et A-F.",
              exemple: "13 en décimal = 1101 en binaire = D en hexadécimal.",
              exercice: "Convertis 25 en binaire et en hexadécimal.",
              maitrise: false
            },
            {
              id: "archi-n5",
              titre: "Conversions",
              resume: "Pour convertir : Décimal → Binaire (divisions successives par 2), Binaire → Décimal (somme des puissances de 2).",
              exemple: "1011 (binaire) = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8+2+1 = 11 (décimal).",
              exercice: "Convertis 10110 (binaire) en décimal.",
              maitrise: false
            }
          ],
          exercices: [
            {
              id: "archi-e1",
              titre: "Conversions binaire-décimal",
              difficulte: "facile",
              enonce: "Convertis les nombres suivants : a) 1111 (binaire) → décimal, b) 32 (décimal) → binaire.",
              solution: "a) 1111 = 1×8 + 1×4 + 1×2 + 1×1 = 15\nb) 32 ÷ 2 = 16 reste 0, 16 ÷ 2 = 8 reste 0, 8 ÷ 2 = 4 reste 0, 4 ÷ 2 = 2 reste 0, 2 ÷ 2 = 1 reste 0, 1 ÷ 2 = 0 reste 1\nRésultat : 100000",
              estComplete: false
            }
          ],
          ressources: [
            { titre: "Calculatrice de conversion", url: "https://www.rapidtables.com/convert/number/binary-to-decimal.html" }
          ],
          notes: "",
          maitrise: false
        }
      ]
    },
    {
      id: "sys",
      nom: "Systèmes d'Exploitation",
      icone: "🖱️",
      chapitres: [
        {
          id: "sys-c1",
          titre: "Introduction aux OS",
          notions: [
            {
              id: "sys-n1",
              titre: "Système d'exploitation",
              resume: "Un OS (Operating System) gère les ressources matérielles et logicielles de l'ordinateur. Il fait l'interface entre l'utilisateur et le matériel.",
              exemple: "Windows, Linux, macOS, Android, iOS.",
              exercice: "Cite 3 rôles principaux d'un système d'exploitation.",
              maitrise: false
            },
            {
              id: "sys-n2",
              titre: "Processus et Threads",
              resume: "Un processus est un programme en cours d'exécution. Un thread est une unité d'exécution au sein d'un processus.",
              exemple: "Quand tu ouvres Chrome, c'est un processus. Chaque onglet peut être un thread.",
              exercice: "Quelle est la différence entre un processus et un thread ?",
              maitrise: false
            }
          ],
          exercices: [],
          ressources: [
            { titre: "Linux Journey - Apprendre Linux", url: "https://linuxjourney.com/" },
            { titre: "Ubuntu - Documentation", url: "https://doc.ubuntu-fr.org/" }
          ],
          notes: "",
          maitrise: false
        }
      ]
    }
  ]
};

// ============================
// OBJECTIF DE LA SEMAINE
// ============================
let weeklyGoal = {
  target: 15,
  current: 0
};

// ============================
// GESTION DE LA PAGE ACTIVE
// ============================
let currentPage = 'home';

// ============================
// CHARGEMENT DES DONNÉES SAUVEGARDÉES
// ============================
function chargerDonnees() {
  const savedData = localStorage.getItem("revisionAppData");
  if (savedData) {
    appData = JSON.parse(savedData);
  }

  const savedGoal = localStorage.getItem("weeklyGoal");
  if (savedGoal) {
    weeklyGoal = JSON.parse(savedGoal);
  }
}

// ============================
// SAUVEGARDE DES DONNÉES
// ============================
function sauvegarderDonnees() {
  localStorage.setItem("revisionAppData", JSON.stringify(appData));
  localStorage.setItem("weeklyGoal", JSON.stringify(weeklyGoal));
}

// ============================
// GESTION DU MENU ACTIF
// ============================
function setActivePage(pageName) {
  currentPage = pageName;
  
  // Retirer la classe active de tous les boutons
  document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Ajouter la classe active au bouton correspondant
  const activeBtn = document.querySelector(`.menu-btn[data-page="${pageName}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}

// ============================
// UTILITAIRES DE CALCUL
// ============================
function compterNotionsMaitrisees() {
  let count = 0;
  appData.matieres.forEach(m =>
    m.chapitres.forEach(c =>
      c.notions.forEach(n => {
        if (n.maitrise) count++;
      })
    )
  );
  return count;
}

function compterTotalNotions() {
  let count = 0;
  appData.matieres.forEach(m =>
    m.chapitres.forEach(c => {
      count += c.notions.length;
    })
  );
  return count;
}

function calculerProgressionChapitre(chapitre) {
  const total = chapitre.notions.length;
  if (total === 0) return 0;
  const valides = chapitre.notions.filter(n => n.maitrise).length;
  return Math.round((valides / total) * 100);
}

function calculerProgressionMatiere(matiere) {
  let totalNotions = 0;
  let notionsMaitrisees = 0;
  
  matiere.chapitres.forEach(c => {
    totalNotions += c.notions.length;
    notionsMaitrisees += c.notions.filter(n => n.maitrise).length;
  });
  
  if (totalNotions === 0) return 0;
  return Math.round((notionsMaitrisees / totalNotions) * 100);
}

// ============================
// PAGE D'ACCUEIL
// ============================
function afficherMatieres(matieres) {
  setActivePage('home');
  const container = document.getElementById("app");
  
  const current = compterNotionsMaitrisees();
  const percent = Math.min(100, Math.round((current / weeklyGoal.target) * 100));

  container.innerHTML = `
    <h2>🎯 Tableau de bord</h2>
    
    <div class="card goal-card">
      <h3>Objectif de la semaine</h3>
      <div class="progress-container">
        <div class="progress-label">
          <span>${current} / ${weeklyGoal.target} notions maîtrisées</span>
          <span>${percent}%</span>
        </div>
        <div class="progress">
          <div class="progress-bar" style="width:${percent}%"></div>
        </div>
      </div>
      <button onclick="changerObjectif()" class="mt-2">Modifier l'objectif</button>
    </div>

    <h2 class="mt-3">📚 Matières disponibles</h2>
    <div id="matieres-container"></div>
  `;

  const matieresContainer = document.getElementById('matieres-container');
  
  matieres.forEach(matiere => {
    const progression = calculerProgressionMatiere(matiere);
    const totalChapitres = matiere.chapitres.length;
    
    const card = document.createElement("div");
    card.className = "card matiere-card slide-in";
    card.innerHTML = `
      <span class="matiere-icon">${matiere.icone}</span>
      <h3>${matiere.nom}</h3>
      <p>${totalChapitres} chapitre${totalChapitres > 1 ? 's' : ''}</p>
      <div class="progress-container">
        <div class="progress-label">
          <span>Progression</span>
          <span>${progression}%</span>
        </div>
        <div class="progress">
          <div class="progress-bar" style="width:${progression}%"></div>
        </div>
      </div>
      <button onclick="ouvrirMatiere('${matiere.id}')" class="mt-2">
        Commencer la révision
      </button>
    `;
    matieresContainer.appendChild(card);
  });
}

// ============================
// MODIFIER OBJECTIF
// ============================
function changerObjectif() {
  const valeur = prompt(
    "Quel est ton objectif de notions cette semaine ?",
    weeklyGoal.target
  );

  if (valeur && !isNaN(valeur) && valeur > 0) {
    weeklyGoal.target = Number(valeur);
    sauvegarderDonnees();
    afficherMatieres(appData.matieres);
  }
}

// ============================
// OUVRIR UNE MATIÈRE
// ============================
function ouvrirMatiere(matiereId) {
  const matiere = appData.matieres.find(m => m.id === matiereId);
  const container = document.getElementById("app");

  container.innerHTML = `
    <button onclick="retourAccueil()" class="btn-back">← Retour à l'accueil</button>
    <h2>${matiere.icone} ${matiere.nom}</h2>
    <p>Sélectionne un chapitre pour commencer la révision</p>
  `;

  matiere.chapitres.forEach((chapitre, index) => {
    const prog = calculerProgressionChapitre(chapitre);
    const nombreNotions = chapitre.notions.length;
    const nombreExercices = chapitre.exercices ? chapitre.exercices.length : 0;

    const div = document.createElement("div");
    div.className = "card slide-in";
    div.innerHTML = `
      <h4>${chapitre.titre}</h4>
      <p>${nombreNotions} notion${nombreNotions > 1 ? 's' : ''} • ${nombreExercices} exercice${nombreExercices > 1 ? 's' : ''}</p>
      <div class="progress-container">
        <div class="progress-label">
          <span>Progression</span>
          <span>${prog}%</span>
        </div>
        <div class="progress">
          <div class="progress-bar" style="width:${prog}%"></div>
        </div>
      </div>
      <button onclick="ouvrirChapitre('${matiere.id}', ${index})">
        Réviser ce chapitre
      </button>
    `;
    container.appendChild(div);
  });
}

// ============================
// OUVRIR UN CHAPITRE
// ============================
function ouvrirChapitre(matiereId, chapitreIndex) {
  const matiere = appData.matieres.find(m => m.id === matiereId);
  const chapitre = matiere.chapitres[chapitreIndex];
  const container = document.getElementById("app");

  container.innerHTML = `
    <button onclick="ouvrirMatiere('${matiereId}')" class="btn-back">← Retour à ${matiere.nom}</button>
    <h2>${chapitre.titre}</h2>
    
    <h3>📘 Notions clés</h3>
  `;

  // Afficher les notions
  chapitre.notions.forEach((n, i) => {
    const div = document.createElement("div");
    div.className = "card slide-in";
    div.innerHTML = `
      <label class="notion-label">
        <input type="checkbox" 
          ${n.maitrise ? "checked" : ""} 
          onchange="toggleNotion('${matiereId}', ${chapitreIndex}, ${i})"
        >
        <div>
          <strong>${n.titre}</strong>
          <p><strong>📝 Résumé :</strong> ${n.resume}</p>
          <p><strong>🌍 Exemple :</strong> ${n.exemple}</p>
          <p><strong>✏️ Exercice :</strong> ${n.exercice}</p>
        </div>
      </label>
    `;
    container.appendChild(div);
  });

  // Afficher les exercices s'il y en a
  if (chapitre.exercices && chapitre.exercices.length > 0) {
    container.innerHTML += `<h3 class="mt-3">💡 Exercices pratiques</h3>`;
    
    chapitre.exercices.forEach((ex, i) => {
      const div = document.createElement("div");
      div.className = "card exercise-card slide-in";
      div.innerHTML = `
        <div class="exercise-header">
          <h4>${ex.titre}</h4>
          <span class="exercise-difficulty difficulty-${ex.difficulte}">${ex.difficulte}</span>
        </div>
        <p><strong>📋 Énoncé :</strong> ${ex.enonce}</p>
        <button class="toggle-solution" onclick="toggleSolution('solution-${matiereId}-${chapitreIndex}-${i}')">
          Voir la solution
        </button>
        <div id="solution-${matiereId}-${chapitreIndex}-${i}" class="exercise-solution" style="display:none;">
          <strong>✅ Solution :</strong>
          <pre style="background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 8px; overflow-x: auto; color: #fdc830;">${ex.solution}</pre>
        </div>
      `;
      container.appendChild(div);
    });
  }

  // Afficher les ressources externes
  if (chapitre.ressources && chapitre.ressources.length > 0) {
    const ressourcesDiv = document.createElement("div");
    ressourcesDiv.className = "resources-section mt-3";
    ressourcesDiv.innerHTML = `
      <h4>🔗 Ressources complémentaires</h4>
      <p>Pour approfondir tes connaissances :</p>
    `;
    
    chapitre.ressources.forEach(res => {
      const link = document.createElement("a");
      link.href = res.url;
      link.target = "_blank";
      link.className = "resource-link";
      link.textContent = res.titre;
      ressourcesDiv.appendChild(link);
    });
    
    container.appendChild(ressourcesDiv);
  }

  // Zone de notes personnelles
  container.innerHTML += `
    <hr style="border: 1px solid rgba(255,107,53,0.2); margin: 2rem 0;">
    <h3>📝 Mes notes personnelles</h3>
    <textarea id="notes-zone" placeholder="Écris ici ce que TU as compris, tes astuces, tes questions...">${chapitre.notes || ""}</textarea>
    <button onclick="enregistrerNotes('${matiereId}', ${chapitreIndex})" class="mt-2">
      💾 Enregistrer mes notes
    </button>
  `;
}

// ============================
// TOGGLE SOLUTION D'EXERCICE
// ============================
function toggleSolution(solutionId) {
  const solution = document.getElementById(solutionId);
  if (solution.style.display === "none") {
    solution.style.display = "block";
    event.target.textContent = "Masquer la solution";
  } else {
    solution.style.display = "none";
    event.target.textContent = "Voir la solution";
  }
}

// ============================
// TOGGLE NOTION MAÎTRISÉE
// ============================
function toggleNotion(matiereId, chapitreIndex, notionIndex) {
  const chapitre = appData.matieres
    .find(m => m.id === matiereId)
    .chapitres[chapitreIndex];

  chapitre.notions[notionIndex].maitrise = !chapitre.notions[notionIndex].maitrise;
  
  sauvegarderDonnees();
  
  // Animation de feedback
  const checkbox = event.target;
  checkbox.parentElement.style.transition = "all 0.3s ease";
  checkbox.parentElement.style.background = "rgba(76, 175, 80, 0.2)";
  setTimeout(() => {
    checkbox.parentElement.style.background = "";
  }, 500);
}

// ============================
// ENREGISTRER NOTES
// ============================
function enregistrerNotes(matiereId, chapitreIndex) {
  const texte = document.getElementById("notes-zone").value;
  const chapitre = appData.matieres
    .find(m => m.id === matiereId)
    .chapitres[chapitreIndex];

  chapitre.notes = texte;
  sauvegarderDonnees();
  
  // Feedback visuel
  const btn = event.target;
  const originalText = btn.textContent;
  btn.textContent = "✅ Notes enregistrées !";
  btn.style.background = "linear-gradient(135deg, #4caf50, #66bb6a)";
  
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = "";
  }, 2000);
}

// ============================
// RETOUR ACCUEIL
// ============================
function retourAccueil() {
  afficherMatieres(appData.matieres);
}

// ============================
// NAVIGATION - ACCUEIL
// ============================
function goHome() {
  afficherMatieres(appData.matieres);
}

// ============================
// NAVIGATION - RÉVISION
// ============================
function goRevision() {
  afficherMatieres(appData.matieres);
}

// ============================
// NAVIGATION - PROGRESSION
// ============================
function goProgress() {
  setActivePage('progress');
  const container = document.getElementById("app");
  
  const total = compterTotalNotions();
  const maitrisees = compterNotionsMaitrisees();
  const pourcentage = total > 0 ? Math.round((maitrisees / total) * 100) : 0;

  container.innerHTML = `
    <h2>📊 Ma Progression Globale</h2>
    
    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-number">${total}</span>
        <span class="stat-label">Notions totales</span>
      </div>
      
      <div class="stat-card">
        <span class="stat-number">${maitrisees}</span>
        <span class="stat-label">Notions maîtrisées</span>
      </div>
      
      <div class="stat-card">
        <span class="stat-number">${total - maitrisees}</span>
        <span class="stat-label">Notions restantes</span>
      </div>
      
      <div class="stat-card">
        <span class="stat-number">${pourcentage}%</span>
        <span class="stat-label">Progression</span>
      </div>
    </div>

    <h3 class="mt-3">Progression par matière</h3>
  `;

  appData.matieres.forEach(matiere => {
    let totalNotions = 0;
    let notionsMaitrisees = 0;
    
    matiere.chapitres.forEach(c => {
      totalNotions += c.notions.length;
      notionsMaitrisees += c.notions.filter(n => n.maitrise).length;
    });
    
    const prog = totalNotions > 0 ? Math.round((notionsMaitrisees / totalNotions) * 100) : 0;

    const div = document.createElement("div");
    div.className = "card slide-in";
    div.innerHTML = `
      <div class="flex-between">
        <h4>${matiere.icone} ${matiere.nom}</h4>
        <span>${notionsMaitrisees}/${totalNotions}</span>
      </div>
      <div class="progress-container">
        <div class="progress">
          <div class="progress-bar" style="width:${prog}%"></div>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}

// ============================
// NAVIGATION - MES NOTES
// ============================
function goNotes() {
  setActivePage('notes');
  const container = document.getElementById("app");

  container.innerHTML = `
    <h2>📝 Mes Notes Personnelles</h2>
    <p>Toutes tes notes regroupées par matière et chapitre.</p>
  `;

  let hasNotes = false;

  appData.matieres.forEach(matiere => {
    const chapitresAvecNotes = matiere.chapitres.filter(c => c.notes && c.notes.trim() !== "");
    
    if (chapitresAvecNotes.length > 0) {
      hasNotes = true;
      
      container.innerHTML += `<h3 class="mt-3">${matiere.icone} ${matiere.nom}</h3>`;
      
      chapitresAvecNotes.forEach(chapitre => {
        const div = document.createElement("div");
        div.className = "card slide-in";
        div.innerHTML = `
          <h4>${chapitre.titre}</h4>
          <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 8px; border-left: 4px solid var(--primary);">
            <pre style="white-space: pre-wrap; font-family: var(--font-body); color: var(--light); margin: 0;">${chapitre.notes}</pre>
          </div>
        `;
        container.appendChild(div);
      });
    }
  });

  if (!hasNotes) {
    container.innerHTML += `
      <div class="card text-center">
        <p style="font-size: 3rem; margin-bottom: 1rem;">📝</p>
        <h3>Aucune note pour le moment</h3>
        <p>Commence à réviser et prends des notes dans chaque chapitre !</p>
        <button onclick="goRevision()" class="mt-2">Commencer à réviser</button>
      </div>
    `;
  }
}

// ============================
// NAVIGATION - À PROPOS
// ============================
function goAbout() {
  setActivePage('about');
  const container = document.getElementById("app");

  container.innerHTML = `
    <h2>ℹ️ À Propos</h2>
    
    <div class="card">
      <h3>🎓 Zaat Révision</h3>
      <p><strong>Version :</strong> 2.0</p>
      <p><strong>Application de révision pour Licence 1 Informatique</strong></p>
      <p>Programme adapté au curriculum sénégalais</p>
    </div>

    <div class="card">
      <h3>📚 Matières couvertes</h3>
      <ul style="line-height: 2;">
        <li>🧮 Algorithmique</li>
        <li>💻 Programmation</li>
        <li>🗄️ Bases de Données & SQL</li>
        <li>📊 MERISE (Conception SI)</li>
        <li>🖥️ Architecture des Ordinateurs</li>
        <li>🖱️ Systèmes d'Exploitation</li>
      </ul>
    </div>

    <div class="card">
      <h3>✨ Fonctionnalités</h3>
      <ul style="line-height: 2;">
        <li>✅ Suivi de progression par notion</li>
        <li>📊 Statistiques détaillées</li>
        <li>💡 Exercices pratiques avec solutions</li>
        <li>🔗 Liens vers ressources externes</li>
        <li>📝 Prise de notes personnalisée</li>
        <li>💾 Sauvegarde automatique</li>
        <li>📱 Application installable (PWA)</li>
        <li>🌐 Fonctionne hors ligne</li>
      </ul>
    </div>

    <div class="card">
      <h3>💾 Gestion des données</h3>
      <p>Sauvegarde et restaure ta progression</p>
      <div style="display: flex; gap: 1rem; margin-top: 1rem; flex-wrap: wrap;">
        <button onclick="exporterDonnees()">📥 Exporter mes données</button>
        <button onclick="importerDonnees()" class="btn-secondary">📤 Importer des données</button>
        <button onclick="reinitialiserDonnees()" class="btn-secondary" style="background: transparent; border: 2px solid #ef4444; color: #ef4444;">
          🗑️ Réinitialiser tout
        </button>
      </div>
      <input type="file" id="import-file" accept=".json" style="display: none;" onchange="handleImport(event)">
    </div>

    <div class="card">
      <h3>📱 Installer l'application</h3>
      <p>Pour une meilleure expérience, installe Zaat Révision comme une application :</p>
      <ul style="line-height: 2; margin-top: 1rem;">
        <li><strong>Sur ordinateur :</strong> Clique sur l'icône ➕ dans la barre d'adresse</li>
        <li><strong>Sur mobile :</strong> Menu (⋮) → "Ajouter à l'écran d'accueil"</li>
      </ul>
      <div id="install-button-container" style="margin-top: 1rem;"></div>
    </div>

    <div class="card">
      <h3>👨‍💻 Développeur</h3>
      <p><strong>Créé par Massaly</strong></p>
      <p>Application conçue pour faciliter l'apprentissage et la révision des étudiants en informatique au Sénégal.</p>
      <p style="margin-top: 1rem;"><strong>Technologies :</strong> HTML5, CSS3, JavaScript Vanilla, PWA</p>
    </div>

    <div class="card text-center">
      <p style="font-size: 2rem; margin-bottom: 1rem;">🇸🇳</p>
      <p><em>Bon courage dans tes révisions !</em></p>
      <p style="margin-top: 1rem; color: var(--gray); font-size: 0.9rem;">
        Version 2.0 - 2026
      </p>
    </div>
  `;
  
  // Vérifier si l'app peut être installée
  afficherBoutonInstallation();
}

// ============================
// EXPORT DES DONNÉES
// ============================
function exporterDonnees() {
  const donnees = {
    appData: appData,
    weeklyGoal: weeklyGoal,
    exportDate: new Date().toISOString(),
    version: "2.0"
  };
  
  const dataStr = JSON.stringify(donnees, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `zaat-revision-backup-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  alert('✅ Données exportées avec succès !');
}

// ============================
// IMPORT DES DONNÉES
// ============================
function importerDonnees() {
  document.getElementById('import-file').click();
}

function handleImport(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const donnees = JSON.parse(e.target.result);
      
      if (donnees.appData && donnees.weeklyGoal) {
        if (confirm('⚠️ Cela va remplacer toutes tes données actuelles. Continuer ?')) {
          appData = donnees.appData;
          weeklyGoal = donnees.weeklyGoal;
          sauvegarderDonnees();
          alert('✅ Données importées avec succès !');
          goHome();
        }
      } else {
        alert('❌ Fichier invalide. Vérifie que c\'est bien un fichier d\'export de Zaat Révision.');
      }
    } catch (error) {
      alert('❌ Erreur lors de l\'import : ' + error.message);
    }
  };
  reader.readAsText(file);
  
  // Reset l'input pour permettre de réimporter le même fichier
  event.target.value = '';
}

// ============================
// RÉINITIALISATION
// ============================
function reinitialiserDonnees() {
  if (confirm('⚠️ ATTENTION : Cela va supprimer TOUTES tes données (progression, notes, objectifs). Cette action est irréversible. Continuer ?')) {
    if (confirm('Es-tu vraiment sûr ? Toutes tes données seront perdues !')) {
      localStorage.clear();
      alert('✅ Toutes les données ont été supprimées. La page va se recharger.');
      location.reload();
    }
  }
}

// ============================
// PWA - INSTALLATION
// ============================
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  afficherBoutonInstallation();
});

function afficherBoutonInstallation() {
  const container = document.getElementById('install-button-container');
  if (!container) return;
  
  if (deferredPrompt) {
    container.innerHTML = `
      <button onclick="installerApp()" style="background: linear-gradient(135deg, #10b981, #059669);">
        📲 Installer l'application
      </button>
    `;
  } else if (window.matchMedia('(display-mode: standalone)').matches) {
    container.innerHTML = `
      <p style="color: var(--success); font-weight: 600;">
        ✅ Application déjà installée !
      </p>
    `;
  }
}

async function installerApp() {
  if (!deferredPrompt) return;
  
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  
  if (outcome === 'accepted') {
    console.log('✅ App installée');
  }
  
  deferredPrompt = null;
  afficherBoutonInstallation();
}

// ============================
// INITIALISATION AU CHARGEMENT
// ============================
window.addEventListener('DOMContentLoaded', () => {
  chargerDonnees();
  afficherMatieres(appData.matieres);
  console.log("🎓 App initialisée avec succès !");
  
  // Enregistrer le Service Worker pour PWA
  if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/App-de-R-vision/service-worker.js')
    .then((registration) => {
      console.log('✅ Service Worker enregistré:', registration);
    })
    .catch((error) => {
      console.log('❌ Erreur Service Worker:', error);
    });
}
