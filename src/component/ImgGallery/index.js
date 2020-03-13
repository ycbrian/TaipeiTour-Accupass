import React from "react";
import Img from "../Img";
import "./style.css";

const ImgGallery = props => {
  const { images } = props;
  const imgArr = images.map((img, ind) => {
    return <Img key={ind} src={img.src} />;
  });
  return <div className="attr--imgGallery">{imgArr}</div>;
};

export default ImgGallery;
