import React, { Component } from 'react';
import TodoListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';
    
class CreateTodo extends Component {
    render() {
        return (
           <form onSubmit={this.handleCreate.bind(this)}>
               <input type="text" placeholder="What do I need to do?" ref="createInput" />
               <button>Create</button> 
           </form>
        );
    }

    handleCreate(event) {
        event.preventDefault(); 
        
        this.props.createTask(this.refs.createInput.value);
        
        // after clicking 'create' button, resets the input form blank
        this.refs.createInput.value = ''; 
    }
}

export default CreateTodo;