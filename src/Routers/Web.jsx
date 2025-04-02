import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from "../pages/product"
import Home from "../pages/Home"
import DesainInterior from '../pages/DesainInterior'
import TentangKami from '../pages/TentangKami'

const Web = () => {
  return (
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/produk" element={<Product />}></Route>
            <Route path="/desain-interior" element={<DesainInterior />}></Route>
            <Route path="/tentang-kami" element={<TentangKami />}></Route>
         </Routes>
  )
}

export default Web
