# learning_angular

Ce projet, qui est en cours de réalisation, a pour but de suivre et de vous partager ma progression dans l'apprentissage du framework [Angular](https://angular.io/).

J'utilise comme support les cours d'**OpenClassrooms**, disponibles à [cette adresse](https://openclassrooms.com/fr/courses/4668271-developpez-des-applications-web-avec-angular). Je partagerai dans ce `README.md` la démarche utilisée, mes résultats, etc.  

## Sommaire

- [Introduction à **Angular**](#introduction-à-angular)
  - [Description du framework](#description-du-framework)
  - [Installation des outils nécessaires](#installation-des-outils-nécessaires)
  - [Création de la première application](#création-de-la-première-application)
- [Création du premier **Component**](#création-du-premier-component)
  - [Construction du Component](#construction-du-component)
  - [Test du Component](#test-du-component)
- [Réalisation du premier projet](#réalisation-du-premier-projet)
  - [Objectif : créer un blog](#objectifs)
  - [Réalisation](#réalisation)
  - [Résultat](#résultat)


## Introduction à **Angular**

### Description du framework

**Angular** est un framework *open source*, écrit en **JavaScript** et basé sur **TypeScript**, développé par Google à partir de 2009. Il permet la création d'applications Web, généralement basées sur une seule page (« *Single Page Applications* ») afin de fournir une expérience utilisateur très fluide et légère comparé à un site web classique.

Très orienté front-end, ce framework est très populaire et majoritairement utilisé par les entreprises. De plus, l'intégration de *bootstrap* étant relativement aisée, l'utilisation du *TypeScript* se révèle un peu plus complexe à maîtriser, mais ouvre de nouvelles portes très intéressantes comme la programmation orientée objet, par exemple.

Assez parler, passons à l'installation !

### Installation des outils nécessaires

Je vais utiliser **[`Angular CLI`](https://cli.angular.io/)** pour créer mon application plus facilement.

D'abord, je commence par installer **[`NodeJS`](https://nodejs.org/en/)**, qui inclus **[`npm`](https://www.npmjs.com/)** :
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

Nous allons enfin pouvoir créer notre application ; mais avant ça, jetons un œil aux deux flags importants que nous allons utiliser :
- `--style=scss` : on va simplifier la rédaction de notre *stylesheet* en incluant des fichiers en `scss` et non `css`. De plus, en vue de l'intégration de *bootstrap* à ce projet, l'utilisation de `scss` nous facilitera la tâche.
- `--skip-tests=true` : on ne crée pas de fichiers de tests unitaires pour l'instant, nous y reviendrons une fois plus à l'aise avec le framework.

Ce qui nous donne la commande :
```bash
ng new learning-angular --style=scss --skip-tests=true
```

On peut se rendre dans notre dossier `learning-angular` fraîchement créé pour y installer deux packages supplémentaires :
```bash
# On fait attention à ne pas inclure le flag -g ici : les packages doivent être installés localement (--save).
npm install bootstrap@latest --save

# Nous installons ce package pour un cours ultérieur.
npm install jquery@latest --save
```

On lance `ng serve` dans notre dossier, puis nous rendons à l'adresse `localhost:4200`. Voici ce qu'on obtient :

![](img/first_serve.png)

Tout est donc fonctionnel, nous allons alors commencer à la modifier !

## Création du premier Component

Je vais maintenant créer mon tout premier *Component* avec la commande `ng generate component <name>`.

### Construction du Component

Notre *component* est donc créé dans un sous dossier dans `src/app/`. Il est constitué de 3 fichiers :
- Un fichier *template* : `<name>.component.html`
- Un fichier de style : `<name>.component.scss`
- Un fichier *component* : `<name>.component.ts`

Également, le fichier `app.module.ts` est modifié pour que notre nouveau *component* soit disponible.

### Test du Component

On commence par créer un back-up du fichier `app.component.html`, puis nous le modifions pour qu'il ne contienne que cette ligne :
```html
<app-first></app-first>
```

> *first* est le nom choisi pour ce premier component (très original).

On se rend ensuite à l'adresse de notre application dans notre navigateur, où la phrase suivante doit apparaître:
```
first works!
```

Notre premier *component* est donc fonctionnel !


## Réalisation du premier projet

Nous allons maintenant réaliser notre premier projet avec ce que nous avons vu.

### Objectifs

L'objectif est de créer une ébauche de blog, qui affiche des posts constitués :
- d'un **Titre** de type *string*,
- d'un **Contenu** de type *string*,
- d'un nombre de **"likes"** de type *number*,
- d'une **date** de création de type *Date*.

L'array sera créé au préalable dans `blog/src/app/app.component.ts`.

### Réalisation

On commence par créer un nouveau projet Angular : `ng new blog --style=scss --skip-tests=true`
On y intègre directement *bootstrap* : `npm install bootstrap@3.3.7`

> L'utilisation de bootstrap 3.3.7 est propre à ce projet, pour suivre les exemples du cours en matière de mise en page

Puis nous créons notre *component* **Post** : `ng generate component post`

> Ce *component* servira à l'affichage de chaque post. Il sera appelé avec la directive `*ngFor`.

Nous commençons par générer notre *array* dans `app.component.ts` :
```ts
posts = [
  {
    title: 'toto',
    content: '[...]',
    loveIts: 0,
    created_at: new Date()
  },
  {
    title: 'titi',
    content: '[...]',
    loveIts: 0,
    created_at: new Date()
  },
  // [...]
];
```

Puis nous modifions `post.component.ts` pour y intégrer ces fonctions :
```ts
@Input() postTitle!: string;
@Input() postContent!: string;
@Input() postLove!: number;
@Input() postDate!: Date;

//[...]

getColor() {
  if (this.postLove > 0) {
    return 'green';
  } else if (this.postLove < 0) {
    return 'red';
  }
}

love() {
 this.postLove += 1;
}

hate() {
  this.postLove -= 1;
}
```

> Ici, `getColor()` va nous permettre de déterminer la couleur à appliquer à notre texte plus tard ; un article aimé sera vert, et à l'inverse, un article qui n'est pas apprécié sera rouge.

Maintenant, il faut configurer notre *template* `post.component.ts`. Rappelons qu'elle doit pouvoir s’exécuter autant de fois qu'il y a d'article.
```html
<li [ngClass]="{'list-group-item': true,
                'list-group-item-success': postLove > 0,
                'list-group-item-danger': postLove < 0}">
  <div class="pull-right">
    <h3 class="text-muted"><em>{{ postDate | date: 'dd/MM/yyyy, hh:mm a' }}</em></h3>
  </div>
  <h2 [ngStyle]="{color: getColor()}"><strong>{{ postTitle }}</strong></h2>
  <p [ngStyle]="{color: getColor()}">{{ postContent }}</p>
  <div class="btn-toolbar">
      <button class="btn btn-success "
              (click)="love()">Love it!</button>
      <button class="btn btn-danger "
              (click)="hate()">Don't love it!</button>
  </div>

</li>
```

Précisons quelques points :
- Nous créons donc un élément d'une liste (`<li>`) auquel nous appliquons une **classe dynamique** en fonction de `postLove` (le nombre de like). L’élément sera donc :
  - **Blanc** : même nombre de *likes* et de *dislikes*.
  - **Rouge** : Si le nombre de *dislikes* est supérieur au nombre de *likes* (article non apprécié).
  - **Vert**  : Si le nombre de *likes* est supérieur au nombre de *dislikes* (article apprécié).
- Nous affichons la **date** en haut à droite à l'aide d'une `<div>` avec la classe `pull-right`. Le texte sera en italique (`<em>`) et de couleur grise (classe `text-muted`). Nous formatons également cette date grâce à un `DatePipe` pour la rendre plus agréable visuellement.
- L'affichage du **titre** (en gras) et du **contenu** varieront en fonction du nombre de *likes* également grâce à la fonction `getColor()`.
- Enfin, on met en place 2 **boutons** :
  - Le premier invoque la fonction `love()` afin d'augmenter le nombre de *likes*
  - Le deuxième invoque la fonction `hate()` afin de diminuer le nombre de *likes*

Il ne nous reste plus qu'à adapter notre *template* `app.component.html` pour créer notre blog :
```html
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <h1>Mon Blog</h1>
      <ul class="list-group">
        <app-post  *ngFor="let post of posts"
                    [postTitle]="post.title"
                    [postContent]="post.content"
                    [postDate]="post.created_at"
                    [postLove]="post.loveIts"></app-post>
      </ul>
    </div>
  </div>
</div>
```

On remarque l'utilisation de la directive `*ngFor` qui permet de récupérer, un par un, les éléments d'un tableau. On peut donc facilement les faire passer à notre *post-component*.

Nous pouvons admirer le résultat maintenant !

### Résultat

Ci-dessous, une capture d'écran de mon blog fraîchement créé :

![](img/blog_serve.png)

Comme expliquer durant la réalisation, les couleurs sont très explicites : les articles appréciés sont donc **toto** et **tete**, contrairement à **tata** et **tutu**. L'article **titi** reste neutre, en revanche.

L'intégralité de ce projet se trouve dans le dossier `blog/`.
