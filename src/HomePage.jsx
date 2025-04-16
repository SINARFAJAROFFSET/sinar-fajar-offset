
import React from 'react';
import ProductGallery from './components/ProductGallery'; //

export default function HomePage() {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold text-blue-600">Sinar Fajar Offset!</h1>
      <p className="mt-4 text-gray-700">Mencetak Semua Kebutuhan Kalender Anda.</p>

      {/* Tambahkan bagian galeri produk di bawah */}
      <div className="mt-10">
        <ProductGallery />
      </div>
    </div>
  );
}
