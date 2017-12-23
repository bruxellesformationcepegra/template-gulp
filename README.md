# template-gulp

Un template Gulp avec quelques dépendances renseignées côté json :

- Babel
- Browser sync
- Gulp
- Autoprefixer
- Clean CSS
- HTML min
- Plumber
- Sass
- Sourcemaps
- Uglify
- Plumber
- Notify
- Image min
- rename

## Comment installer Gulp ?

Avant tout, installez Node.js.

Ensuite, installez Gulp en global sur votre machine :

```
npm install gulp -g
```

Finalement, puisque le .json est déjà bien fourni en dépendances, il vous suffit de vous placer à la racine de votre projet (là où se trouvent les dossiers src, dist et les fichiers gulpfile.js et package.json) et de lancer :

```
npm install
```

Ensuite, toujours à la racine lancez :

```
gulp
```

ou

```
npm run gulp
```


Et voilà :)

## Pour ajouter l'étape de conversion de ES6 à ES5

Tout d'abord, installez Babel sur votre machine

`npm install babel-core babel-preset-es2015`

Puis ajoutez le plugin-in Babel pour Gulp

```
npm install gulp-babel --save-dev
```

Ensuite, dans votre gulpfile.js

```
var babel = require('gulp-babel');
```

```
gulp.task("default", function () {
  return gulp.src("src/app.js")
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest("dist"));
});
```


Et voilà, vos ES6 seront transpilés en ES5 :)
