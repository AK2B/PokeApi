# ECF-1

---

**Pokedex**

> Visualiser le site : https://ak2b.github.io/pokeApi/

## pokeApi

---

## Compétences évaluées

Activité-type 1

1. Maquetter une application
2. Réaliser une interface utilisateur web statique et adaptable
3. Développer une interface utilisateur web dynamique

## Contexte du projet

> Réaliser le frontend d’une application web « responsive » destiné à visualiser les monstres Pokémon et leurs principales caractéristiques en exploitant dynamiquement les données issues de la base de données PokéAPI (https://pokeapi.co/).

## Charte graphique

_La charte graphique devra respecter les contraintes suivantes :_

- Une palette couleur harmonieuse limitée à 4 couleurs (hors blanc, noir et gris) issue des préconisations « Material Design » (https://material.io/resources/color/)
- Un bandeau supérieur incluant, de gauche à droite :

  - une îcone de navigation « back » permettant de revenir à la page précédente
  - le titre « Pokémon frontend »
  - un lien « powered by PokéAPI » vers le site officiel de l’API Pokémon

- Une zone d’affichage principale unique contextuelle.

## Spécifications fonctionnelles

_Le site comportera 3 pages web selon le schéma synoptique fourni en annexe :_

- Une page d’accueil avec le message de bienvenue de votre choix incluant la date
  du jour et un bouton pour accéder à la liste des monstres Pokémon.
- Une page statique listant au minimum 12 Pokémons de votre choix issus de la base
  de données PokéAPI. Chaque monstre Pokémon sera présenter succinctement sous la forme d’une fiche (visuel widget « card ») comprenant :

  - son image
  - son nom
  - son identifiant (ID) dans la base de donnée
  - un lien vers une page dynamique de présentation détaillée du monstre.
  - Une page dynamique présentant les caractéristiques détaillées d’un monstre
    Pokémon donné (paramétrage de la page grâce à l’ID du monstre passé comme
    paramètre de la querystring de l’URL de la page). Cette page affichera les
    caractéristiques récupérées en Ajax grâce à l’API HTTP
    https://pokeapi.co/api/v2/pokemon/{id}/.

  _Les caractéristiques du monstre comprendront au minimum :_

- Son ID
- Son nom
- Sa hauteur
- Son poids
- Son espèce d’appartenance
- Son image
- Le nom de sa première statistique
- Les points d’effort (EV) de sa première statistique
- La valeur de base (base stat) de sa première statistique.

  _Contraintes techniques_
  La réalisation devra impérativement respecter les contraintes suivantes :

- Réalisation d’une maquette « wireframe » orientée « mobile first » avec les liens de navigation
- Utilisation d’une grille « responsive » pour l’affiche de la liste des monstres avec comportement suivant :

  - 1 fiche par ligne pour un écran de largeur inférieure ou égale à 480 pixels
  - 3 fiches par ligne pour un écran de largeur comprise entre 481 et 1024 pixels
  - 4 fiches par ligne pour un écran de largeur supérieure ou égale à 1025 pixels.

- Utilisation du framework jQuery pour les requêtes Ajax et les gestionnaires d’événements.
- Aucune image, excepté peut-être celle du logo Pokémon ou PokéAPI, ne sera stockées dans l’arborescence projet.
- Hormis le nom et l’ID des 12 Pokémons de la page de liste, aucune caractéristique Pokémon sera stockée « en dur » dans l’arborescence projet.
- Auto-documentation du code.
- Respect des normes, règles et conventions de programmation frontend.

  _La réalisation pourra éventuellement respecter les contraintes optionnelles suivantes :_

- Utilisation du framework graphique Bootstrap.
- Utilisation du framework jQuery pour la manipulation du DOM.

  _Livrable_
  Le livrable sera constitué d’un document comprenant la maquette et d’un fichier zip comprenant l’arborescence du frontend de l’application. Aucune documentation technique additionnelle n’est demandée.

  _Date de livraison_
  Le livrable sera mis au plus tard le 28 février sur le dépôt Métis dans la mission « ECF ».
  Connaissance du contexte « métier » Aucune connaissance spécifique sur les Pokémons est bien sûr nécessaire pour ce projet.
