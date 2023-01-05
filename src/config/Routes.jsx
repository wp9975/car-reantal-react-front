import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import About from '../pages/About'

import CarsList from '../pages/CarsList'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import RentalCost from '../pages/RentalCost'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/carlist' element={<CarsList/>}/>
        <Route path='/carlist/:slug' element={<RentalCost/>}/>
    </Routes>
  )
}

export default Routers