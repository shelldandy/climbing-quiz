const rewireStyledComponents = require('react-app-rewire-styled-components')
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const rewireAliases = require('react-app-rewire-aliases')
const { paths } = require('react-app-rewired')
const path = require('path')

module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env)
  config = rewireReactHotLoader(config, env)
  config = rewireAliases.aliasesOptions({
    '@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
    '@container': path.resolve(__dirname, `${paths.appSrc}/containers/`),
  })(config, env)

  return config
}
