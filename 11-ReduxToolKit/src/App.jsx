import "./App.css";
import { AddTodo } from "./components/AddTodo";
import Todos from "./components/Todos";
function App() {
  return (
    <>
      <h1 className="decoration-solid text-xl	font-serif text-amber-600">
        Learn about Redux ToolKit
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
