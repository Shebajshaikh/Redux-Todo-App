import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <Provider store={store}>
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
