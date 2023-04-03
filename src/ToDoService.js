import LocalStorageService from "./localStorageService";

export default class TodoService {
  constructor() {
    this.todos = this.loadTodos() || [];
  }

  addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      archived: false,
      position: 1,
    };
    this.todos.push(newTodo);
    return newTodo;
  };

  removeTodo = (id) => {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      const removedTodo = this.todos.splice(index, 1)[0];
      return removedTodo;
    }
  };

  updateTodo = (id, newText) => {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos[index].text = newText;
      return this.todos[index];
    }
  };

  completeTodo = (id) => {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos[index].completed = true;
      return this.todos[index];
    }
  };

  archivedTodo = (id) => {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos[index].archived = true;
      return this.todos[index];
    }
  };

  getAllTodos = async () => {
    return this.todos;
  };

  loadTodos = () => {
    this.todos = LocalStorageService.get("todos");
  };

  save = () => {
    LocalStorageService.save("todos", this.todos);
  };
}
