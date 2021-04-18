import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'
import {store,persistor} from './config/store'
import {Provider} from 'react-redux'
require('dotenv').config()
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

