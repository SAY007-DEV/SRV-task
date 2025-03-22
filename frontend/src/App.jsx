import { useState } from 'react'
// import './App.css'
import Header from './Components/Header'
import BasicForm from './Components/BasicForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <BasicForm/>
        
    </>
  )
}

export default App
