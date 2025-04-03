import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import KategoriProduk from "../components/KategoriProduk"
import ProdukUnggulan from "../components/ProdukUnggulan"

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <KategoriProduk />
      <ProdukUnggulan  />
      <Footer />
    </div>
  )
}
export default ProductPage
