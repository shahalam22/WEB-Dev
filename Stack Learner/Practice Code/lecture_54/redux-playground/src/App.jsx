// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/Count'
import DecrementBtn from './components/DecrementBtn';
import History from './components/History';
import IncrementBtn from './components/IncrementBtn';
// import IncrementBtn from './components/IncrementBtn'
// import DecrementBtn from './components/DecrementBtn'
// import History from './components/History'


// // using raw REDUX
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <Count/>
//       <div>
//         <IncrementBtn />
//         <DecrementBtn />
//       </div>
//       <History />
//     </div>
//   )
// }

// export default App


// using EASY-PEASY
function App() {

  return (
    <div className="App">
      <Count/>
      <div>
        <IncrementBtn/>
        <DecrementBtn/>
      </div>
      <History/>
    </div>
  )
}

export default App;