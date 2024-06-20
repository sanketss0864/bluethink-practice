import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Datafetch from './component/datafetcher/datafetch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Datafetch></Datafetch>
    </>
  )
}

export default App
