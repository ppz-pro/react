import styles from 'rollup-plugin-styles'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-babel'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: 'demo/index.js',
  output: {
    file: 'demo/index.dist.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    babel(),
    commonjs(),
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    styles({
      stylus: {
        paths: [`${process.cwd()}/node_modules`]
      }
    }),
    serve('demo'),
    livereload({
      watch: 'demo'
    })
  ]
}