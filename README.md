# learning_angular

Ce projet, qui est en cours de réalisation, a pour but de suivre et de vous partager ma progression dans l'apprentissage du framework [Angular](https://angular.io/).

J'utilise comme support les cours d'**OpenClassrooms**, disponibles à [cette adresse](https://openclassrooms.com/fr/courses/4668271-developpez-des-applications-web-avec-angular). Je partagerai dans ce `README.md` la démarche utilisée, mes résultats, etc.  

## Sommaire

- [Introduction à **Angular**](#introduction-à-angular)
  - [Description du framework](#description-du-framework)
  - [Installation des outils nécessaires](#installation-des-outils-nécessaires)
  - [Création de la première application](#création-de-la-première-application)

## Introduction à **Angular**

### Description du framework

**Angular** est un framework *open source*, écrit en **JavaScript** et basé sur **TypeScript**, développé par Google à partir de 2009. Il permet la création d'applications Web, généralement basées sur une seule page (« *Single Page Applications* ») afin de fournir une expérience utilisateur très fluide et légère comparé à un site web classique.

Très orienté front-end, ce framework est très populaire et majoritairement utilisé par les entreprises. De plus, l'intégration de *bootstrap* étant relativement aisée, l'utilisation du *TypeScript* se révèle un peu plus complexe à maîtriser, mais ouvre de nouvelles portes très intéressantes comme la programmation orientée objet, par exemple.

Assez parler, passons à l'installation !

### Installation des outils nécessaires

Je vais utiliser [`**Angular CLI**`](https://cli.angular.io/) pour créer mon application plus facilement.

D'abord, je commence par installer [`**NodeJS**`](https://nodejs.org/en/), qui inclus [`**npm**`](https://www.npmjs.com/) :
```bash
# On va installer la dernière version de NodeJS v15
curl -fsSL https://deb.nodesource.com/setup_15.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Une fois l'installation effectuée, je mets à jour `npm` vers la version `6.14.11` et vérifie les versions installées :

```bash
npm install -g npm@6.14.11

node -v                                               
#v15.9.0

npm -v
# 6.14.11 <-- J'utilise la version 6 de npm pour des raisons de compatibilité avec Angular
```

On peut maintenant installer `Angular CLI` de manière globale sur notre machine :
```
npm install -g @angular/cli
```

Cette interface nous propose plusieurs options dont nous aurons besoin ultérieurement, comme par exemple :
- `ng new <project-name>` : création d'un nouveau projet dans le répertoire actuel.
- `ng serve` : permet de lancer le serveur de notre application, et donc de la tester à l'adresse `localhost:4200`.

On peut donc passer à la création de notre première application Angular !

### Création de la première application
