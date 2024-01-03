import PropTypes from "prop-types";
import HistoryItem from "./HistoryItem";

const HistorySection = ({history, restoredHistory, handleRestore}) => {
    return (
        <div>
            <p>History</p>
            {history.length === 0 ? (
                <p>
                    <small>There is no history</small>
                </p>
            ):(
                <ul>
                    {history.map((item)=><HistoryItem key={item.id} disabled={restoredHistory === HistoryItem.id} item={item} handleRestore={handleRestore}/>)}
                </ul>
            )}
            
            
        </div>
    )
}

HistorySection.propTypes = {
    history: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        inputs: PropTypes.shape({
            a: PropTypes.number.isRequired,
            b: PropTypes.number.isRequired,
        }).isRequired,
        ops: PropTypes.string.isRequired,
        result: PropTypes.number.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
    })).isRequired,
    restoredHistory: PropTypes.number.isRequired,
    handleRestore: PropTypes.func.isRequired,
}

export default HistorySection;