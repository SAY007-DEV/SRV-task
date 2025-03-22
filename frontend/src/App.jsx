import { useState } from 'react'
// import './App.css'
import Header from './Components/Header'
import BasicForm from './Components/BasicForm'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Sidebar/>
      <BasicForm/>
      <Footer/>
        
    </>
  )
}

export default App
