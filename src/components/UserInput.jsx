import React,{useState} from 'react';
const UserInput = ({create,props}) => {
  const [todoItem,setText] = useState('');

  function helperAddTodo(e) {
    e.preventDefault();
    create(todoItem);
    setText('');
    }
  const addTodoItem = (e) => {
    if (todoItem.length !== 0 && (e.type === 'blur' || e.key === 'Enter')) {
      helperAddTodo(e);
    }
  }
  return (
    <input 
      className='new-todo'
      placeholder='What needs to be done?'
      onChange = { e => setText(e.target.value)}
      onBlur = {addTodoItem}
      onKeyDown = {addTodoItem}
      value = {todoItem}
      autoFocus
      {...props}/>
  )
}

export default UserInput