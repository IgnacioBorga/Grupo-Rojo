import React, {BaseSyntheticEvent, useState} from "react";
import "../styles/todoForm.css";



function TodoForm(props: any) {
    const { v4: uuidv4 } = require('uuid');
    const [ input, setInput ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ date, setDate ] = useState("");

    const listenTask = (e: BaseSyntheticEvent) => {
        setInput(e.target.value);
    }

    const listenTitle = (e:BaseSyntheticEvent)=>{
        setTitle(e.target.value);
    }
    
    const listenDate = (e:BaseSyntheticEvent)=>{
        setDate(e.target.value);
        console.log(e.target.value)
    }
    
    /**
     * Return the current date as a string
     * @returns finalDate: string
     */
    function today(){
        const today = new Date();
        const year:string = today.getFullYear().toString();
        const day:number = today.getDate();
        const month:number = today.getMonth() + 1; //getMonth() returns a number between 0 and 11
        let newMonth:string;
        let newDay:string;
        
        if (month < 10)
         { newMonth = "0" + month}
        else
        { newMonth = month.toString()};
        if (day < 10)
         { newDay = "0" + day}
        else
        { newDay = day.toString()};
        const finalDate = year+'-'+newMonth+'-'+newDay;
        return finalDate;
    }
    

    const sendTask = (e: BaseSyntheticEvent)  => {
        e.preventDefault();
        
        const newTask = {
            id: uuidv4(), 
            title: title,
            date: date,
            text: input,
            completed: false
        }
        if (title !== "" && input !== "" && date !==""){
        props.onSubmit(newTask);}
    }

    return(
        <form 
        action="" className="todo-form"
        onSubmit={sendTask}>
            <input 
                type="text" 
                className="todo-input" 
                placeholder="Titulo" 
                name="title" 
                onChange={listenTitle} />
            <input 
                type="date" 
                className="todo-input" 
                placeholder="Fecha" 
                min = {today()}
                name="date" 
                onChange={listenDate} />
            <textarea
                className="todo-input todo-textarea"
                placeholder="Nueva tarea"
                name="text"
                onChange={listenTask}
            />
            <button className="todo-button">Agregar Tarea</button>
        </form>
    );
}

export default TodoForm;