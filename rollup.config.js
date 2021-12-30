import styles from 'rollup-plugin-styles'
import babel from '@rollup/plugin-babel'

export default {
  input: {
    modal: 'src/modal/index.js',
    dialog: 'src/dialog/index.js',
    component: 'src/component.js',
    hooks: 'src/hooks.js',
    index: 'src/index.js'
  },
  output: {
    dir: 'dist'
  },
  plugins: [
    babel(),
    styles({
      stylus: {
        paths: [`${process.cwd()}/node_modules`]
      }
    })
  ]
}
