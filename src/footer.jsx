import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6 mt-10 text-center">
      <p className="text-lg font-semibold">Sinar Fajar Offset</p>
      <p>Alamat: Jl. Contoh No. 123, Yogyakarta</p>
      <p>Telp/WA: 0821-xxxx-xxxx</p>
      <p className="text-sm mt-2">© {new Date().getFullYear()} Sinar Fajar Offset. All rights reserved.</p>
    </footer>
  );
};

export default Footer;