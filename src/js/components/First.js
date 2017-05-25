import React from "react";
import Nav from './nav';
class First extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Abhi'
        }
        this.handleClick = this.handleClick.bind(this); 
    }
    handleClick() {
        this.setState({name: 'Purnesh'});
    }

  render() {
    return (
        <div>
            <Nav />
            <button onClick={this.handleClick}>Click me</button>
      <div>{this.state.name}</div>
      <div>hi</div>
      </div>
    );
  }
}

export default First;