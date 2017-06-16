import React from 'react';
import { Route, IndexRoute } from 'react-router';

import userApp from './app';
import Home from './components/Home';
import TodoApp from './components/todos';



export default (
     <Route path="/">
      <Route component={userApp}>
        <IndexRoute component={Home}/>
        <Route path="todos" component={TodoApp} />
      </Route>
    </Route>
 );


