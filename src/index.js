import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import createSagaMiddleware from 'redux-saga';
import rootReducers from './redux/rootReducers';
import rootSagas from './redux/rootSagas';

import Router from './router/router';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
