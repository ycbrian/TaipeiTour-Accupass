import React from "react";
import { useParams } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import { findData } from "../../util/dataHandle";
import defaultTP from "../../image/defaultTP.jpg";
import ImgGallery from "../../component/ImgGallery";
import { FaHeart } from "react-icons/fa";
import Loader from "../../component/Loader";
import "./style.css";

const Attraction = props => {
  const { id } = useParams();
  const { travelData, likeArr, likeToggle } = props;
  let page, image, like;
  let imageStyle, likeStyle;

  if (travelData.length) {
    const data = findData(id, travelData);
    if (!data) page = <Redirect to="/" />;
    else {
      const { name, introduction, address, tel, ticket, url, images } = data;

      // css className handling
      like = likeArr.find(item => item === name);
      likeStyle = like ? "attr--like attr--like-active" : "attr--like";

      image = images.length > 0 ? images[0].src : defaultTP;
      imageStyle = {
        background: `url(${image}) center/cover no-repeat`
      };

      page = (
        <>
          <div className="attr--headImage" style={imageStyle} />
          <FaHeart className={likeStyle} onClick={() => likeToggle(name)} />
          <div className="attr--textGroup">
            <p className="attr--name">{name}</p>
            <p
              dangerouslySetInnerHTML={{ __html: introduction }}
              className="attr--intro"
            />
            {images.length > 0 ? <ImgGallery images={images} /> : null}
            {address && (
              <label htmlFor="address" className="attr--posLabel">
                地址：
              </label>
            )}
            <p className="attr--address" id="address">
              {address}
            </p>

            {tel && (
              <label htmlFor="tel" className="attr--posLabel">
                聯絡方式：
              </label>
            )}
            <p className="attr--tel" id="tel">
              {tel}
            </p>
            {ticket && (
              <label htmlFor="ticket" className="attr--posLabel">
                票價：
              </label>
            )}
            <p className="attr--ticket" id="ticket">
              {ticket}
            </p>
            {url && (
              <label htmlFor="address" className="attr--posLabel">
                更多資訊：
              </label>
            )}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="attr--infoLink"
            >
              {url}
            </a>
            <Link to="/">
              <button className="attr--button">返回上頁</button>
            </Link>
          </div>
        </>
      );
    }
  } else {
    page = <Loader />;
  }

  return (
    <div className="attr--main" like={like}>
      {page}
    </div>
  );
};

export default Attraction;
