import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import KategoriProduk from "../components/KategoriProduk"
import ProdukUnggulan from "../components/ProdukUnggulan"
import KeunggulanApp from "../components/KeunggulanApp"

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <KategoriProduk />
      <ProdukUnggulan />
      <KeunggulanApp />
      <Footer />
    </div>
  )
}
export default ProductPage
