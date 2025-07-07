import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import de imágenes desde src/assets
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';

const slides = [
  { text: 'Desarrollo de sitios web modernos y responsivos.', image: img2 },
  { text: 'Soluciones personalizadas para cada necesidad.', image: img1 },
  { text: 'Aplicaciones móviles intuitivas y funcionales.', image: img3 },
  {
    text: 'Interfaces atractivas y diseño centrado en el usuario.',
    image: img4,
  },
  { text: 'Optimización de rendimiento y velocidad.', image: img5 },
  { text: 'Integración de APIs y servicios externos.', image: img6 },
  { text: 'Mantenimiento y soporte continuo.', image: img7 },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full h-[100vh] relative overflow-hidden bg-black">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-[90vh] relative">
            <img
              src={slide.image}
              alt={`slide-${index}`}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-6 leading-snug drop-shadow-xl">
                {slide.text}
              </h2>
            </div>
          </div>
        ))}
      </Slider>

      {/* Contenedor para separar los dots */}
      <div className="absolute bottom-0 w-full h-[10vh] flex items-center justify-center z-50" />

      <style>
        {`
          .slick-dots {
            position: absolute;
            bottom: 2vh;
            width: 100%;
            display: flex !important;
            justify-content: center;
            gap: 10px;
            z-index: 50;
          }

          .slick-dots li button:before {
            color: white !important;
            font-size: 14px;
          }

          .slick-dots li.slick-active button:before {
            color: #fff !important;
          }
        `}
      </style>
    </div>
  );
};

export default Carousel;
