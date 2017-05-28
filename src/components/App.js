import _ from 'lodash'; 
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
  isCompleted: true
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
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)} 
        />
      </div>
    );
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    
    // switch value to opposite 
    foundTodo.isCompleted = !foundTodo.isCompleted;

    this.setState({ todos: this.state.todos });
  }

  createTask(task) {
      this.state.todos.push({
        task, 
        isCompleted: false
      });
      this.setState({ todos: this.state.todos })

  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);

    foundTodo.task = newTask; 
    this.setState({ todos: this.state.todos });  
  }
}

export default App;

