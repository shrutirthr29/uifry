import React from 'react'
// import ReactDOM from 'react-dom' 
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Features from './Components/Features'
import Advantages1 from './Components/Advantages1'
import Advantages2 from './Components/Advantages2'
import Testimonial from './Components/Testimonial'
import Faq from './Components/Faq'
import Download from './Components/Download'
import Footer from './Components/Footer'

export default function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <Advantages1 />
      <Advantages2 />
      <Testimonial />
      <Faq />
      <Download />
      <Footer />
    </div>
    
  )
}



