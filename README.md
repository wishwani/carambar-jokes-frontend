# Carambar Jokes Frontend

Il s'agit de la partie frontend du projet **Carambar Jokes API**, une application web basée sur React conçue pour afficher des blagues de manière interactive et conviviale.

## Fonctionnalités

- Récupération des blagues depuis l'API **Carambar Jokes**.
- Interface utilisateur interactive construite avec React.
- Design responsive adapté aux ordinateurs et appareils mobiles.

## Structure du Projet

```plaintext
├── public/        # Fichiers statiques comme index.html, favicon.ico
├── src/
│   ├── components/ # Composants React réutilisables et Appels aux services API (ex : requêtes axios)
│   ├── App.js      # Composant principal React
│   ├── index.js    # Point d'entrée de l'application
├── build/         # Fichiers prêts pour la production (créés après la compilation)
├── package.json   # Dépendances et scripts du projet
```

## Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre système :

- **Node.js** (v16 ou supérieur)
- **npm** (Node Package Manager)

## Installation

1. Clonez le dépôt :
    [GithubLink](https://github.com/wishwani/carambar-jokes-frontend.git)

   

2. Accédez au dossier du frontend :

    ```
    cd <carambar-jokes-frontend>
    ```

3. Installez les dépendances :

    ```
    npm install
    ```

## Scripts Disponibles
1. Lancer le projet en local

    ```
    npm start
    ```

    L'application sera disponible sur 

    ```
    http://localhost:3000.

    ```

2. Compiler le projet pour la production

    ```
    npm run build
    ```

    Cela génère une version optimisée pour la production dans le dossier build/.

3. Déployer sur GitHub Pages

    Pour déployer la partie frontend sur GitHub Pages :

    ```
    npm run deploy

    ```

## Déploiement
Le projet est hébergé sur GitHub Pages. Vous pouvez accéder à la version en ligne ici :

   [URLDeploiment](https://wishwani.github.io/carambar-jokes-frontend/)


## Technologies Utilisées
React - Librairie JavaScript pour construire des interfaces utilisateur.

Axios - Pour effectuer des requêtes API.

React-Scripts - Outils de compilation et de configuration pour les applications React.