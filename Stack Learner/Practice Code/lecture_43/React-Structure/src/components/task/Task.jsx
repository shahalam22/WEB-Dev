import useForm from "../../hooks/useForm";

const init = {
    text: '',
    checked: false,
    group: 'home',
    priority: 'low',
}

const submitCB = ({values}) => {
    alert(JSON.stringify(values));
}

const Task = () => {
    const {formState, handleChange, handleSubmit, handleFocused, handleBlur} = useForm({init, validate : true});

    return (
        <div>
            <h1>Tasks</h1>
            <form onSubmit={(e) => handleSubmit(e, submitCB)}>
                <input 
                    type="checkbox" 
                    name='checked' 
                    checked={formState.checked.value} 
                    onChange={handleChange}
                    onFocus={handleFocused}
                    onBlur={handleBlur}
                />
                <input 
                    type="text" 
                    name='text' 
                    value={formState.text.value} 
                    onChange={handleChange}
                    onFocus={handleFocused}
                    onBlur={handleBlur}
                />
                <button>Submit</button>
                <select name="group" value={formState.group.value} onChange={handleChange}>
                    <option value="home">Home</option>
                    <option value="office">Office</option>
                </select>
                <input type="radio" name="priority" value={'low'} onChange={handleChange}/>Low
                <input type="radio" name="priority" value={'medium'} onChange={handleChange}/>Medium
                <input type="radio" name="priority" value={'high'} onChange={handleChange}/>High
            </form>
        </div>
    )
}

export default Task;