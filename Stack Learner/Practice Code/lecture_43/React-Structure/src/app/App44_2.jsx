import { useState } from "react";
import InputGroups from "../components/shared/forms/InputGroups";
import Button from "../components/ui/buttons/Button";
import { deepClone } from "../utils/object-utils";

const init ={
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
};

const App = () => {

    const [state, setState] = useState({...init});
    const [hasError, setHasError] = useState(false);

    const mapStateToValues = (state) => {
        return Object.keys(state).reduce((acc, cur)=>{
            acc[cur] = state[cur].value;
            return acc;
        }, {})
    }

    const handleChange = (e) => {

        // // way 1 to handle change
        // const {name: key, value} = e.target;
        // setState((prev)=>({
        //     ...prev,
        //     [key]:{
        //         ...prev[key],
        //         value: value,
        //     }
        // }))

        // way 2 to handle change - recommended
        const {name: key, value} = e.target;
        const oldState = deepClone(state);
        const values = mapStateToValues(oldState);
        const {errors} = checkValidity(values);
        oldState[key].value = value;

        if(oldState[key].focus && errors[key]){
            oldState[key].error = errors[key];
        }else{
            oldState[key].error = '';
        }

        setState(oldState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const values = mapStateToValues(state);
        const {errors, isValid} = checkValidity(values);
        
        if(isValid){
            console.log(state);
        }else{
            const oldState = deepClone(state);
            Object.keys(errors).forEach((key)=>{
                oldState[key].error = errors[key];
            })

            setState(oldState);
        }
    }

    const handleFocus = (e) => {
        const {name: key} = e.target;
        const oldState = deepClone(state);
        oldState[key].focus = true;
        setState(oldState);
    }

    const handleBlur = (e) => {
        const key = e.target.name;
        const values = mapStateToValues(state);
        const {errors} = checkValidity(values);

        const oldState = deepClone(state);

        if(oldState[key].focus && errors[key]){
            oldState[key].error = errors[key];
        }else{
            oldState[key].error = '';
        }

        console.log(oldState[key].focus);

        setState(oldState);
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
                        value={state.title.value} 
                        label={'Title'} 
                        name={'title'} 
                        placeholder={'Software Engineer'} 
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        error={state.title.error}
                    />
                    <InputGroups 
                        value={state.bio.value} 
                        label={'Bio'} 
                        name={'bio'} 
                        placeholder={'Hey there! I am Software Engineer'} 
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        error={state.bio.error}
                    />
                    <InputGroups 
                        value={state.skills.value} 
                        label={'Skills'} 
                        name={'skills'} 
                        placeholder={'javascript, react'} 
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        error={state.skills.error}
                    />
                    <Button disabled={hasError} type='submit'>Submit</Button>
                </div>    
            </form>      
        </div>
    )
}

export default App;