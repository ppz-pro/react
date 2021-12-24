/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/'
  },
  exclude: ['**/node_modules/**/*'],
  plugins: [
    'snowpack-plugin-stylus'
  ],
  packageOptions: {
  },
  devOptions: {
  },
  buildOptions: {
  }
}