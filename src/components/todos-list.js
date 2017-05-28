import _ from 'lodash'; 
import React, { Component } from 'react';
import TodoListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

class TodosList extends Component {
    renderItems() {
        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} />); 
    }
    
    render() {
        return (
            <table>
                <TodoListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}

export default TodosList;