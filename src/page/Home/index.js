import React from "react";
import Card from "../../component/Card";
import Loader from "../../component/Loader";
import "./style.css";

const Home = props => {
  const data = props.travelData;
  const { likeArr, likeToggle } = props;

  function renderCardgroup() {
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
    return <section className="home--cardGroup">{dataArr}</section>;
  }

  return (
    <main>
      <header className="home--header">台北市旅遊景點</header>
      {data.length > 0 ? renderCardgroup() : <Loader />}
    </main>
  );
};

export default Home;
