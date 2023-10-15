import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore ipsum delectus explicabo, maiores accusamus autem itaque aperiam alias ipsa nulla repellat illum. Veritatis in corporis dignissimos sit a? Consectetur, laboriosam!</p>
      </div>
    </>
  )
}

export default App
