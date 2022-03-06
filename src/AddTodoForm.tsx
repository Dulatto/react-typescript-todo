import React, {useState} from 'react';

interface Props {
    addTodo: AddTodo;
  }

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = useState('');

    return (
        <form className='col-4 ms-2 mt-3 '>
            <div className='input-group'>
        <input 
          type="text" 
          className="form-control"
          value={text}
           onChange={(e) => {
          setText(e.target.value);
        }} />
        <button className='btn btn-sm btn-secondary'
        type="submit"
        disabled={text === ''}
        onClick={(e) => {
            e.preventDefault();
            addTodo(text);
            setText('');
          }}>Add Todo</button>
          </div>
      </form>
    );
};

