import { useState } from 'react';
import './App.css';
import { TodoForm } from "./components/TodoForm";
import { TodoList } from './components/TodoList'

function App() {
  // move App to the /pages folder
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const toggleComplete: ToggleComplete = selectedTodo => {
    // wrap all handlers with useCallback
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete }
      }
      return todo
    });
    setTodos(updatedTodos)
  };

  const addTodo: AddTodo = newTodo => {
    if (newTodo !== "") {
      // if (newTodo)
      setTodos([...todos, { text: newTodo, complete: false }])
    }
  };

  const removeTodo: RemoveTodo = todoToRemove => {
    // return type is not needed
    let updatedTodos: Array<Todo> = todos.filter(todo => todo.text != todoToRemove.text);
    // use === and !== instead of == and !=
    setTodos(updatedTodos)
  }

  const editTodo: EditTodo = todoToEdit => {
    let todoToUpdateIndex: number = todos.findIndex(todo => todo.text == todoToEdit.text);
    console.log(todoToUpdateIndex)
  }

  return (
    <div className="todo-app">
      <header>
        <h1>
        Todo List
        </h1>
      </header>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete} onRemoveTodo={removeTodo} editTodo={editTodo}/>
    </div>
  );
};

export default App