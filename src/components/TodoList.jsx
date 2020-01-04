import React from 'react';
import './TodoList.css';
import Todo from './Todo';

function TodoList() {

  return (
      <div className="todoList">
          <Todo name="1"/>
          <Todo name="2"/>
          <Todo name="3"/>
          <Todo name="4"/>
          <Todo name="5"/>
          <Todo name="6"/>
      </div>
  );
}

export default TodoList;