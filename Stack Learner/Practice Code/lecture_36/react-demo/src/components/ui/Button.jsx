import PropStyle from 'prop-types';

const Button = ({text, onClick, disabled, customStyle}) => {
    
    const disabledStyle = {
        backgroundColor: '#999',
        color: '#333',
        cursor: 'default',
    };

    const style = {
        padding: '0.25rem 1rem',
        // margin: '0.25rem',
        backgroundColor: '#ddd',
        color: '#212121',
        borderRadius: '0.10rem',
        cursor: 'pointer',
        border: 'none',
        ...customStyle,
        ...(disabled && disabledStyle),
    }

    return (
        <button style={style} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropStyle.string.isRequired,
    onClick: PropStyle.func.isRequired,
    disabled: PropStyle.bool,
    customStyle: PropStyle.object,
}

Button.defaultProps = {
    disabled: false,
    customStyle: {},
}

export default Button;