import React, { Component } from 'react';
import TodoListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';
    
class CreateTodo extends Component {
    render() {
        return (
           <form>
               <input type="text" placeholder="What do I need to do?" />
               <button>Create</button> 
           </form>
        );
    }
}

export default CreateTodo;