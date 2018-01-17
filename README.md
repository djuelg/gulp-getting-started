# Gulp getting started

This project contains information about the basic setup of a gulp project.
It has been developed following [Gulp for Begginers](https://css-tricks.com/gulp-for-beginners/) from css-tricks.com

## Standard project structure
```
 |- app/
      |- css/
      |- fonts/
      |- images/ 
      |- index.html
      |- js/ 
      |- scss/
  |- dist/
  |- gulpfile.js
  |- node_modules/
  |- package.json
``` 
## Important files
- `package.json` contains basic information about the project and the used dependencies
- `gulpfile.js` contains the tasks which can be run via gulp

## Important folders
- `app` contains the development files
- `dist` contains the build files
- `node_modules` contains the node dependencies

## Most important commands
- `npm init` sets up the basic npm project (package.json)
- `npm install gulp --save-dev` installs gulp into the project (gulpfile.js has to be created manually)
- `gulp` runs the gulp task called "default"
- `npm install {name} --save-dev` installs a npm development dependency

## Modules you may want to add
For development:

- Using Autoprefixer to write vendor-free CSS code
- Adding Sourcemaps for easier debugging
- Creating Sprites with sprity
- Compiling only files that have changed with gulp-changed
- Writing ES6 with Babel or Traceur
- Modularizing Javascript files with Browserify, webpack, or jspm
- Modularizing HTML with template engines like Handlebars or Swig
- Splitting the gulpfile into smaller files with require-dir
- Generating a Modernizr script automatically with gulp-modernizr

For optimization:

- Removing unused CSS with unCSS
- Further optimizing CSS with CSSO
- Generating inline CSS for performance with Critical

Furhtermore you can take a look at this gist containing a ton of useful links: [https://gist.github.com/renarsvilnis/ab8581049a3efe4d03d8](https://gist.github.com/renarsvilnis/ab8581049a3efe4d03d8)