import React from "react";
import ImageData from "./ImageData";

const ImageSlider = () => {
  return (
    <section className="slider" >
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
