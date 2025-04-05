const categories = [
  { name: "Accessories", image: "/Product/1.jpg" },
  { name: "Kabinet", image: "/Product/2.jpg" },
  { name: "Sofa", image: "/Product/3.jpg" },
  { name: "Rak TV", image: "/Product/4.jpg" },
  { name: "Tempat Tidur", image: "/Product/5.jpg" },
  { name: "Kursi", image: "/Product/6.jpg" },
  { name: "Nakas", image: "/Product/7.jpg" },
  { name: "Meja", image: "/Product/8.jpg" },
  { name: "Laundry", image: "/Product/9.jpg" },
  { name: "Kids Furniture", image: "/Product/10.jpg" },
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
