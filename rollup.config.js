import styles from 'rollup-plugin-styles'
import babel from '@rollup/plugin-babel'

export default {
  input: './src/index.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [
    styles(),
    babel()
  ]
}