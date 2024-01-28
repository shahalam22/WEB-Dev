import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/Count'
import IncrementBtn from './components/IncrementBtn'
import DecrementBtn from './components/DecrementBtn'
import History from './components/History'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Count/>
      <div>
        <IncrementBtn />
        <DecrementBtn />
      </div>
      <History />
    </div>
  )
}

export default App
