import styled from "styled-components";
import TextInput from "../../ui/inputs/TextInput"
import Label from "../../ui/inputs/Label";

const Container = styled.div`
    width: 94.5%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const ErrorMessage = styled.div`
    font-size: 0.8rem;
    color: red;
    font-family: Arial;
`

export const InputGroups = ({label, name, value, placeholder, error, onChange, onFocus, onBlur}) => {
  return (
    <Container>
        <Label htmlFor = {name}>{label}</Label>
        <TextInput name={name} id={name} placeholder={placeholder} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} error={error}/>
        {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
}


export default InputGroups;