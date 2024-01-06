import useForm from "../hooks/useForm";

const App = () => {
    const{formState} = useForm({
        init:{
            name: 'Mohammad Anwarul',
            email: 'mdanwarul@gmail.com',
            password: 'anwarul123',
        }
    });

    // console.log(formState);

    return (
        <div>
            <h1>App</h1>
        </div>
    )
}

export default App;