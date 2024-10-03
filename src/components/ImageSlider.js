import { useState } from "react";
import ImageData from "./ImageData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current - 1);
  };
  const nextSlide = () => {
    setCurrent(current + 1);
  };

  return (
    <section className="slider">
      <FaArrowLeft className="arrowLeft" onClick={prevSlide} />
      <FaArrowRight className="arrowRight" onClick={nextSlide} />
      {ImageData.map((data, index) => {

        return (
          <div className={index === current? "slide active" : 'slide'} key={index}>
            <div>
              <img src={data.image} alt={data.title} className="image" />
              <p>{data.title}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
