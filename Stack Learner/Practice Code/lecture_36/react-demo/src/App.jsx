import styled from 'styled-components';

const fontSizes = {
    sm: '0.8rem',
    md: '1rem',
    lg: '1.2rem'
}

const BaseButton = styled.button`
    border: none;
    border-radius: 0.3rem;
    outline: none;
    // background: ${(props)=> props.dark? 'white':'black'};
    // color: ${(props)=> props.dark? 'black':'white'};
    font-size: ${(props)=> fontSizes[props.size] ?? '1rem'};
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 0.5rem 1rem;
    cursor: pointer;    
`;

const PrimaryButton = styled(BaseButton)`
    background: red;
    color: white;
`;

const App = () => {
    return (
        <div>
            <h1>Styled Component</h1>
            <BaseButton size='md'>I am a button</BaseButton>
            <span> </span>
            <PrimaryButton size='md'>I am primary button</PrimaryButton>
        </div>
    )
}

export default App;