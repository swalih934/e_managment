import { useState } from 'react'
import './bootstrap.min.css'
import Home from '../Pages/Home'
import Landing from '../Pages/Landing'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/'element={< Landing/>}/>
        <Route path='/home'element={< Home/>}/>

      </Routes>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
