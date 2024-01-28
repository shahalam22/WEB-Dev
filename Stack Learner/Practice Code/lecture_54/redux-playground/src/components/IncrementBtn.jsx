// // using REDUX
// import { increment, addHistory, INCREMENT } from "../store";
// import { useDispatch } from "react-redux";

// const IncrementBtn = () => {
//     const dispatch = useDispatch();

//     const handleClick = () => {
//         dispatch(increment(1));
//         dispatch(addHistory({action: INCREMENT, count: 1}));
//     }

//     return (
//         <button onClick={handleClick}>Increment</button>
//     )
// }

// export default IncrementBtn;


// using EASY-PEASY
import { useStoreActions } from "easy-peasy";

const IncrementBtn = () => {
    const { count, history } = useStoreActions(actions => actions);
    const handleClick = () => {
        count.increment(1);
        history.addHistory({action: 'INCREMENT', count: 1});
    }

    return (
        <button onClick={handleClick}>Increment</button>
    )
}

export default IncrementBtn;