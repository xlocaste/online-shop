import React from "react";

const products = [
  { name: "Lampu Standing", price: 1299000, image: "/Home/home 1.jpg" },
  { name: "Kursi Rotan", price: 1299000, image: "Home/home 2.jpg" },
  { name: "Rak Sepatu", price: 1299000, image: "Home/home 3.jpg" },
  { name: "Coffee Tables", price: 1299000, image: "Home/home 4.jpg" },
  { name: "Kursi Bar", price: 1299000, image: "Home/home 5.jpg" },
];

const saleProducts = [
  { name: "RAK TV KAYU JATI", price: 1299000, originalPrice: 2499000, image: "Home/home 6.jpg" },
  { name: "RAK TV MODERN", price: 2999000, originalPrice: 3999000, image: "Home/home 7.jpg" },
  { name: "RAK TV RETRO", price: 1599000, originalPrice: 3499000, image: "Home/home 8.jpg" },
];

const ProductCard = ({ name, price, originalPrice, image }) => (
  <div className="text-center p-4">
    <img src={image} alt={name} className="mx-auto mb-2 w-40 h-40 object-cover" />
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-red-500 font-bold">Rp {price.toLocaleString()}</p>
    {originalPrice && <p className="text-gray-500 line-through">Rp {originalPrice.toLocaleString()}</p>}
    <button className="bg-green-700 text-white px-4 py-2 mt-2">Tambah ke Keranjang</button>
  </div>
);

const ProductCatalog = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold text-center mb-6">NEW COLLECTION</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <h2 className="text-2xl font-bold text-center mt-12 mb-6">SALE</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {saleProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
