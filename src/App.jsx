import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='flex max-sm:flex-col bg-[#FFFCF8] font-mulish'>
      <Navbar />
      <Dashboard />
      <Sidebar />
    </div>
  )
}

export default App
