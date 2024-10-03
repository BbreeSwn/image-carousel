import React from "react";
import ImageData from "./ImageData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const ImageSlider = () => {
  return (
    <section className="slider" >
        <FaArrowLeft className="arrowLeft" />
        <FaArrowRight className="arrowRight" />
      {ImageData.map((data, index) => {
        return (
          <div className="slide" key={index}>

            <div>
                <img src={data.image} alt={data.title} className='image' />
                <p>{data.title}</p>
            </div>
          </div>
        );
      })}
      
    </section>
  );
};

export default ImageSlider;
