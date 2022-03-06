import React from 'react';


interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({todo, toggleTodo}) => {
    return (
        <li style={{ border: '2px solid lightblue', padding: '2px', marginTop: '1px'}}>
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

 