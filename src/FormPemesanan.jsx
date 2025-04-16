import React, { useState } from 'react';

const FormPemesanan = () => {
  const [formData, setFormData] = useState({
    nama: '',
    produk: '',
    jumlah: '',
    catatan: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nomorWa = '6285755507457'; // Ganti dengan nomor WA kamu

    const pesan = `Halo Sinar Fajar Offset! Saya ingin memesan produk:\n\n` +
      `Nama: ${formData.nama}\n` +
      `Produk: ${formData.produk}\n` +
      `Jumlah: ${formData.jumlah}\n` +
      `Catatan: ${formData.catatan}`;

    const urlWa = `https://wa.me/${nomorWa}?text=${encodeURIComponent(pesan)}`;
    window.open(urlWa, '_blank');
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Form Pemesanan</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nama"
          placeholder="Nama"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="produk"
          placeholder="Produk yang dipesan"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="jumlah"
          placeholder="Jumlah"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="catatan"
          placeholder="Catatan tambahan (opsional)"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
        >
          Kirim via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default FormPemesanan;