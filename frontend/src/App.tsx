import React from 'react';
import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  )
}

export default App;
