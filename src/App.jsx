import { useState } from 'react'
import './App.css'

import NavBar from './Components/NavBar'
import Banner from './Components/Banner'
import Reviews from './Components/Reviews'
import SocialMedia from './Components/SocialMedia'

import * as bootstrap from 'bootstrap'



function App() {
  const [count, setCount] = useState(0)
  // const[currentPath, setCurrenPath] = useState(window.location.pathname)
  return (
    <>
      <NavBar />
      <Banner />
      <Reviews />
      <SocialMedia />
      
    </>
  )
}

export default App
