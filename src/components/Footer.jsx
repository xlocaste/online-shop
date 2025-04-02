import React from "react"
import { FaInstagram, FaFacebook, FaTiktok, FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="bg-green-900 text-white p-6 text-center">
        <div className="flex justify-around items-center flex-wrap">
          <p>Kebijakan & Syarat Layanan</p>
          <p>Kontak Kami</p>
          <div className="flex items-center gap-2">
            <span>Follow</span>
            <a href="#" className="text-white"><FaInstagram size={20} /></a>
            <a href="#" className="text-white"><FaFacebook size={20} /></a>
            <a href="#" className="text-white"><FaTiktok size={20} /></a>
            <a href="#" className="text-white"><FaPinterest size={20} /></a>
          </div>
        </div>
        <p className="mt-4">@ Furniture Kita | Furniture Elegan, Rumah Impian!</p>
      </footer>
    );
  };

  export default Footer