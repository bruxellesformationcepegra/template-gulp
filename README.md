# template-gulp

Un template Gulp avec quelques dépendances renseignées côté json :

- Gulp
- Autoprefixer
- Clean-css
- Htmlmin
- Plumber
- Sass
- Sourcemaps
- Uglify

## Comment installer Gulp ?

Avant tout, installez Node.js.

Ensuite, installez Gulp en global sur votre machine : 

npm install gulp -g

Finalement, puisque le .json est déjà bien fourni en dépendances, il vous suffit de vous placer à la racine de votre projet (là où se trouvent les dossier src, dist et les fichier gulpfile.js et package.json) et de lancer :

npm install

Ensuite, toujours à la racine lancez :

gulp

Et voilà :)