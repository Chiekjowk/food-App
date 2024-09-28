import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Home from './components/Home/Home.jsx'

const App = () => {
 
  return (
    <div className="app-container">
      <Sidebar />
      <Home/>

    </div>
  )
}

export default App