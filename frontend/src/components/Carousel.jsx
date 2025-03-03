import React, { useState } from "react";
import "../styles/Carousel.css";
import { IoIosArrowRoundForward } from "react-icons/io";


const Carousel = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <section className={`carousel`}>
      <div className="carousel-slide">{slides[activeIndex]}</div>

    <IoIosArrowRoundForward className="next" onClick={nextSlide} />
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
