const products = [
    { name: "Sofa Bed", price: "Rp 1.700.000", image: "/Product/11.jpg" },
    { name: "Meja Tamu Oval", price: "Rp 1.500.000", image: "/Product/12.jpg" },
    { name: "Sofa Single", price: "Rp 1.000.000", image: "/Product/13.jpg" },
    { name: "Sofa Bed", price: "Rp 1.700.000", image: "/Product/14.jpg" },
    { name: "Meja Tamu Oval", price: "Rp 1.500.000", image: "/Product/15.jpg" },
    { name: "Sofa Single", price: "Rp 1.000.000", image: "/Product/16.jpg" },
  ];
  
  export default function ProdukUnggulan() {
    return (
      <div className="py-10 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">PRODUK UNGGULAN</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img src={product.image} alt={product.name} className="w-32 h-32 object-contain" />
              <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
              <p className="text-red-600 font-bold">{product.price}</p>
              <button className="mt-3 bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">
                Tambah ke keranjang
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }