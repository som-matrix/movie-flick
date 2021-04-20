import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
// import { PersistGate } from 'redux-persist/integration/react'
import {store} from './config/store'
import {Provider} from 'react-redux'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

