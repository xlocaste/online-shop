import React from "react";
import { FaSearch, FaShoppingCart, FaUser, FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-green-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <FaHome className="text-3xl" />
        </div>

        <div className="flex-1 mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari..."
              className="w-full p-2 pl-4 pr-10 rounded-full bg-white text-black"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black">
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-2xl">
          <FaShoppingCart />
          <FaUser />
        </div>
      </div>

      <div className="mt-2 flex justify-center space-x-8 text-sm font-semibold">
        <a href="#" className="hover:underline">HOME</a>
        <a href="#" className="hover:underline">PRODUK</a>
        <a href="#" className="hover:underline">DESAIN INTERIOR</a>
        <a href="#" className="hover:underline">TENTANG KAMI</a>
      </div>
    </nav>
  );
};

export default Navbar;
