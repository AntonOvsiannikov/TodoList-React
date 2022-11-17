function isAllTrueTodo(todoList) {
  const state = todoList.filter(todo => todo.checked === true).length;
  return state === todoList.length && todoList.length > 0;
}
export default isAllTrueTodo;