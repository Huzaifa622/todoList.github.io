import React from 'react';
import './App.css';
import {useState} from "react";

function App() {
const [todoList, settodoList]=useState([])
const [newTask, setnewTask]=useState('')

const inputType = (e) =>{
setnewTask(e.target.value)
}
const addTodoList = ()=>{
  const task ={
    id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id +1,
    taskName : newTask,
    Completed : false,
  };
  settodoList([...todoList , task]);
}

const delTask = (id) =>{
let newList = todoList.filter((tasks) => tasks.id !== id )
settodoList(newList);

}

const completeTask =(id)=>{
settodoList(todoList.map((task)=>{
  if(task.id === id){
    return {...task , Completed : !task.Completed}
  }else{
    return task
  }


}));

};


  return (
    <div className="App">
      <div className='inputTask'>
        <input onChange={inputType}/>
        <button onClick={addTodoList}>Add Task</button>
      </div>
      <div className='todoList'>
         {todoList.map((tasks)=>{
       return ( 
       <div style={tasks.Completed === true ? {backgroundColor: 'red'} : {backgroundColor: 'white'}}>
        <h1>{tasks.taskName}</h1>
        <button onClick={()=> completeTask(tasks.id)}>Completed</button>
        <button onClick={()=> delTask(tasks.id)} >X</button>
        
        </div>
       );
       })}
       
      </div>
    </div>
  );
};



export default App;
