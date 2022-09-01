import React from "react";
import "../styles/toDo.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function ToDo({ id, text, completed, completeTask, deleteTask }:{id:string, text:string, completed:boolean, completeTask(id:string):void, deleteTask(id:string):void}) {
// function ToDo({ id, text, completed }:{id:string, text:string, completed:boolean}) {
return (
        <div className={completed ? "todo-container todo-completed":"todo-container"}>
            <div
                className="todo-text" 
                onClick={() => completeTask(id)}>
                
                { text }
            </div>
            <div 
                className="todo-container-icons"
                onClick={() => deleteTask(id)}>

                <AiOutlineCloseCircle className="todo-icon" />
            </div>
        </div>
    );
}

export default ToDo;