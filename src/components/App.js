import React, { Component } from 'react';

const todos = [
{
  task: 'make React tutorial', 
  isCompleted: false
}, 
{
  task: 'eat dinner', 
  isCompleted: false
}
]; 

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Todos App</h1>
      </div>
    );
  }
}

export default App;