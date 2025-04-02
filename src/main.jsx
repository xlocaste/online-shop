import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import ImageSlider from './components/ImageSlider.jsx'
import Product from './components/Product.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <ImageSlider />
    <Product />
    <Footer />
  </StrictMode>,
)
