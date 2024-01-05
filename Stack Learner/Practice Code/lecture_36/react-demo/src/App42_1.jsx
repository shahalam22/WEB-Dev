import useCounter from "./hooks/useCounter";

const CountController = ({counter, handleInc, handleDec}) => {
    return (
        <div>
            <button onClick={handleInc}>+</button>
            <span>{counter}</span>
            <button onClick={handleDec}>-</button>
        </div>
    )
}

const App = () => {
    const {counter: counter1, handleInc: handleInc1, handleDec: handleDec1} = useCounter({initial: 1, lowerBound: -10});
    const {counter: counter2, handleInc: handleInc2, handleDec: handleDec2} = useCounter({initial: 5, lowerBound: 5, upperBound: 15});
    const counter3 = useCounter({initial: 10});
    return (
        <div>
            <h1>App</h1>
            <CountController counter={counter1} handleInc={handleInc1} handleDec={handleDec1}/>
            <CountController counter={counter2} handleInc={handleInc2} handleDec={handleDec2}/>
            <CountController counter={counter3.counter} handleInc={counter3.handleInc} handleDec={counter3.handleDec}/>
        </div>
    )
}

export default App;