# generator-rrrw [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> yeoman generator with react,redux,react-redux-router,webpack,babel,es6,autoprefixer,HMR,css-module

## Installation

First, install [Yeoman](http://yeoman.io) and generator-rrrw using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-rrrw
```

Then generate your new project:

```bash
yo rrrw
```

## Directory

There is a TodoMVC demo in ```src/```, after ```npm start``` we can open [http://localhost:5959/](http://localhost:5959/) run the demo    

```
src/
├── index.html
├── index.js
├── base.css 
├── assets/
├── actions/
├── components/     
├── constants/      
├── containers/
├── middleware/     
├── reducers/
└── store/
```

## Contains

- [x] [React](https://facebook.github.io/react/)
- [x] [Redux](https://github.com/reactjs/redux)
- [x] [React Router Redux](https://github.com/reactjs/react-router-redux)
- [x] [Webpack](https://webpack.github.io)
- [x] [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [x] [Babel](https://babeljs.io/)
- [x] [Autoprefixer](https://github.com/postcss/autoprefixer)
- [x] [PostCSS](https://github.com/postcss/postcss)
- [x] [CSS modules](https://github.com/outpunk/postcss-modules)
- [x] TodoMVC demo
- [ ] Anything else? welcome contribute!

## Watch & Hot Module Replace

```
$ npm start
```

## production build

```
$ npm run build
```


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## Attention

If you need to support IE9/IE10, please add ```['transform-es2015-classes', {loose: true}]``` in __.babelrc__ in __plugins__ fields

## License

Apache-2.0 © [半边](https://github.com/Mickey-/)


[npm-image]: https://badge.fury.io/js/generator-rrrw.svg
[npm-url]: https://npmjs.org/package/generator-rrrw
[travis-image]: https://travis-ci.org/Mickey-/generator-rrrw.svg?branch=master
[travis-url]: https://travis-ci.org/Mickey-/generator-rrrw
[daviddm-image]: https://david-dm.org/Mickey-/generator-rrrw.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Mickey-/generator-rrrw
