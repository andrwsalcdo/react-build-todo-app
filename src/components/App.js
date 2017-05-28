import React, { Component } from 'react';
import TodosList from './todos-list';

const todos = [
{
  task: 'Make React Tutorial', 
  isCompleted: false
}, 
{
  task: 'Eat Dinner', 
  isCompleted: false
}
]; 

class App extends Component {
  constructor(props) {
    super(props); 
    
    this.state = {
      todos 
    }; 
  }
  render() {
    return (
      <div>
        <h1>React Todos App</h1>
        <TodosList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;

