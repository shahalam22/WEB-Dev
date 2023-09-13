// console.log(React);
// console.log(ReactDOM); //used for browser

// //why React & ReactDOM is different? Because React is a platform agnostic library. So, if we use react for mobile app development, then we have to use "ReactNATIVE" in place of "ReactDOM"

const domContainer = document.querySelector("#root");

// ReactDOM.render("Hello world", domContainer); //here, we're rendering just "Hello World" in the root id of react.index [normal]. Here, we will always render an react element

// // point-1
// const myElement = React.createElement("div", null, [
//     React.createElement("p", null, "Hello World"),
//     React.createElement("p", null, "Hello World"),
// ]); // React.createElement(tag, typeOf_passed_data_to_the_tag, passed_data);

// // "React" er kaj holo element create kora
// // "ReactDOM" er kaj holo "React" diye create kora elements render kora


// // amra point-1 er moto kore elements create kore kore jete pari. But eta ekta lenghty process + eita errorprone
// // amra point-1 er poriborte actual html er moto-i ekhane code likhte pari jake JSX bole [java-script xml - 90% html er motoi]. But, eivabe code likhle amader etake translate kora lage "TRANSPILLER" diye. "Bebel" emonei ekta transpiller. So, eitar js script html file e react er por ar current js file er por insert korte hobe and js current file er type deya lagbe type="text/babel"
// const myElement = (
//     <div>
//         <h1 id="display1">0</h1>
//         <div>
//             <button id="button1">Increment +</button>
//         </div>
//     </div>
// )

// ReactDOM.render(myElement, domContainer);


//doing code of script.js in react way
const Increment = () => {
    const [counter, setCounter] = React.useState(0);
    return (
        <div>
            <h1 id="display">{counter}</h1>
            <div>
                <button id="button" onClick = {() => setCounter(counter+1)}>Increment +</button>
            </div>
        </div>
    );
};

//for single one instance
ReactDOM.render(<Increment/>, domContainer);

//for multiple instance
ReactDOM.render(
    <div className="container">
        <Increment/>
        <Increment/>
        <Increment/>
    </div>,
    domContainer
);

// let number = 0;

// const display = document.querySelector("#display");
// const button = document.querySelector("#button");

// button.addEventListener("click", () => {
//     number++;
//     display.textContent = number;
// })