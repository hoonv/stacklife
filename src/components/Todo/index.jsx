import React from 'react';
import './style.css';
import axios from 'axios'
function Todo(props) {
  function updateDay(todo) {
    console.log(todo.sum);
    axios.put('http://localhost:8000/todos/'+todo.id+'/', {
      name : todo.name,
      unit : todo.unit,
      sum : todo.sum + todo.unit,
      startDate : todo.startDate,
    })
    .then( res => {
      window.location.reload()
    })
  }
  return (
      <div className="todo">
        <div className="stackTime">
          누적량 : {props.todo.sum}
        </div>
        <div className="plan">
    
          계획 : {props.todo.name}
          <br/>
          하루 : {props.todo.unit}
        </div>
        <div className="todo-footer">
          {/* <input className="inputNumber" type="text" name="quantity"/> */}
          <button className="submitBtn"  onClick={(e) => { updateDay(props.todo) }}>제출</button>
        </div>
      </div>
  );
}

export default Todo;