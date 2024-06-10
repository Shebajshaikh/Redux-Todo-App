import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete, updateTodo } from '../slices/todoSlice';

function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateTodo({ id: todo.id, text: newText }));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
         
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch(toggleComplete(todo.id))}>
            {todo.completed ? 'Undo' : 'Complete'
          }</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Todo;

