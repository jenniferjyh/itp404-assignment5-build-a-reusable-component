import React from 'react';
import HeartCount from './HeartCount';

import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count:0
    };
  }

  clickCount = async () => {
    this.setState (prevState => ({
      count: prevState.count + 1
    }));
  }

  clearCount = async () => {
    this.setState ({
      count: 0
    })
  }

  render() {
    return (
      <HeartCount value = {this.state.count} reacted = {this.clickCount} clear = {this.clearCount}/>
    )
  }
}

