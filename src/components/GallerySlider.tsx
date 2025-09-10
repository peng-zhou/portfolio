import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface GallerySliderProps {
  title?: string;
  images: string[];
}

export default function GallerySlider({ title, images }: GallerySliderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (src: string) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      {title && <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>}

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="rounded-2xl shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="h-80 flex items-center justify-center">
              <img
                src={src}
                alt={`${title || 'Gallery'} image ${index + 1}`}
                className="max-h-full w-auto object-contain rounded-2xl cursor-pointer"
                onClick={() => openModal(src)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full p-4 bg-white rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black text-lg font-bold"
            >
              ✕
            </button>
            <img src={currentImage} alt="Enlarged" className="w-full h-auto" />
          </div>
        </div>
      )}
    </div>
  );
}