import { useSelector } from 'react-redux';


const Count = () => {
    const count = useSelector(state => state.count);
    

    
    return (
        <div>
            <h1>Conter: {count}</h1>
        </div>
    )
}

export default Count;