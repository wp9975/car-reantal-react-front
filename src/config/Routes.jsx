import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import About from '../pages/About'
import CarDetails from '../pages/CarDetails'
import CarsList from '../pages/CarsList'
import Home from '../pages/Home'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/carlist' element={<CarsList/>}/>
        <Route path='/carlist/:slug' element={<CarDetails/>}/>
    </Routes>
  )
}

export default Routers