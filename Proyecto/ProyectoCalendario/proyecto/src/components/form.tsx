import React, {BaseSyntheticEvent, useState} from "react";
import "../styles/todoForm.css";



function TodoForm(props: any) {
    const { v4: uuidv4 } = require('uuid');
    const [input, setInput] = useState("");

    const listenTask = (e: BaseSyntheticEvent) => {
        setInput(e.target.value);
    }

    const sendTask = (e: BaseSyntheticEvent)  => {
        e.preventDefault();
        
        const newTask = {
            id: uuidv4(), 
            text: input,
            completed: false
        }
        
        props.onSubmit(newTask);
    }

    return(
        <form 
        action="" className="todo-form"
        onSubmit={sendTask}>
        
            <input 
                type="text" 
                className="todo-input"
                placeholder="Nueva tarea"
                name="text"
                onChange={listenTask}
            />
            <button className="todo-button">Agregar Tarea</button>
        </form>
    );
}

export default TodoForm;