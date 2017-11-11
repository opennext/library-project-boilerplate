A boilerplate for library project, used for common or base solution

### Build

1. Install the dependencies:

```
npm install
```
2. Build
```
npm run build
```
you will get the following format bundle:  
 - amd – Asynchronous Module Definition, used with module loaders like RequireJS
 - cjs – CommonJS, suitable for Node and Browserify/Webpack
 - es – Keep the bundle as an ES module file
 - iife – A self-executing function, suitable for inclusion as a <script> tag. (If you want to create a bundle for your application, you probably want to use this, because it leads to smaller file sizes.)
 - umd – Universal Module Definition, works as amd, cjs and iife all in one
