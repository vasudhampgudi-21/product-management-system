import { useState } from 'react'
import './App.css'
import { Sample } from './components/Vasudha.jsx'
import { CafeMenu } from './components/CafeMenu.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Sample/>
   <CafeMenu/>
    </>
  )
}

export default App
