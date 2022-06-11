import React,{useEffect,useRef} from "react";
function ToDoForm({inputText, setInputText, todos, SetTodos}){

    

    const inputRef=useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    }

    )

    
function InputHandler(e){
    setInputText(e.target.value);

}

function SubmitionHandler(e){
    e.preventDefault();

    if(inputText.trim()==="") {
        setInputText(false);
       
    } 
    
    SetTodos([...todos, {
        text: inputText, id: Math.random()*10000
    }])
    setInputText("");
}


    return (
        <form className="todo-form" onSubmit={SubmitionHandler}>
            <input 
            onChange={InputHandler}
            className="todo-input" 
            type="text" 
            placeholder="Add todo"
            name="text" 
            value={inputText}
            ref={inputRef}
            >
            </input>
           

            <button className="todo-button"> Add todo</button>
            {!inputText && <p>Please enter a todo.</p>}

        </form>
        
    )
}

export default ToDoForm;