import React from 'react';
import TodoFilter from './TodoFilters';

const FooterApp = ({filter,todoList,clearAllTodoDone}) => {
  function todoNotDoneCount() {
    let count = todoList.filter(({checked}) => !checked).length;
    return count;
  }
  function todoDoneCount() {
    let count = todoList.filter(({checked}) => checked).length;
    return count > 0;
  }
  const deleteAllDone = (e) => {
    e.preventDefault();
    clearAllTodoDone();
  }
  return(
    <footer className='footer'>
      <span className='todo-count' >{todoNotDoneCount()} items left</span>
      <TodoFilter filter={filter}/>
      <button className="clear-completed" onClick={deleteAllDone} style={{display:(todoDoneCount()) ? 'block' : 'none'}} >Clear completed</button>
    </footer>
    )
}

export default FooterApp