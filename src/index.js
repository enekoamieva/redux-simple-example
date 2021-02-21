import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//REDUX
import { createStore } from 'redux';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';


//Pasamos a nuestro store los REDUCERS creados para pasarle por parametros al PROVIDER que envuelve la APP
const store = createStore(
  allReducers,
  //Chrome Extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);