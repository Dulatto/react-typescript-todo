import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({todos, toggleTodo}) => {
    return (
        <ul className="col-4 ms-2 mt-2">
        {todos.map((todo) => (
          <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    );
};

 