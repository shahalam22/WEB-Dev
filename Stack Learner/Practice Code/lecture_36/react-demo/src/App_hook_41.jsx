import { useState, useEffect } from "react";

const cachedData = {};

const UseApp = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [id, setId] = useState(1);
    const [loading, setLoading] = useState(false);

    const max = 10;


    // // evabe directly component er moddho theke data fetch 
    // // korle infinite loop er moddhe diye onek onek request jabe api te.
    // // Jeta amader block o marte pare. karon amader fetch data theke state 
    // // update kortesi. state update hole component abar call hoitese then 
    // // abar data fetch hoye state update hoitese, then abar component update. 
    // // So, emne choltei thakbe. tai evabe component er moddhe fetch kora uchit na
    
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((response) => response.json())
    // .then((data) => setUsers(data));

    // // so, ei problem theke uthte amra use effet use korbo and [] use korbo dependency
    // // hisebe jeno amader ekhane data ekbar ei fetch kore ekbar ei state update kore

    useEffect(()=>{
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .finally(() => setLoading(false));    
    }, [])

    useEffect(()=>{
        if(cachedData[id]){
            setUser(cachedData[id]);
            return;
        }
        setLoading(true);
        fetchUsers(id)
        .then((data) => {
            setUser(data);
        })
        .finally(() => setLoading(false));    
    }, [id])

    useEffect(() => {
        if(!cachedData[id+1] && id<max){
            fetchUsers(id+1);
        }
    }, [id])

    const fetchUsers = (id) => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
            cachedData[id] = data;
            return data;
        });
    };

    const nextHandler = () => {
        if(id<10){
            setId(id+1);
        }
    }

    const prevHandler = () => {
        if(id>1){
            setId(id-1);
        }
    }

    return {
        user, id, users, loading, nextHandler, prevHandler, max
    }
}

export default UseApp;