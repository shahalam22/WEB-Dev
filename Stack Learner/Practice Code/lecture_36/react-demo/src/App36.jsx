// // ALL ABOUT PROPS

// // function ListItem(){
// //     return (
// //         <li>
// //             <input type="checkbox" />
// //             <span>Please check it 1</span>
// //         </li>
// //     );
// // }

// const ListItemArrow = (props) => (
//     <li style={{listStyleType:'none', display:'flex', alignItems:'center'}}>
//         <input type="checkbox" checked={props.checked}/>
//         <p>{props.title}</p>
//         <button style={{marginLeft:'auto'}}>Delete</button>
//     </li>
// );

// const taskList = [
//     {
//         id: 1,
//         title: 'title 1',
//         cheked: true,
//     },
//     {
//         id: 2,
//         title: 'title 2',
//         cheked: false,
//     },
//     {
//         id: 3,
//         title: 'title 3',
//         cheked: false,
//     },
//     {
//         id: 4,
//         title: 'title 4',
//         cheked: true,
//     },
//     {
//         id: 5,
//         title: 'title 5',
//         cheked: false,
//     },
//     {
//         id: 6,
//         title: 'title 6',
//         cheked: false,
//     }
// ]

// function App(){

//     // const listArr = 

//     return (
//         <div>
//             {/* GENERATING LIST FROM FUNCTIONAL COMPONENT */}
//             <ul>
//                 <ListItemArrow title='title 1'/>
//                 <ListItemArrow title='title 2'/>
//                 <ListItemArrow title='title 3'/>
//                 <ListItemArrow title='title 4'/>
//                 <ListItemArrow title='title 5'/>
//             </ul>

//             {/* GENERATING LIST FROM ARRAY */}
//             <ul>
//                 {
//                     taskList.map((item) => <ListItemArrow key={item.id} title={item.title} checked={item.cheked}/>)
//                 }
//             </ul>
//         </div>
//     )
// }

// export default App;



// // ALL ABOUT STATE

// //example 1

// import { useState } from "react";

// const Product = (props) => {
//     const [count, setCount] = useState(0);

//     const onIncrement = () => {
//         if(count < stock){
//             setCount(count + 1);
//         }
//     }

//     const onDecrement = () => {
//         if(count > 0){
//             setCount(count - 1);
//         }
//     }
//     return (
//         <div>
//             <h2>{props.title}</h2>
//             <p>{count} / {props.stock}</p>
//             <button onClick={onIncrement} disabled={count>=props.stock}>Increment</button>
//             <button onClick={onDecrement} disabled={count === 0}>Decrement</button>
//         </div>
//     )
// }

// const App = () => {
//     return (
//         <div>
//             <Product title='Keyboard'stock='15'/>
//             <Product title='Mouse' stock='10'/>
//             <Product title='Monitor' stock='0'/>
//         </div>
//     )
// }

// export default App;


// example 2

import { useState } from "react";

const productList = [
    {
        id: 1111222,
        productName: 'Keyboard',
        stock: 15,
        price: 100,
    },
    {
        id: 1111223,
        productName: 'Mouse',
        stock: 10,
        price: 50,
    },
    {
        id: 1111224,
        productName: 'Monitor',
        stock: 12,
        price: 500,
    },
    {
        id: 1111225,
        productName: 'Laptop',
        stock: 5,
        price: 1000,    
    },
    {
        id: 1111226,
        productName: 'CPU',
        stock: 3,
        price: 200,
    }
]

const TableRow = ({id, productName, stock, price, quantity, total, increment, decrement}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{productName}</td>
            <td>{stock}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{total}</td>
            <td>
                <button onClick={()=>{increment(id)}} disabled={quantity===stock}>+</button>
                <button onClick={()=>{decrement(id)}} disabled={quantity===0}>-</button>
            </td>
        </tr>
    )
}

const App36 = () => {
    const [products, setProducts] = useState(productList.map((item)=>(
        {
            ...item,
            quantity: 0,
            total: 0,
        }
    )));

    const incrementQuantity = (id) => {
        const newProducts = products.map((item)=>{
            if(id === item.id && item.stock > item.quantity){
                item.quantity++;
                item.total = item.quantity * item.price;
            }
            return item;
        })
        setProducts(newProducts);
    }

    const decrementQuantity = (id) => {
        const newProducts = products.map((item)=>{
            if(id === item.id && item.quantity > 0){
                item.quantity--;
                item.total = item.quantity * item.price;
            }
            return item;
        })
        setProducts(newProducts);
    }

    const total = products.reduce((acc, cur) => acc + cur.total, 0);

    return (
        <div>
            <h1>Product List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product)=> <TableRow key={product.id} {...product} increment={incrementQuantity} decrement={decrementQuantity}/>)}
                </tbody>
            </table>
            <h2>Total Price: {total} BDT</h2>
        </div>
    )
}


export default App36;