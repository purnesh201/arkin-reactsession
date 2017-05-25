import React from "react";
import TodoItem from './todo';

const TodoList = (props) => {
    return (
      <ul className="todolist">
        {props.items.map(item => (
          <TodoItem key={item.id} id={item.id} text={item.text} completed={item.done} onItemCompleted={props.onItemCompleted} onDeleteItem={props.onDeleteItem} />
        ))}
      </ul>
    );
  }

export default TodoList;