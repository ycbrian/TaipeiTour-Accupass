import React from "react";
import "./style.css";

const Img = props => {
  const { src } = props;

  let imageStyle = {
    background: `url('${src}') center/cover no-repeat`
  };

  return <div className="attr--img" style={imageStyle} />;
};

export default Img;
