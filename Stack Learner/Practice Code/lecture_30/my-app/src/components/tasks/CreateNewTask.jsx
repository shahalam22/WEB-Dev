import { useState } from "react";

const CreateNewTask = ({addNewTask}) => {

    const [text, setText] = useState('');

    return(
        <div>
            <input type="text" 
            placeholder="Set your text here" 
            value={text} 
            onChange={(event) => 
                {
                    setText(event.target.value);
                }
            }/>
            <button onClick={() => 
                    {
                        if(text){
                            addNewTask(text);
                            setText('');
                        } else {
                            alert('Invalid Input');
                        }
                    }
                }>Create Task</button>
        </div>
    )

}

export default CreateNewTask; 