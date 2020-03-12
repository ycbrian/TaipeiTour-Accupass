import React from "react";
import styled from "styled-components";
import defaultTP from "../../image/defaultTP.jpg";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Card = props => {
  const { name, id, address, images, likeToggle, likeArr } = props;

  let src;
  let like = likeArr.find(item => item === name);

  if (images) src = images.src;

  const handleToggle = name => e => {
    e.stopPropagation();
    likeToggle(name);
  };

  return (
    <StyledCard src={src} like={like}>
      <Link to={`/${id}`} className="card-link">
        <div className="card-image" />
        <div className="card-text">
          {name} --- {address}
          <div className="card-tag">
            <div className="card-place">台北</div>
            <div className="card-like">242人喜歡</div>
          </div>
        </div>
      </Link>

      <FaHeart className="card-heart" onClick={handleToggle(name)} />
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 29.4rem;
  height: 22.1rem;
  position: relative;
  line-height: 2.4rem;
  letter-spacing: -0.32px;
  color: rgba(0, 0, 0, 0.85);
  background-color: white;
  transition: all 0.15s ease-in;

  :hover {
    transform: scale(1.07);
  }

  .card- {
    &image {
      width: 100%;
      height: 70%;
      border-radius: 0.4rem;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.17);
      background: url(${props => (props.src ? props.src : defaultTP)})
        center/cover no-repeat;
    }

    &text {
      width: 95%;
      font-size: 1.6rem;
      margin: 1rem auto 0 auto;
    }

    &tag {
      display: flex;
      justify-content: space-between;
      color: #4d4d4d;
    }

    &place {
      font-size: 1.5rem;
    }

    &like {
      font-size: 1.5rem;
    }

    &heart {
      width: 2.5rem;
      height: 2.5rem;
      position: absolute;
      color: ${props => (props.like ? "red" : "#a2a2a2")};
      top: 2rem;
      right: 2rem;
    }

    &link {
      text-decoration: none;
      color: var(--color-secondary-dark);
    }
  }
`;

export default Card;
