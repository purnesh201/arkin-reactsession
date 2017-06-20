const todos = (state = [], action) => {
    console.log(action);
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.value]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.value) 
          ? {...todo, done: !todo.done}
          : todo
      )
      case 'DELETE_TODO':
      let updatedItems = state.filter(item => {
        return item.id !== action.value;
    });
        return updatedItems;
    default:
      return state
  }
}

export default todos; 