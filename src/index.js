import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
