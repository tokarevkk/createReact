import React from "react";
import { TodoListItem } from '../TodoList_Item/TodoListitem';

interface TodoListProps {
  todos: Array<Todo>
  toggleComplete: ToggleComplete
  onRemoveTodo: RemoveTodo
  editTodo: EditTodo
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, onRemoveTodo, editTodo }) => {
  return (
    <ul className="items">
     {todos.map(todo => (
       <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
          onRemoveTodo={onRemoveTodo}
          editTodo={editTodo}
        />
     ))}
    </ul>
  );
};

