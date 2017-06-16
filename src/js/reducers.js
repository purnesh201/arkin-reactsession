import { combineReducers } from 'redux'; 
import todos from './todosReducer';

const TodoReducers = combineReducers({
  todos
})

export default TodoReducers