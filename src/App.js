
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import React,{useState} from 'react';




function App() {
const [inputText, setInputText]=useState("");
const [todos, SetTodos]= useState([]);
  
  return (
    <div className="App">

      <header>Enter todo</header>

      <ToDoForm inputText ={inputText} setInputText={setInputText} todos={todos} SetTodos={SetTodos} />
      <ToDoList todos={todos} SetTodos={SetTodos}   ></ToDoList>
     
     
      
    </div>
  );
}

export default App;
