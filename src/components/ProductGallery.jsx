import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const products = [
  {
    id: 1,
    name: 'kalender1',
    description: 'Cetak kalender berkualitas dan elegan.',
    image: '/images/kalender1.jpeg',
  },
  {
    id: 2,
    name: 'kalender2',
    description: 'Desain kalender yang menarik untuk promosi bisnis Anda.',
    image: '/images/kalender2.jpeg',
  },
  {
    id: 3,
    name: 'kalender3',
    description: 'Kalender kerja yang profesional.',
    image: '/images/kalender3.jpeg',
  },
];

const ProductGallery = () => {
  return (
    <div className="py-10 px-4 md:px-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Galeri Produk</h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white shadow-md rounded-2xl overflow-hidden p-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ProductGallery;
