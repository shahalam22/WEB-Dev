import {useState} from 'react';
import shortid from 'shortid';
import Layout31 from "../components/layout/Layout31";
import CreateNewTask from '../components/tasks/CreateNewTask';
import ShowTasks from '../components/tasks/ShowTasks';

const Task = () => {

    const [tasks, setTask] = useState([]);
    const [visibility, setVisibility] = useState('all');
    // const [visibleTasks, setVisibleTasks] = useState([]);

    const filteredTasks = tasks.filter((task) =>{
        if(visibility==='complete'){
            return task.isCompleted;
        }else if(visibility === 'incomplete'){
            return !task.isCompleted;
        }else{
            return true;
        }
    })

    const filterChange = (newFilter) => {
        setVisibility(newFilter);
    }

    const addNewTask = (text) => {
        const task = {
            text,
            isCompleted: false,
            createdAt: new Date(),
            id: shortid.generate(),
        }

        setTask([...tasks, task]);
    }

    const updateTask = (id) => {
        for (let index = 0; index < tasks.length; index++) {
            if(tasks[index].id===id){
                const editedText = prompt('Edit the task -');
                tasks[index].text = editedText;
            }
        }

        setTask([...tasks]);
    }

    const updateByDone = (id) => {
        for (let index = 0; index < tasks.length; index++) {
            if(tasks[index].id===id){
                if(tasks[index].isCompleted){
                    tasks[index].isCompleted = false;
                }else{
                    tasks[index].isCompleted = true;
                }
            }
        }

        setTask([...tasks]);
    }

    const deleteTask = (id) => {
        for (let index = 0; index < tasks.length; index++) {
            if(tasks[index].id===id){
                tasks.splice(index, 1);
            }
        }

        setTask([...tasks]);
    }

    return(
        <Layout31>
            <h1>Tasks :</h1>
            <CreateNewTask addNewTask={addNewTask}/>
            <br />
            <div>
                <button onClick={() => filterChange('all')}>All tasks</button>
                <button onClick={() => filterChange('complete')}>Completed tasks</button>
                <button onClick={() => filterChange('incomplete')}>Incompleted tasks</button>
            </div>
            <ShowTasks tasks={filteredTasks} visibility={visibility} updateTask={updateTask} deleteTask={deleteTask} updateByDone={updateByDone}/>
        </Layout31>
    )
}


export default Task;