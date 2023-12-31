const ShowTasks = (props) => {
    return (
        <div>
            <br />
            <h2>List of Tasks: </h2>
            <br />
            {
                props.tasks.length > 0 ? (
                    <div>
                        <p>Showing {props.visibility?props.visibility:"all"} tasks.</p>
                        <br />
                        {
                            props.tasks.map((task) => (
                                <div key={task.id}>
                                    <input 
                                        type="checkbox" 
                                        name={task.id} 
                                        id={task.id} 
                                        value={task.text}
                                        checked={task.isCompleted}
                                        onClick={()=> {props.updateByDone(task.id)}}
                                        />
                                    <label htmlFor={task.id}> {task.text}</label>
                                    <button
                                        onClick={()=>{props.updateTask(task.id)}}
                                    >Edit</button>
                                    <button
                                        onClick={()=>{props.deleteTask(task.id)}}
                                    >Delete</button>
                                </div>
                                // <li key={task.id}>{task.text}</li>
                            ))
                        }
                    </div>
                ) : (
                    <p>No task found</p>
                )
            }
            <br />
        </div>
    );
};

export default ShowTasks;