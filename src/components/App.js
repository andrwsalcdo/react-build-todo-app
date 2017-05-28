import React, { Component } from 'react';
import CreateTodo from './create-todo'; 
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
        <CreateTodo 
          createTask={this.createTask.bind(this)}
         />
        <TodosList 
          todos={this.state.todos}   
        />
      </div>
    );
  }

  createTask(task) {
      this.state.todos.push({
        task, 
        isCompleted: false
      });
      this.setState({ todos: this.state.todos })
  }
}

export default App;

