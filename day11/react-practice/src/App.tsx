import { useState } from 'react'
import './App.css'
import Datahandler from './components/display data/data'
import ImperativeHandle from './components/hooks/imperativehandle'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* <Datahandler></Datahandler> */}
<ImperativeHandle></ImperativeHandle>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    
      </div>

    </>
  )
}

export default App
