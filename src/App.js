import React from 'react';
import './App.css';
import {useState} from 'react';
import TaskList from './components/taskList'

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [showList, setShowList] = useState(false);
  

  const addItem = () => {
    const toDoObject = {name:input, completed:true}
    if (input !== "") {
      setList([...list, toDoObject]);
      setInput("");
    } else {
      alert("Please enter a task");
    }
  };

  const deleteItem = (index) => {
    const updateList = [...list];
    updateList.splice(index, 1);
    setList(updateList);
  };

  const showBtn = () =>{
    
    if(list.length === 0){
      alert("No task added yet");
    }else{
      setShowList(!showList);
    }
  }


  return (
    <div className="container">
      <h1 className="header">To-Do List</h1>
      <center>
        <input
          className="inputs"
          type="text"
          placeholder="Enter Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </center>
      <br></br>
      <center>
        <div>
          <button className="addItem" onClick={addItem}>
            Add Task
          </button>
          <button className="showBtn" onClick={showBtn}>
            Show / Hide
          </button>
        </div>
      </center>
      <br></br>
      {showList && <TaskList List={list} deleteBtn={deleteItem}/>}
    </div>
  );
}

export default App;
