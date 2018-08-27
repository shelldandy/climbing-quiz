import React from 'react';
import { render } from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update')
  whyDidYouUpdate(React)
}

render(<App />, document.getElementById('root'));
// registerServiceWorker();
