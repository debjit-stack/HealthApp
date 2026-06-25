import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/header/header.jsx'
import './App.css'
import Footer from './components/footer/footer.jsx'
import Home from './components/home/home.jsx'

const App = () =>  {

  return (
    <>
    <Header />
    <Home/>
    <Footer/>
    </>
  )
}

export default App
