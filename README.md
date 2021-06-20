# Firebase / React système d'authentification

Système d'authentification avec comme front une interface développée avec ReactJS et comme back Firebase. Le but était de me familiariser avec l'utilisation de firebase.

## Overview

![Screenshot 2021-06-20 at 14-52-47 React App](https://user-images.githubusercontent.com/68466322/122674881-3e665600-d1d7-11eb-8126-224ae2d40c6b.png)
![Screenshot 2021-06-20 at 14-52-58 React App](https://user-images.githubusercontent.com/68466322/122674882-3f978300-d1d7-11eb-9d45-945f6b1349b8.png)
![Screenshot 2021-06-20 at 14-53-07 React App](https://user-images.githubusercontent.com/68466322/122674884-40c8b000-d1d7-11eb-9a4f-4c7fe8c25220.png)

## Fonctionnalités

- Connexion
- Inscription
- Mot de passe oublié
- Routes protégées accessibles uniquement après authentification

## Utilisation

### .env

        REACT_APP_APIKEY=
        REACT_APP_AUTHDOMAIN=
        REACT_APP_PROJECTID=
        REACT_APP_STORAGEBUCKET=
        REACT_APP_MESSAGINGSENDID=
        REACT_APP_APPID=
        REACT_APP_BASEURL=

### Commandes

    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "prettier-format": "prettier --config .prettierrc src/*.tsx src/*.ts src/**/*.tsx src/**/*.ts --write",

## Dépendances

    "@craco/craco": "^6.1.2",
    "@heroicons/react": "^1.0.1",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "@types/jest": "^26.0.15",
    "@types/node": "^12.0.0",
    "@types/react": "^17.0.11",
    "@types/react-dom": "^17.0.0",
    "@types/react-router-dom": "^5.1.7",
    "dotenv": "^10.0.0",
    "firebase": "^8.6.7",
    "prettier": "^2.3.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "typescript": "^4.1.2",
    "web-vitals": "^1.0.1"
