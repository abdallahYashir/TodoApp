import TodoService from "../ToDoService";

// Set up a mock localStorage object before running the test
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock;

test("todo list length should be one after adding", () => {
  const todoService = new TodoService();
  todoService.addTodo("Add item 1");
  expect(todoService.getAllTodos().length).toBe(1);
  expect(todoService.getAllTodos()[0].text).toBe("Add item 1");
});

test("todo item should be completed", () => {
  const todoService = new TodoService();
  todoService.addTodo("Add item 1");
  const todoItemId = todoService.getAllTodos()[0].id;
  expect(todoService.getAllTodos().length).toBe(1);
  expect(todoService.getAllTodos()[0].completed).toBeFalsy();
  todoService.completeTodo(todoItemId);
  expect(todoService.getAllTodos()[0].completed).toBeTruthy();
});

test("todo item should be archived", () => {
  const todoService = new TodoService();
  todoService.addTodo("Add item 1");
  const todoItemId = todoService.getAllTodos()[0].id;
  expect(todoService.getAllTodos().length).toBe(1);
  expect(todoService.getAllTodos()[0].archived).toBeFalsy();
  todoService.archivedTodo(todoItemId);
  expect(todoService.getAllTodos()[0].archived).toBeTruthy();
});
