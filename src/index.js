import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer/rootReducer';
import { BrowserRouter as Router } from 'react-router-dom';
const store=createStore (rootReducer);
ReactDOM.render(<Router>
    
  <Provider store={store}><App /></Provider></Router>, document.getElementById('root'));
serviceWorker.unregister();