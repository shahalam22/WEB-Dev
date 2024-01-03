/*
1. Handle user inputs
2. Handle operations
3. Handle history
4. Render history
5. Restore the history
*/

import { useState } from "react";
import NumberField from "./components/ui/NumberField";
import Button from "./components/ui/Button";
import InputSection from "./components/inputs/InputSection";
import OperationSection from "./components/operations/OperationSection";
import HistorySection from "./components/history/HistorySection";


const initialInputState = {
    a: 0,
    b: 0
};


// // id generator function

// this function will return a iterator over this function
function* generateID(){
    let id=0;
    while(true){
        yield id++;
    }
}

// now we have to invoke this function to get the iterator and store this into a variable.
// then simply generate the unique id by calling next() method on this iterator.
const getID = generateID();


const App = () => {
    const [inputState, setInputState] = useState({...initialInputState});
    const [result, setResult] = useState(0);
    const [history, setHistory] = useState([]);
    const [restoredHistory, setRestoredHistory] = useState('');

    // // solution 1 to handle input fields
    const handleInputFields = (e) => {
        setInputState({
            ...inputState,
            [e.target.name]: parseInt(e.target.value),
        });
        // console.log(inputState.a, inputState.b);
    };

    // // solution 2 to handle input fields
    // const handleFieldA = (e) => {
    //     setInputState({
    //         ...inputState,
    //         a: parseInt(e.target.value),
    //     });
    // }

    // const handleFieldB = (e) => {
    //     setInputState({
    //         ...inputState,
    //         b: parseInt(e.target.value),
    //     });
    // }

    // // solution 3 to handle input fields
    // const handleInputFields = (inp) => {
    //     setInputState({
    //         ...inputState,
    //         ...inp,
    //     });
    // }

    const handleClearOps = () => {
        setInputState({...initialInputState});
        setResult(0);
    }

    const handleArithmeticOps = (ops) => {

        // // checking whether input fields are empty or not
        if(!inputState.a || !inputState.b) {
            alert('Invalid Input');
            return;
        }

        // switch(ops) {
        //     case '+':
        //         return inputState.a + inputState.b;
        //     case '-':
        //         return inputState.a - inputState.b;
        //     case '*':
        //         return inputState.a * inputState.b;
        //     case '/':
        //         return inputState.a / inputState.b;
        //     default:
        //         return 0;
        // }

        
        // dynamic function create korar karon holo - amra symply ops er maddhome ki operation 
        // chalabo ta argument hisebe nitesi. But etake actual javascript sign er 
        // noramlly amra convert korte pari na. So, etake actual sign e convert kore 
        // calculated value ber korar jonnoi muloto dynamic Function create kora. 
        // Dynamic Function banano charao amra eval() function use korte pari. 
        // But eval() function use korle invalid ops dile issue + security issue create hote pare. 
        // So, eval() function use korar poriborte amra Function() use korte pari. 
        // Function() use korle amra eval() function er motoi kaj korte pari. But 
        // Function() use korle eval() function er motoi invalid ops issue create hobe na.
        // eval() diye korte chaile amader valid input nischit korte hobe Aggregate. Jemonta ekhane
        // amra arrow function er maddome handleArithmeticOps e sign pass kore diyechi

        // using Function() to calculate result
        const f = new Function(`ops`, `return ${inputState.a} ${ops} ${inputState.b}`);
        const result = f(ops);
        setResult(result);

        // // using eval() to calculate result
        // const f = eval(`${inputState.a} ${ops} ${inputState.b}`);
        // setResult(f);

        // console.log(f);
        // console.log(f(ops));

        const newHistory = {
            id: getID.next().value,
            inputs: {...inputState},
            ops,
            result,
            date: new Date(),
        }

        setHistory([newHistory, ...history]);
    }

    const handleRestore = (id) => {
        const item = history.find((item)=>item.id === id);
        setInputState(item.inputs);
        setResult(item.result);
        setRestoredHistory(id);
    }

    return (
        <div style={{width:'50%', margin:'0 auto'}}>
            <h1>Result: {result}</h1>
            <InputSection inputs={inputState} handleInputFields={handleInputFields}/>
            <OperationSection handleArithmeticOps={handleArithmeticOps} handleClearOps={handleClearOps}/>
            <HistorySection history={history} restoredHistory={restoredHistory} handleRestore={handleRestore}/>
        </div>
    )
}

export default App;