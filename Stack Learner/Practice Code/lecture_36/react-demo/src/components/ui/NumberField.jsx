
// required props gula na dile error show korbe console e  jodi ei PropTypes use kori. Otherwise props na dile kaj korbe na abar error o show korbe na
import PropTypes from 'prop-types';

const NumberField = ({value, onChange, name}) => {

    const style = {
        padding: '0.25rem',
        borderRadius: '0.1rem',
        border: '1px solid gray',
        background: '#fff',
        outline: 'none'
    }       

    return (
        <input
            style={style} 
            type="number" 
            value={value}
            onChange={onChange}
            name={name}
        />
    )
}

NumberField.propTypes = {
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default NumberField;