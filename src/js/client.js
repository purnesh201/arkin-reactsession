import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'; 
import { Provider } from 'react-redux'; 
import TodoReducers from './reducers';

import TodoApp from './components/todos';

let store = createStore(TodoReducers); 

const app = document.getElementById('app'); 

ReactDOM.render( <Provider store={store}>
    <TodoApp/>
  </Provider>, app);
