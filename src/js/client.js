import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'; 
import { Provider } from 'react-redux'; 
import TodoReducers from './reducers';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import TodoApp from './components/todos';

let store = createStore(TodoReducers); 

const app = document.getElementById('app'); 

ReactDOM.render( <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, app);
