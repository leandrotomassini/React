import React from "react";

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateButton } from './CreateButton';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';

// import './App.css';
const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorrar con la llorona', completed: false },
]

function App(props) {
  return (
    <React.Fragment>

      <TodoCounter />,
      <TodoSearch />

      <TodoList>
        {
          todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} />
          ))
        }
      </TodoList>

      <CreateButton />

    </React.Fragment>
  );
}

export default App;
