import PropTypes from "prop-types";
import NumberField from "../ui/NumberField";

const InputSection = ({inputs, handleInputFields}) => {
    return (
        <div style={{
            width: '100%',
            padding: '0.5rem 1rem',
            backgroundColor: '#efefef',
            borderRadius: '0.10rem',
        }}>
            <h3 style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                textAlign: 'center',
                fontSize: '1.5rem',
                color: '#212121',
                margin: '1rem 0',
            }}>Inputs</h3>
            <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'space-around',
            }}>
                <NumberField name="a" value={inputs.a} onChange={handleInputFields}/>
                <NumberField name="b" value={inputs.b} onChange={handleInputFields}/>
            </div>
        </div>
    )
}

InputSection.propTypes = {
    inputs: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
    }).isRequired,
    handleInputFields: PropTypes.func.isRequired,
}

export default InputSection;