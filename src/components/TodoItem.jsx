import React,{useState} from 'react';
import Todo from '../util/Todo';

const TodoItem = ({update,remove,todo}) => {
  const [editInputState,setEditInputState] = useState(false);
  const [editInputValue,setEditInputValue] = useState(todo.text);
  const removeTodoItem = (e) => {
    e.preventDefault();
    remove(todo.id)
  }
  const toggleTodoItem = (e) => {
    todo.toggle(!todo.checked);
    update(todo);
  }
  const createInputField =(e) => {
    setEditInputState(true);
  }
  const editTodo =(e) => {
    if(e.type === 'blur' || e.key === 'Enter') {
      helperEditFunction(e);
    }
  }
  const helperEditFunction = (e) => {
    if(editInputValue) {
      e.preventDefault();
      updateTextTodoItem(editInputValue);
      setEditInputState(false);
    } else {
      remove(todo.id);
    }
  }
  const updateTextTodoItem = (inputTextTodo) => {
    todo.newText(inputTextTodo);
    update(todo);
  }
  return (
    <li data-id={todo.id} className={`${todo.checked ? 'completed' : ''} ${editInputState ? 'editing' : ''}`}>
      <div 
        className='view'
        onDoubleClick={createInputField}
      >
        <input 
          className='toggle' 
          type='checkbox'
          checked={todo.checked}
          onChange={toggleTodoItem}/>
        <label>{todo.text}</label>
        <button
          className='destroy'
          onClick={removeTodoItem}
        ></button>
      </div>
      {editInputState ? 
          <input 
            value={editInputValue} 
            onChange = { e => setEditInputValue(e.target.value)}
            onBlur = {editTodo}
            onKeyDown = {editTodo}
            className='edit' 
            autoFocus
          /> : null}
    </li>
  )
}
export default TodoItem