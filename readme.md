# US Netting 3.0 Front End Components

A playground for building out components and testing ideas around the USN3.0 front end. Beware that the eslint is strong and opinionated and you may need to use some eslint comments to turn features on and off via files. 

The most common need (allow the use of console.log) place at *TOP* of file to enable console:
``` /* eslint no-console: 0 */ ```



## Deps
- Node v8.8.1 (use nvm)
- Webpack 3.0
- Babel
- ES6
- React/ReactDOM
- Yarn Pkg Manager
- eslint (prettier, react, airbnb)

```nvm use``` 
Above command sets your current node version to the version in .nvmrc file. This should be v8.8.1
Download and setup from here: (https://github.com/creationix/nvm)[NVM by Creationix on Github]

```yarn install```
Command requires yarn which can be installed by using npm (npm install yarn). Tad bit nicer dependency management with some safeguards over npm.

```yarn start```
Kicks off the development server and environment for creating the front end components 

### Front End Tech
- React (React Router, JSX)
- Stylus
- PostCSS
- Styled Components
- CSSGrid / Flexbox


