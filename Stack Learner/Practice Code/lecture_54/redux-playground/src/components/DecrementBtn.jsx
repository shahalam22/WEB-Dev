// // using REDUX
// import { decrement, addHistory, DECREMENT } from "../store";
// import { useDispatch } from "react-redux";

// const DecrementBtn = () => {
//     const dispatch = useDispatch();

//     const handleClick = () => {
//         dispatch(decrement(1));
//         dispatch(addHistory({action: DECREMENT, count: 1}));
//     }

//     return (
//         <button onClick={handleClick}>Decrement</button>
//     )
// }

// export default DecrementBtn;


// using EASY-PEASY
import { useStoreActions } from "easy-peasy";

const DecrementBtn = () => {
    const { count, history } = useStoreActions(actions => actions);
    const handleClick = () => {
        count.decrement(1);
        history.addHistory({action: "DECREMENT", count: 1});
    }

    return (
        <button onClick={handleClick}>Decrement</button>
    )
}

export default DecrementBtn;