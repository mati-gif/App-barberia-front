import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        {/* Main Layout wrapping the routes (estas rutas ve la perosna que esta logueada) */}
        <Route path="/" element={<MainLayout />}>

          <Route index element={<Home />} className="main" />






        </Route>

        {/* Main Layout wrapping the routes (estas rutas ve la persona que no esta logueada) */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
