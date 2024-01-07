import useForm from "../hooks/useForm";
import InputGroups from "../components/shared/forms/InputGroups";
import Button from "../components/ui/buttons/Button";
import Task from "../components/task/Task";

const init = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

const validate = (values) => {
    const errors = {};

    if(!values.firstName){
        errors.firstName = 'First name is required';
    }

    if(!values.lastName){
        errors.lastName = 'Last name is required';
    }
    
    if(!values.email){
        errors.email = 'Email is required';
    }
    
    if(!values.password){
        errors.password = 'Password is required';
    }

    return errors;
}

const App = () => {
    const{formState, handleBlur, handleChange, handleFocused, handleSubmit, clear} = useForm({init, validate});

    // console.log(formState);

    const cb = ({hasError, values, errors}) => {
        if(hasError){
            alert('[ERROR]' + JSON.stringify(errors));
        }else{
            alert('[SUCCESS]' + JSON.stringify(values));
        }
    };

    return (
        <div>
            <h1>My custom Hook App</h1>
            <form onSubmit={(e) => handleSubmit(e, cb)}>
                <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                    <InputGroups 
                        value={formState.firstName.value} 
                        label={'First Name'} 
                        name={'firstName'} 
                        placeholder={'John'} 
                        onChange={handleChange}
                        onFocus={handleFocused}
                        onBlur={handleBlur}
                        error={formState.firstName.error}
                    />
                    <InputGroups 
                        value={formState.lastName.value} 
                        label={'Last Name'} 
                        name={'lastName'} 
                        placeholder={'Doe'} 
                        onChange={handleChange}
                        onFocus={handleFocused}
                        onBlur={handleBlur}
                        error={formState.lastName.error}
                    />
                    <InputGroups 
                        value={formState.email.value} 
                        label={'Email'} 
                        name={'email'} 
                        placeholder={'johndoe@gmail.com'} 
                        onChange={handleChange}
                        onFocus={handleFocused}
                        onBlur={handleBlur}
                        error={formState.email.error}
                    />
                    <InputGroups 
                        value={formState.password.value} 
                        label={'Password'} 
                        name={'password'} 
                        placeholder={'*****'} 
                        onChange={handleChange}
                        onFocus={handleFocused}
                        onBlur={handleBlur}
                        error={formState.password.error}
                    />
                </div>
                <Button type='reset' onClick={clear}>Clear</Button>
                <Button type='submit'>Submit</Button>
            </form>
            <br /><hr /><br />
            <Task/>
        </div>
    )
}

export default App;