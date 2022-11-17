import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({update,remove,todoList}) => {
  return (
    <ul className='todo-list'>
    {todoList.map((todoItem) => 
      <TodoItem update={update} remove = {remove} todo = {todoItem} key = {todoItem.id}/>)}
    </ul>
  )
}

export default TodoList