import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({ text: action.payload, completed: false, id: Date.now() });
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        toggleComplete: (state, action) => {
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            });
        },
        updateTodo: (state, action) => {
            return state.map(todo => {
              if (todo.id === action.payload.id) {
                return {
                  ...todo,
                  text: action.payload.text
                };
              }
              return todo;
            });
          },
          
    },
});

export const { addTodo, deleteTodo, toggleComplete, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
