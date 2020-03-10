import React from "react";
import styled from "styled-components";
import defaultTP from "../image/defaultTP.jpg";

const Card = props => {
  const { name, address, images } = props;
  let src;
  if (images) src = images.src;

  return (
    <StyledCard src={src}>
      <div className="card-image" />
      <div className="card-text">
        {name} --- {address}
        <div className="card-tag">
          <div className="card-place">台北</div>
          <div className="card-like">242人喜歡</div>
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 29.4rem;
  height: 22.1rem;
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
  }
`;

export default Card;
