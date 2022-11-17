class Todo {
  constructor(id,text,checked) {
    this.id = id || new Date().valueOf();
    this.text = text;
    this.checked = checked || false;
  }
  toggle(state) {
    this.checked = state;
  }
  newText(newText) {
    this.text = (newText !== this.text) ? newText : this.text;
  }
}
export default Todo;