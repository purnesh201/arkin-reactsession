import React, { Component } from 'react';
import Nav from './components/nav'; 

class userApp extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
          {this.props.children}}
      </div>
    );
  }
}


export default userApp;

