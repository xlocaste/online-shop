import React from 'react'
import Navbar from "../components/Navbar"
import ImageSlider from '../components/ImageSlider'
import ProductCatalog from '../components/Product'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <ProductCatalog />
      <Footer />
    </div>
  )
}

export default Home
