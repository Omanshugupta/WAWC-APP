import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
// import Education from './Components/Education'
import Edu from './Components/Edu' 
import About from './Components/About'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      {/* <Education/> */}
      <Edu/>
      
      <About/>
      
    </div>
  )
}
