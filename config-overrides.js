const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewireReactHotLoader = require('react-app-rewire-hot-loader')

module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env);
  config = rewireReactHotLoader(config, env)

  // TODO: Add useful aliases
  // https://github.com/aze3ma/react-app-rewire-aliases

  return config;
}
