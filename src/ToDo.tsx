import React, {useState} from 'react';

function CreateToDoList(){

    const [tasks, setTasks] = useState(["Task 1", "Task 2"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event : any){
        setNewTask(event.target.value)
    }

    function addTask(){

        if ( newTask.trim() !== ""){
            setTasks(task => [...task , newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index: number) {
        const updatedTasks = tasks.filter((_ , i) => i !== index);
        setTasks(updatedTasks);
    }

    function compltedTask(){
        
    }
    

    return (
        <div>
            <h2 className='to-do-list-header'>To-Do-List</h2>

            <input type = "text" className = "inputTask" placeholder = 'Enter Your Task' value = {newTask} onChange = { handleInputChange }/>
            <button className = 'addTask' onClick={() => addTask()}> Add </button>

            <ol>
                {tasks.map((task, index) => {
                    return (
                        <li key = {index} >
                            <span> {task} </span>
                            <button className = 'deleteTask' onClick = {() => deleteTask(index) }> Delete </button>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default CreateToDoList;