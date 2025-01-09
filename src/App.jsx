import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BarberShop from './pages/BarberShop'
import BonitaSprings from './pages/BonitaSprings'
import BaytonBeach from './pages/BaytonBeach'
import CoralWay from './pages/CoralWay'
import Services from './pages/Services'
import MyShifts from './pages/MyShifts'
import CreateShift from './pages/CreateShift'
import CreateBarberShop from './pages/CreateBarberShop'
import ViewBarberShopsCreated from './pages/ViewBarberShopsCreated'

function App() {


  return (
    <>
     <BrowserRouter>

      <Routes>
        {/* Main Layout wrapping the routes (estas rutas ve la perosna que esta logueada) */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} className="main" />
          <Route path="/barberShop" element={<BarberShop />} />
          <Route path="/BonitaSpring" element={<BonitaSprings/>} />
          <Route path="/BoytonBeach" element={<BaytonBeach/>} />
          <Route path="/CoralWay" element={<CoralWay/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/myShifts" element={<MyShifts />} />
          <Route path="/createShift" element={<CreateShift />} />
          <Route path="/createBarberShop" element={<CreateBarberShop/>} />
          <Route path="/created-barberShops" element={<ViewBarberShopsCreated/>} />




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
