import {useEffect, useState} from 'react';

// jekono kichu jeta amader react e build in deya nai. Segulo niye dom manupulation amraeasily korte pari useEffect hook er maddhome
// jokhon ei amader DOM er kono element e kono karone access nite hobe tokhom ei amra useEffect hook use korbo

let timeInterval = null;

const App = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [timeCount, setTimeCount] = useState(5);

    useEffect(() => {
        // // manipulating button using jquery and useEffect hook
        // $('#btn').on('click', function () {
        //     alert('Hello, I am JQuery, still Alive');
        // });

        // const btn = document.getElementById('btn');
        // console.log(btn.offsetHeight, btn.offsetWidth);

        // // manipulating button using javascript and useEffect hook
        if(count === 5){
            setLock(true);
        }
        console.log('count', count);

        // return () = {

        // }

    }, [count]);

    // useEffect(() => {
    //     let time = null;
    //     if(lock){
    //         time = setTimeout(() => {
    //             setCount(0);
    //             setLock(false);
    //             clearTimeout(time);
    //         }, 2000);
    //     }
    // }, [lock])

    useEffect(() => {
        if(lock && timeInterval === null){
            timeInterval = setInterval(() => {
                setTimeCount((prev) => prev - 1);
            }, 1000)
        }
    }, [lock])

    useEffect(() => {
        if(timeCount === 0){
            setCount(0);
            setLock(false);
            setTimeCount(5);
            clearInterval(timeInterval);
        }
    })

    console.log('count', count, 'lock', lock);

    return (
        <div>
            <h1 id='test'>{count}</h1>
            {/* <button id='btn'>Click Me</button> */}
            <button id="btn" disabled={lock} onClick={()=>setCount(count+1)}>ADD {lock && `Locked (${timeCount})`}</button>
            <div id="container"></div>
        </div>
    );
}


export default App;