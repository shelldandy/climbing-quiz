import React, { PureComponent } from 'react'
import { hot } from 'react-hot-loader'
import Quiz from './containers/Quiz'
import baseStyles from './baseStyles'

class App extends PureComponent {
  render () {
    baseStyles();
    return (
      <Quiz />
    )
  }
}

export default hot(module)(App)
