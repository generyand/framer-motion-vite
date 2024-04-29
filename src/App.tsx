import { useState } from 'react'
import './App.css'
import {Header} from "./components/Header"
import { Tracer } from './components/Tracer'
import { Hero } from './components/Hero'

function App() {

  return (
    <>
      <Hero />
      <Tracer />
      <Header />
    </>
  )
}

export default App
