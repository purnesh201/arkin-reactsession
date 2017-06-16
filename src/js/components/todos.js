import React from "react";
import TodoList from './todolist';
import Nav from './nav';
import { connect } from 'react-redux';
import * as actions from '../actions'; 

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.markItemCompleted = this.markItemCompleted.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }
  handleTextChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  handleAddItem(event) {
    event.preventDefault();

    var newItem = {
      id: Date.now(),
      text: this.state.text,
      done: false
    };

    // this.setState((prevState) => ({
    //   items: prevState.items.concat(newItem),
    //   text: ""
    // }));
    this.props.addTodo(newItem);
    this.setState({text: ""});
  }
  markItemCompleted(itemId) {
    // var updatedItems = this.props.items.map(item => {
    //   if (itemId === item.id)
    //     item.done = !item.done;

    //   return item;
    // });

    // // State Updates are Merged
    // this.setState({
    //   items: [].concat(updatedItems)
    // });
    this.props.toggleTodo(itemId);
  }
  handleDeleteItem(itemId) {
    // var updatedItems = this.state.items.filter(item => {
    //   return item.id !== itemId;
    // });

    // this.setState({
    //   items: [].concat(updatedItems)
    // });
    this.props.deleteTodo(itemId);
  }
  render() {
    return (
      <div>
        <Nav></Nav>
        <h3 className="apptitle">MY TO DO LIST</h3>
        <div className="row">
          <div className="col-md-3">
            <TodoList items={this.props.items} onItemCompleted={this.markItemCompleted} onDeleteItem={this.handleDeleteItem} />
          </div>
        </div>
        <form className="row">
          <div className="col-md-3">
            <input type="text" className="form-control" onChange={this.handleTextChange} value={this.state.text} />
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary" onClick={this.handleAddItem} disabled={!this.state.text}>{"Add #" + (this.props.items.length + 1)}</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    items: state.todos
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (obj) => {
      dispatch(actions.addTodo(obj));
    },
    toggleTodo: (id) => {
      dispatch(actions.toggleTodo(id));
    },
    deleteTodo: (id) => {
      dispatch(actions.deleteTodo(id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);

