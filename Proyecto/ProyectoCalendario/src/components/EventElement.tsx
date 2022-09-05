import React from "react";
import "../styles/toDo.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function ToDo({ id, title, date, text, completed, completeTask, deleteTask }:{
    id:string, 
    title:string, 
    date:Date, 
    text:string, 
    completed:boolean, 
    completeTask(id:string):void, 
    deleteTask(id:string):void}) {

        return (
            <div className={completed ? "todo-container todo-completed":"todo-container"}>
                <div
                    className="todo-text" 
                    onClick={() => completeTask(id)}>
                    
                    {title}
                    {text}
                    

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