import { useState } from "react";
import InputGroups from "../components/shared/forms/InputGroups";
import Button from "../components/ui/buttons/Button";
import { set } from "mongoose";

const init = {
    title: '',
    bio: '',
    skills: '',
};

const init_2 ={
    title: {
        value: '',
        error: '',
        focus: false,
    },
    bio: {
        value: '',
        error: '',
        focus: false,
    },
    skills: {
        value: '',
        error: '',
        focus: false,
    },
}

const App = () => {
    const [values, setValues] = useState({...init});
    const [errors, setErrors] = useState({...init});
    const [focuses, setFocuses] = useState({
        title: false,
        bio: false,
        skills: false,
    });

    const handleChange = (e) => {
        setValues((prev)=>({
            ...prev,
            [e.target.name]: e.target.value,
        }));

        const key = e.target.name;
        const {errors} = checkValidity(values);

        if(!errors[key]){
            setErrors((prev)=>({
                ...prev,
                [key]: '',
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {errors, isValid} = checkValidity(values);
        if(isValid) {
            console.log(values);
            setErrors({...init});
        }else{
            setErrors({...errors});
        }
        console.log(values);
    }

    const handleFocus = (e) => {
        setFocuses((prev)=>({
            ...prev,
            [e.target.name]: true,
        }));
    }

    const handleBlur = (e) => {
        const key = e.target.name;
        const {isValid, errors} = checkValidity(values);

        if(errors[key] && focuses[key]){
            setErrors((prev)=>({
                ...prev,
                [key]: errors[key],
            }));
        }else{
            setErrors((prev)=>({
                ...prev,
                [key]: '',
            }));
        }
    };

    const checkValidity = (values) => {
        const errors = {};
        const {title, bio, skills} = values;
        if(!title) errors.title = 'Title is required';
        if(!bio) errors.bio = 'Bio is required';
        if(!skills) errors.skills = 'Skills is required';
        return {
            errors,
            isValid: Object.keys(errors).length === 0,
        };
    }

    return(
        <div>
            <h1>App</h1>
            <form onSubmit={handleSubmit}>
                <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                    <InputGroups 
                        value={values.title} 
                        label={'Title'} 
                        name={'title'} 
                        placeholder={'Software Engineer'} 
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        error={errors.title}
                    />
                    <InputGroups 
                        value={values.bio} 
                        label={'Bio'} 
                        name={'bio'} 
                        placeholder={'Hey there! I am Software Engineer'} 
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        error={errors.bio}
                    />
                    <InputGroups 
                        value={values.skills} 
                        label={'Skills'} 
                        name={'skills'} 
                        placeholder={'javascript, react'} 
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        error={errors.skills}
                    />
                    <Button type='submit'>Submit</Button>
                </div>    
            </form>      
        </div>
    )
}

export default App;