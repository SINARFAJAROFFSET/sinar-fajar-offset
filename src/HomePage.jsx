import React from 'react';
import ProductGallery from './ProductGallery';
import FormPemesanan from './FormPemesanan.jsx';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-white to-white py-10 px-4 md:px-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-2 drop-shadow">
        Sinar Fajar Offset!
      </h1>
      <p className="text-center text-lg text-gray-700 mb-10">
        Mencetak Semua Kebutuhan Kalender Anda.
      </p>

      {/* Galeri Produk */}
      <section className="px-4 md:px-10 my-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Galeri Produk</h2>
        <ProductGallery />
      </section>

      {/* CTA Section */}
      <div className="text-center mt-16 mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Tertarik? Yuk, pesan sekarang!
        </h2>
        <a
          href="#form-pemesanan"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-xl transition"
        >
          Form Pemesanan
        </a>
      </div>

      {/* Form Pemesanan */}
      <section id="form-pemesanan" className="px-4 md:px-10 my-20">
        <h2 className="text-2xl font-semibold text-center mb-6">Form Pemesanan</h2>
        <FormPemesanan />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;