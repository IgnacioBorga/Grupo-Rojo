import React, {useState} from "react";
import TodoForm from "./form";
import ToDo from "./toDo";

/**
 * Creates, eliminates and mark as finshed the tasks.
 * 
 * @returns 
 */
function TodoList(){
    type taskTipe = {id:string, text:string, completed:boolean};

    const [list, setList] = useState<taskTipe[]>([]);

    const addTask = (task: taskTipe) => {
        if (task.text.trim()){
            task.text = task.text.trim();
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
            <TodoForm 
            onSubmit = {addTask} />
            <div className="todo-list-container">
                {
                    list.map((task: taskTipe) =>
                        <ToDo 
                            key= {task.id}
                            id = {task.id}
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