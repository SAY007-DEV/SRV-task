import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
import Header from './Components/Header'
import BasicForm from './Components/BasicForm'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import Profile from './Components/pages/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        {/* ... other routes ... */}
      </Routes>
      <Header/>
      <Sidebar/>
      {/* <BasicForm/> */}
      <Footer/>
    </BrowserRouter>
  )
}

export default App
