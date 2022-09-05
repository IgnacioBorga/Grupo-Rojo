import React, {useState} from "react";
import Form from "./EventCreationForm";
import ToDo from "./EventElement";

/**
 * Creates, eliminates and mark as finshed the tasks.
 * 
 * @returns 
 */
function TodoList(){
    type taskTipe = {id:string, title:string, date: Date, text:string, completed:boolean};

    const [list, setList] = useState<taskTipe[]>([]);

    const addTask = (task: taskTipe) => {
        if (task.title.trim()){
            task.text = task.text.trim();
            task.title = task.title.trim();
            const updatedList = [ task, ...list]
            setList(updatedList)
            
        }
    }

    const deleteTask = (id:string) =>{
        const updatedList = list.filter((task: taskTipe)=> task.id !== id);
        setList(updatedList)
    }

    const completedTask = (id: string) =>{
        const updatedList = list.map((task: taskTipe) => {
            if (task.id === id ){
                task.completed = !task.completed;
            }
            return task
        }
        )
        setList(updatedList)
    }

    return(
        <>
            <Form 
            onSubmit = {addTask} />
            <div className="todo-list-container">
                {
                    list.map((task: taskTipe) =>
                        <ToDo 
                            key= {task.id}
                            id = {task.id}
                            title = {task.title}
                            date = {task.date}
                            text = {task.text}
                            completed = {task.completed}
                            deleteTask = {deleteTask}
                            completeTask = {completedTask}
                        />)
                }
            </div>

        </>
    );
}

export default TodoList;