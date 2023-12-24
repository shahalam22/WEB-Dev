import {useState, useEffect} from 'react';
import Layout31 from '../components/layout/Layout31';

function Help() {

    const [name, setName] = useState('');

    // // this code snippet will update set after every one sec
    // setTimeout(() => {
    //     setName({name: 'Abir'});
    // }, 1000);
    // console.log('Rendering');

    // this code snippet will control inner setTimeout function. Thus will prevent updating state after every 1 sec
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setName({name: 'Abir'});
    //     }, 1000)
    // })

    const data = [
        {
            name: 'shah alam',
            email: 'shahalamabir21@gmail.com'
        },
        {
            name: 'hasin ahmed',
            email: 'doyalbabaHasin23@gmail.com'
        },
        {
            name: 'shuvo karmokar',
            email: 'gandubaba56@gmail.com'
        }
    ]

    // const data = [];

    return (
        <Layout31>
            {/* using SHORT CIRCUIT EVALUATION
            {name && <h1>Hello {name}, I am Help Page</h1>}
            {!name && <h1>Hello GUEST, I am Help Page</h1>} */}

            {/* USING TERNARY OPERATOR */}
            { name ? <h1>Hello {name}, I am Help Page</h1> : <h1>Hello GUEST, I am Help Page</h1>}

            {data.length > 0 ? 
                <ul>
                    {data.map(item => <li>{item.name}, {item.email}</li>)}
                </ul> : 
                <p>There is no Data</p>
            }
            
        </Layout31>
    )
}

export default Help;