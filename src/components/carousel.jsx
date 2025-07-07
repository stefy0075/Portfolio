import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/src/assets/Odissey.jpg",
  "/src/assets/Minga.png",
  "/src/assets/amazing.jpg",
  "/src/assets/petshop.jpg",
  "/src/assets/calculadora.jpg"
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className=" h-[83vh] mx-auto rounded-xl w-full mx-auto shadow-md ">
      <Slider {...settings}>
        {images.map((src, index) => (
           <div key={index}>
            <img
              src={src}
              alt={`project-${index}`}
              className=" w-full h-[83vh] object-cover object-top shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;