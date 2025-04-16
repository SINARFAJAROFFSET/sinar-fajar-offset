import React from 'react';

const products = [
  {
    id: 1,
    name: 'kalender1',
    description: 'Cetak kalender berkualitas dan elegan.',
    image: '/images/kalender1.jpg',
  },
  {
    id: 2,
    name: 'kalender2',
    description: 'Desain kalender yang menarik untuk promosi bisnis Anda.',
    image: '/images/kalender2.jpg',
  },
  {
    id: 3,
    name: 'kalender3',
    description: 'Kalender kerja yang profesional.',
    image: '/images/kalender3.jpg',
  },
];

const ProductGallery = () => {
  return (
    <div className="py-10 px-4 md:px-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Galeri Produk</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-2xl overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
