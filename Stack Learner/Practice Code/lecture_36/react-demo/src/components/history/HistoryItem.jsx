import PropTypes from 'prop-types';

const HistoryItem = ({item, disabled, handleRestore}) => {
    return (
        <li key={item.id}>
            <p>Operation: {item.inputs.a} {item.ops} {item.inputs.b}, Result: {item.result}</p>
            <small>{item.date.toLocaleDateString()}{` @ `}{item.date.toLocaleTimeString()}</small><br />
            <button onClick={()=>handleRestore(item.id)} disabled={disabled}>Restore</button>
        </li>
    )
}

HistoryItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        inputs: PropTypes.shape({
            a: PropTypes.number.isRequired,
            b: PropTypes.number.isRequired,
        }).isRequired,
        ops: PropTypes.string.isRequired,
        result: PropTypes.number.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
    }).isRequired,
    disabled: PropTypes.bool.isRequired,
    handleRestore: PropTypes.func.isRequired,
}

HistoryItem.defaultProps = {
    disabled: false,
}

export default HistoryItem;