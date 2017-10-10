import React, { Component } from 'react';
import './App.css';
import Transition from './components/transition';

class App extends React.Component {
constructor() {
  super();
  this.state = {
    open: false
  }
}
  handleOpen = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const {open} = this.state;
    return (
      <div className="App">
          <button onClick={this.handleOpen}>Open</button>
          
          <Transition>
            {open ? <div>hi from transition</div> : null}
          </Transition>
      </div>
    );
  }
}

export default App;
