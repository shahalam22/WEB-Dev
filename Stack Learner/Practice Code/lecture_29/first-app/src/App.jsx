function Button({text}){
    return (
        <button 
            style={{
                padding: '0.5rem 1rem', 
                border: 'none', 
                background: 'black', 
                color: 'white', 
                cursor: 'pointer', 
                borderRadius: '0.25rem',
                margin: '0.25rem',
            }}
        >
            {text}
        </button>
    );
}


function App(){
    return (
        <div>
            <h1>Hello React</h1>
            <Button text='Button A'/>
            <Button text='Button B'/>
            <Button text='Button C'/>
        </div>
    )
}

export default App;