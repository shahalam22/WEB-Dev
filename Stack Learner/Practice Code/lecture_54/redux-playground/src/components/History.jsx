import { useSelector, useDispatch } from 'react-redux';
import { clearHistory } from '../store';
 
const History = () => {
    const history = useSelector(state => state.history)
    const dispatch = useDispatch();

    return (
        <div>
            <p>Histories <button onClick={() => dispatch(clearHistory())}>Clear History</button></p>
            <ul>
                {' '}
                {history.map(item => (
                    <li key={item.id}>{item.action} - {item.count} - {item.time}</li>
                ))}
            </ul>
        </div>
    )
}

export default History;