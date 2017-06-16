import { combineReducers } from 'redux'; 
import todos from './todos';

const TodoReducers = combineReducers({
  todos
})

export default TodoReducers