import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
import Header from './Components/Header'
import BasicForm from './Components/BasicForm'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import Profile from './Components/pages/profile'
// import ProfileModal from './Components/ProfileModal'

// Layout component for main pages
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

// Layout for profile page (if you want some shared components)
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
        {/* Profile route with its own layout */}
        <Route path="/profile" element={
          <ProfileLayout>
            <Profile />
          </ProfileLayout>
        } />
        
        {/* Main layout route */}
        <Route path="/" element={
          <MainLayout>
            {/* Add your main content here */}
          </MainLayout>
        } />
      </Routes>
      {/* <ProfileModal /> */}
    </BrowserRouter>
  )
}

export default App
