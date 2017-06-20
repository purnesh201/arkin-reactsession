
export const addTodo = (obj) => {
  return {
    type: 'ADD_TODO',
    value: obj
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    value: id
  }
}
export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    value: id
  }
}
