// // using REDUX
// import { useSelector } from 'react-redux';

// const Count = () => {
//     const count = useSelector(state => state.count);

    
//     return (
//         <div>
//             <h1>Conter: {count.value}</h1>
//         </div>
//     )
// }

// export default Count;


// using EASY-PEASY
import { useStoreState } from 'easy-peasy';

const Count = () => {
    const count = useStoreState(state => state.count);
    return (
        <div>
            <h1>Conter: {count.value}</h1>
        </div>
    )
}

export default Count;