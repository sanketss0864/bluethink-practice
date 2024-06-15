import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [state, stateUpdaterFunction] = useState(initialStateValue)
  return (
    <>

      <div className="card">
        <div className='age'>Age : {count}</div>
        <button onClick={() => setCount((count) => count + 1)}>
          Increase age
        </button>
 
      </div>

    </>
  )
}

export default App
