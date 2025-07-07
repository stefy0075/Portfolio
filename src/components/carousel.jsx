import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    text: 'Desarrollo de sitios web modernos y responsivos.',
    image: '/src/assets/2.png',
  },
  {
    text: 'Soluciones personalizadas para cada necesidad.',
    image: '/src/assets/1.png',
  },
  {
    text: 'Aplicaciones móviles intuitivas y funcionales.',
    image: '/src/assets/3.png',
  },
  {
    text: 'Interfaces atractivas y diseño centrado en el usuario.',
    image: '/src/assets/4.png',
  },
  {
    text: 'Optimización de rendimiento y velocidad.',
    image: '/src/assets/5.png',
  },
  {
    text: 'Integración de APIs y servicios externos.',
    image: '/src/assets/6.png',
  },
  {
    text: 'Mantenimiento y soporte continuo.',
    image: '/src/assets/7.png',
  },
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

      {/* Contenedor de los dots fuera del slide */}
      <div className="absolute bottom-0 w-full h-[10vh] flex items-center justify-center z-50">
        <div className="slick-dots-container">
          {/* Este div es donde slick inyecta automáticamente los dots */}
        </div>
      </div>

      {/* CSS para forzar que los dots se vean dentro del espacio de 10vh */}
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
