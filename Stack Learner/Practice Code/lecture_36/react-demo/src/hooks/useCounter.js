import { useState } from "react";

const useCounter = ({
    initial = 0,
    lowerBound = 0,
    upperBound = 10
}) => {
    const [counter, setCounter] = useState(initial);

    const handleInc = () => {
        if(counter < upperBound){
            setCounter(counter + 1);
        }
        console.log(counter);
    };

    const handleDec = () => {
        if(counter > lowerBound){
            setCounter(counter - 1);
        }
        console.log(counter);
    };

    return {
        counter, 
        handleInc,
        handleDec
    };
};

export default useCounter;