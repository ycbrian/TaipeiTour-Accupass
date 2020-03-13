import React from "react";
import defaultTP from "../../image/defaultTP.jpg";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./style.css";

const Card = props => {
  const { name, id, address, images, likeToggle, likeArr } = props;

  // Toggle CSS className
  let src, heartStyle, imageStyle;
  let like = likeArr.find(item => item === name);

  src = images ? images.src : defaultTP;
  heartStyle = like ? "card--heart card--heart-active" : "card--heart";

  console.log(src);
  imageStyle = {
    background: `url('${src}') center/cover no-repeat`
  };
  console.log(imageStyle);

  // like click handling
  const handleToggle = name => e => {
    e.stopPropagation();
    likeToggle(name);
  };

  return (
    <div className="card--wrapper">
      <Link to={`/${id}`} className="card--link">
        <div className="card--image" style={imageStyle} />
        <div className="card--text">
          {name} --- {address}
          <div className="card--tag">
            <div className="card--place">台北</div>
            <div className="card--like">242人喜歡</div>
          </div>
        </div>
      </Link>

      <FaHeart className={heartStyle} onClick={handleToggle(name)} />
    </div>
  );
};

export default Card;
