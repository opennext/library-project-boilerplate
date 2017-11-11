import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'
import cjs from 'rollup-plugin-commonjs'

var env = process.env.NODE_ENV
var config = {
  output: {
    format: 'umd',
    /*String The format of the generated bundle. One of the following:
        amd – Asynchronous Module Definition, used with module loaders like RequireJS
        cjs – CommonJS, suitable for Node and Browserify/Webpack
        es – Keep the bundle as an ES module file
        iife – A self-executing function, suitable for inclusion as a <script> tag. (If you want to create a bundle for your application, you probably want to use this, because it leads to smaller file sizes.)
        umd – Universal Module Definition, works as amd, cjs and iife all in one
     */
    name: 'imageUtil'
  },
  plugins: [
    // nodeResolve({
    //   jsnext: true
    // }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ [ 'es2015', { modules: false } ], 'react' ],
      plugins: [ 'external-helpers' ]
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    cjs({
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/create-react-class/**',
        'node_modules/fbjs/**',
        'node_modules/object-assign/**',
        'node_modules/react/**',
        'node_modules/react-dom/**',
        'node_modules/prop-types/**'
      ],
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        'node_modules/react/**': [ 'Component' ],
      },
    }),
  ]
}

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

export default config
