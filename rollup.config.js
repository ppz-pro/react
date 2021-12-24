import styles from 'rollup-plugin-styles'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

export default [
  'button',
  'modal'
].map(name => ({
  name,
  input: 'src/' + name + '/index.jsx'
})).map(item => ({
  input: item.input,
  output: {
    file: 'dist/' + item.name + '.js',
    format: 'cjs'
  },
  plugins: [
    styles(),
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled'
    })
  ]
}))