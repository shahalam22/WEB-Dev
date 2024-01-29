import { Input } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'

const InputText = ({name, label, ...props}) => (
    <div>
        <label htmlFor={name}>{label} : </label>
        <input type="text" id={name} {...props}/>
    </div>
                
)

const App = () => {
    const { handleSubmit, formState: { errors, touchedFields }, reset, control } = useForm({reValidateMode: 'onSubmit', defaultValues: {
        name: 'John Doe',
        email: 'john.doe@email.com',
        age: 0,
    }})

    const onValid = (data, obj) => {
        console.log(data);
        console.log('OBJ: ', obj);
        reset();
    }

    const onInvalid = (data) => {
        console.log('Invalid', data);
    }

    return (
        <div>
            <h1>Hello World</h1>
            <form onSubmit={handleSubmit(onValid, onInvalid)}>
                <Controller name='name' control={control} render={({field}) => <Input {...field}/> }/>
                <Controller name='email' control={control} render={({field}) => <Input {...field}/> }/>
                <Controller name='age' control={control} render={({field}) => <Input {...field}/> }/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App;