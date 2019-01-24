import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import AppRoutes from './routes';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';

const store=createStore(reducer,applyMiddleware(thunk));
ReactDOM .render(
  <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
  </Provider>,

 document.getElementById('root'));
