import React, {Fragment} from 'react';
import './App.css';

//import component

import InputTodo from './component/InputTodo';
import ListTodos from './component/ListTodo';

function App() {
  return (
    <Fragment>
      <InputTodo />
      <ListTodos />
    </Fragment>
  );
}

export default App;
