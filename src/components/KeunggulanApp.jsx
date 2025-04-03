import { FaTruck, FaShieldAlt, FaGlobe, FaLock } from "react-icons/fa";

const features = [
  { icon: <FaTruck size={40} />, title: "Pengiriman Cepat", desc: "Garansi Kerusakan" },
  { icon: <FaShieldAlt size={40} />, title: "Terpercaya", desc: "Ribuan Testimoni di Ecommerce" },
  { icon: <FaGlobe size={40} />, title: "Jangkauan Luas", desc: "Lebih dari 5000 Customer" },
  { icon: <FaLock size={40} />, title: "100% Aman", desc: "Ecommerce/Bank" },
];

export default function KeunggulanApp() {
  return (
    <div className="py-10 bg-gray-100 text-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-green-800">{feature.icon}</div>
            <h3 className="font-semibold mt-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}