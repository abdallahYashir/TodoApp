import "./App.css";
import ToDoWrapper from "./Components/Todo/Wrapper";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="lead">Todo App</h1>
        <ToDoWrapper/>
      </div>
    </div>
  );
}

export default App;
