import styles from 'rollup-plugin-styles'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-babel'

// dev server:
// https://blog.bitsrc.io/trying-rollup-for-react-applications-d3c2304d16bf

export default {
  input: 'demo/index.js',
  output: {
    file: 'demo/index.dist.js',
    format: 'iife'
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
    })
  ]
}