import React from 'react';


interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({todo, toggleTodo}) => {
    return (
        <li style={{ border: '1px solid rgba(0, 0, 0, 0.05)' }}>
             <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
            <input 
               type="checkbox" 
               checked={todo.complete}  
               onClick={() => {
                  toggleTodo(todo);
          }} /> {todo.text}
      </label>
        </li>
        
    );
};

 