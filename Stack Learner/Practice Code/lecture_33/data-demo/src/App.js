import React, {useState} from 'react';
import DynamicForm from './components/DynamicForm';

const App = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        phone: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <div>
            <h1>App</h1>
            {/* <form onSubmit={handleSubmit}>
                <div>
                    <label>What's your name?</label>
                    <input type="text" name="username" placeholder="John Doe" value={formState.name} onChange={handleChange}/>
                </div>
                <div>
                    <label>What's your email?</label>
                    <input type="email" name="email" placeholder="test@example.com" value={formState.email} onChange={handleChange}/>
                </div>
                <div>
                    <label>What's your phone number?</label>
                    <input type="tel" name="phone" placeholder="+8801869230211" value={formState.phone} onChange={handleChange}/>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form> */}

            {/* Dynamic Form */}
            <DynamicForm/>
        </div>
    )
}


export default App;