const InputGroup = (props) => {

    const label = props.label;
    const type = props.type;
    const id = props.id;

    return (
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.5rem', 
            marginBottom: '1rem', 
            marginTop: '1rem',
    }}>
        <label htmlFor={id} style={{
                fontFamily: 'Arial', 
                fontSize: '1rem', 
                fontWeight: 'bold',
                color: '424242'
            }}>
                {label}    
            </label>
            <input type={type} id={id} style={{
                padding:'0.5rem 1 rem',
                outline: 'none',
                border: '1px solid #ddd',
                borderRadius: '0.15rem',
                fontFamily: 'Arial',
                fontSize: '0.9rem',
                color: '666',
            }}/>
        </div>
    )
}

export default InputGroup;