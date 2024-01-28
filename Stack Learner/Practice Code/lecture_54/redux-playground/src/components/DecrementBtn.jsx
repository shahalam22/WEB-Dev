import { decrement, addHistory, DECREMENT } from "../store";
import { useDispatch } from "react-redux";

const DecrementBtn = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(decrement(1));
        dispatch(addHistory({action: DECREMENT, count: 1}));
    }

    return (
        <button onClick={handleClick}>Decrement</button>
    )
}

export default DecrementBtn;