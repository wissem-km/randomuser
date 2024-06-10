# Next.js 14 Project - Random User and Quotes API

## Description

Ce projet est une application Next.js 14 qui consomme deux API :
- **Random User API** : pour générer des utilisateurs aléatoires.
- **Random Quotes API** : pour générer des citations aléatoires.

L'application affiche une liste d'utilisateurs aléatoires avec leurs informations de base et une citation aléatoire pour chaque utilisateur.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :
- Node.js (version 18 ou supérieure)
- npm ou yarn

## Installation

1. Clonez le dépôt :
    ```bash
    git clone <URL_DU_DEPOT>
    cd <NOM_DU_PROJET>
    ```

2. Installez les dépendances :
    ```bash
    npm install
    ```
   ou
    ```bash
    yarn install
    ```

## Utilisation

1. Démarrez le serveur de développement :
    ```bash
    npm run dev
    ```
   ou
    ```bash
    yarn dev
    ```

2. Ouvrez votre navigateur et accédez à l'URL suivante :
    ```
    http://localhost:3000
    ```



## API Utilisées

### Random User API

- **URL** : `https://randomuser.me/api/`
- **Documentation** : [Random User API Documentation](https://randomuser.me/documentation)

### Random Quotes API

- **URL** : `https://api.quotable.io/random`
- **Documentation** : [Quotable API Documentation](https://github.com/lukePeavey/quotable)



## Note Importante

Les APIs utilisées dans ce projet retournent toujours des valeurs aléatoires à chaque requête, même si vous fournissez un UUID ou un autre identifiant spécifique. Cela signifie que chaque fois que vous faites une requête à l'une de ces APIs, vous recevrez des données différentes. Cette caractéristique doit être prise en compte lors du développement et des tests de l'application.

## Déploiement

Pour déployer l'application, vous pouvez utiliser des plateformes comme Vercel, Netlify, ou toute autre plateforme de votre choix.

1. Construisez l'application pour la production :
    ```bash
    npm run build
    ```
   ou
    ```bash
    yarn build
    ```

2. Démarrez l'application en mode production :
    ```bash
    npm start
    ```
   ou
    ```bash
    yarn start
    ```

## Contribution

Les contributions sont les bienvenues! Veuillez ouvrir une issue ou soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

