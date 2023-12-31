import { useState } from "react";

const formFields = {
    "username":{
        "type": "text",
        "label": "What is your name?",
        "placeholder": "John Doe",
    },
    "email":{
        "type": "email",
        "label": "What is your email?",
        "placeholder": "johndoe@example.com",
    },
    "phone":{
        "type": "tel",
        "label": "What is your phone number?",
        "placeholder": "555-555-5555",
    },
    "password":{
        "type": "password",
        "label": "What is your password?",
        "placeholder": "Enter your password",
    },
    "color":{
        "type": "color",
        "label": "What is your favorite color?",
        "placeholder": "Red",
    },
};


const mapObjectToArray = (obj) => {
    return Object.keys(obj).map((key)=>({name: key, ...obj[key]}))
}

const transformObject = (obj) => {
    return Object.keys(obj).reduce((acc, cur)=>{
        acc[cur] = {
            ...obj[cur],
            value: '',
        };
        return acc;
    }, {})
}

const DynamicForm = () => {

    // const formData = mapObjectToArray(formFields);
    const [formState, setFormState] = useState(transformObject(formFields));
    const formData = mapObjectToArray(formState);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]:{
                ...formState[event.target.name],
                value: event.target.value,
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            {formData.map((item, index)=>(
                <div key={index}>
                    <label>{item.label}</label>
                    <input type={item.type} name={item.name} placeholder={item.placeholder} value={item.value} onChange={handleChange}/>
                </div>
            ))}
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}


export default DynamicForm;