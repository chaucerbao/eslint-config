const config = require('./index.js')

module.exports = {
  ...config,
  extends: [...config.extends, 'plugin:react/recommended', 'prettier/react'],
}
