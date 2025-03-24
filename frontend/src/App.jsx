import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
import Header from './Components/Header'
import BasicForm from './Components/BasicForm'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import Profile from './Components/pages/profile'
// import ProfileModal from './Components/ProfileModal'


const MainLayout = ({ children }) => (
  <>
    <Header />
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
    <Footer />
  </>
)


const ProfileLayout = ({ children }) => (
  <>
    <Header />
    <main className="min-h-screen">
      {children}
    </main>
  </>
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/profile" element={
          <ProfileLayout>
            <Profile />
          </ProfileLayout>
        } />
        
     
        <Route path="/" element={
          <MainLayout>
            
          </MainLayout>
        } />
      </Routes>
      {/* <ProfileModal /> */}
    </BrowserRouter>
  )
}

export default App
