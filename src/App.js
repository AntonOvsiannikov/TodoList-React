import React,{useState,useEffect} from "react";
import UserInput from "./components/UserInput";
import Todo from './util/Todo.js';
import TodoList from "./components/TodoList";
import './styles/index.css';
import FooterApp from "./components/FooterApp";
import isAllTrueTodo from "./util/todoHelperFunction";


function App() {
  
  let localTodoList = JSON.parse(localStorage.getItem('todoApp')).map(todo => new Todo(todo.id,todo.text,todo.checked));
  const [todoList,setTodoList] = useState(localTodoList || []);
  const [filterTodoList,setFilterTodoList] = useState(todoList);
  useEffect(() => {
    window.location.hash = window.location.hash ? window.location.hash : '#/';
  },[])
  useEffect(() => {
    localStorage.setItem('todoApp',JSON.stringify(todoList));
    filterRenderList();
  },[todoList])
  function createTodo(createItem) {
    setTodoList([...todoList,new Todo(false,createItem,false)]);
    commitTodos(todoList);
  }
  function removeTodo(remoteTodo) {
    setTodoList(todoList.filter(todo => todo.id !== remoteTodo));
    commitTodos(todoList);
  }
  function updateTodo(selectedTodo) {
    const newTodoList = todoList.map(todo => todo.id === selectedTodo.id ? selectedTodo : todo);
    setTodoList(newTodoList);
    commitTodos(todoList);
  }
  function clearAllTodoDone() {
    const newTodoList = todoList.filter(({checked}) => !checked);
    setTodoList(newTodoList);
    commitTodos(todoList);
  }
  const checkAllTodo = (e) => {
    const state = isAllTrueTodo(todoList);
    const newCheckedTodoList = todoList.map(todo => {
      todo.checked = !state;
      return todo;
    });
    setTodoList(newCheckedTodoList);
    commitTodos(todoList);
  }
  function commitTodos(todoList) {
    localStorage.setItem(`todoApp`,JSON.stringify(todoList));
  }
  function filterRenderList() {
    switch(window.location.hash) {
      case '#/active':
        setFilterTodoList(todoList.filter(({checked}) => !checked));
        break;
      case '#/completed':
        setFilterTodoList(todoList.filter(({checked}) => checked));
        break;
      default :
        setFilterTodoList(todoList);
        break;
    }
  }
  return (
    <section className="todoapp" id="todoapp1">
      <header className="header">
      <h1>todos</h1>
      <UserInput
        create = {createTodo}
      />
      </header>
      <section className="main">
        <input 
          id="toggle-all"
          checked={isAllTrueTodo(todoList)}
          onClick={checkAllTodo}
          className="toggle-all" 
          type="checkbox" />
        <label htmlFor="toggle-all">
          Mark all as complete</label>
        <TodoList update={updateTodo} remove = {removeTodo} todoList = {filterTodoList}/>
      </section>
      {todoList.length > 0 ? <FooterApp filter={filterRenderList}  todoList={todoList} clearAllTodoDone={clearAllTodoDone}/> : null}
    </section>
  );
}

export default App;
