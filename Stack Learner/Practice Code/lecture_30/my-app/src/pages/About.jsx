import { useState } from 'react';
import Layout31 from '../components/layout/Layout31';
import DisplayCount from '../components/display-count/DisplayCount';
import Button31 from '../components/button/Button31';
import UpdateIncrementDecrement from '../components/update/UpdateIncrementDecrement';

function About() {

    const [count, setCount] = useState(1);
    const [incrementValue, setIncrementValue] = useState(1);
    const [decrementValue, setDecrementValue] = useState(1);

    function increment() {
        setCount(count + incrementValue);
    }

    function decrement() {
        setCount(count - decrementValue);
    }

    function handleIncrementChange(e) {
        setIncrementValue(parseInt(e.target.value));
    }

    function handleDecrementChange(e) {
        setDecrementValue(parseInt(e.target.value));
    }

    return (
        <Layout31>
            <h1>Hello, I'm About Page</h1>
            <DisplayCount count={count}/>
            <UpdateIncrementDecrement incrementValue={incrementValue} decrementValue={decrementValue} handleIncrementChange={handleIncrementChange} handleDecrementChange={handleDecrementChange}/>
            <Button31 increment={increment} decrement={decrement}/>
        </Layout31>
    )
}

export default About;

/*
 * ekhane setCount keo amra chaile pass korte pari but pass korle jake pass korbo tar kache control chole jabe
 * jate kore amader state er jei motive oita loose hoye jabe. Tai for security perpouse and also state perpouse
 * amra state controlling function (setCount) kokhono component er bahire pass korbo na.
 */