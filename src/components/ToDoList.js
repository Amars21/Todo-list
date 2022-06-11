import React from "react";
import ToDo from "./ToDo";


function ToDoList({todos,SetTodos}){

    return (

        <div className="list">
            
            <ul>
                {todos.map((a) =>(
                   <ToDo text={a.text} todos={todos} SetTodos={SetTodos} a={a}  />
                ))}
            </ul>
        </div>

    )
}

export default ToDoList;