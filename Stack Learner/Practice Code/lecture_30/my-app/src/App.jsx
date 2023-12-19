import InputGroup from "./components/input-group/InputGroup";
import Button from "./components/button/Button";

function App(){
    return (
        <div style={{
            width: '50%',
            margin: '2rem auto',
            padding: '2rem',
        }}>
            <div style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
            }}>
                <h2 style={{fontFamily: 'Arial', fontSize: '2rem', color: '222'}}>SIGN UP</h2>
                <p style={{fontFamily: 'Arial', fontSize: '1rem', color: '666'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <form >
                <div>
                    <InputGroup label='What is your name?' type='text' id='name'/>
                    <InputGroup label='What is your email' type='email' id='email'/>
                    <InputGroup label='Waht is your password?' type='password' id='password'/>
                </div>
                <div>
                    <Button text='Reset' type='reset' variant='warning' size='small'/>
                    <Button text='Submit' type='submit' variant='primary' size='medium'/>
                    <Button text='Cancel' type='button' variant='error' size='large'/>
                </div>
            </form>
        </div>
    )
}

export default App;