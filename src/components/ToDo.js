import React from "react";

function ToDo({text, a, todos, SetTodos}){

    function DeleteToDo(){
       SetTodos(todos.filter(todo=> todo.id!==a.id))
       
    }
    return(
        <div className="todo" >
   <li>{text}</li>
   <button onClick={DeleteToDo}>Delete</button>
   </div>
    )
}

export default ToDo;