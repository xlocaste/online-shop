const categories = [
  { name: "Accessories", image: "/images/accessories.png" },
  { name: "Kabinet", image: "/images/kabinet.png" },
  { name: "Sofa", image: "/images/sofa.png" },
  { name: "Rak TV", image: "/images/raktv.png" },
  { name: "Tempat Tidur", image: "/images/tempattidur.png" },
  { name: "Kursi", image: "/images/kursi.png" },
  { name: "Nakas", image: "/images/nakas.png" },
  { name: "Meja", image: "/images/meja.png" },
  { name: "Laundry", image: "/images/laundry.png" },
  { name: "Kids Furniture", image: "/images/kidsfurniture.png" },
];

export default function KategoriProduk() {
  return (
    <div className="py-10 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">KATEGORI PRODUK</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <img src={category.image} alt={category.name} className="w-24 h-24 object-contain" />
            <p className="text-gray-700 font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
