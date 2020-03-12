import React from "react";
import styled from "styled-components";
import headImg from "../image/taipeicity.jpg";
import Card from "../component/Card";

const Home = props => {
  const data = props.travelData;
  const { likeArr, likeToggle } = props;

  let page = (
    <div className="loader-box">
      <div className="loader-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );

  if (data.length > 0) {
    let dataArr = data.map(item => {
      const { id, name, address, images } = item;
      return (
        <Card
          name={name}
          address={address}
          images={images[0]}
          likeToggle={likeToggle}
          likeArr={likeArr}
          id={id}
          key={id}
        />
      );
    });
    page = <section className="home-cardGroup">{dataArr}</section>;
  }

  return (
    <StyledHome img={headImg}>
      <header className="home-header">台北市旅遊景點</header>
      {page}
    </StyledHome>
  );
};

const StyledHome = styled.main`
  .home- {
    &header {
      display: flex;
      align-items: flex-end;
      padding: 0 0 8rem 15rem;
      font-size: 5rem;
      letter-spacing: 0.5rem;
      color: var(--color-primary);
      width: 100%;
      height: 60rem;
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.7) 75%,
          rgba(0, 0, 0, 1)
        ),
        url(${props => props.img});
      background-size: cover;
      background-position: center;
    }
    &cardGroup {
      padding: 8.4rem 4rem;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
      grid-column-gap: 5.2rem;
      grid-row-gap: 3.8rem;
      justify-items: center;
      background-color: white;
    }
  }
`;

export default Home;
