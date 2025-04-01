import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import ImageSlider from './components/ImageSlider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <ImageSlider />
  </StrictMode>,
)
