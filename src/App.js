import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./page/Home";
import Footer from "./component/Footer";
import Attraction from "./page/Attraction";
import { Route, Switch, Redirect } from "react-router-dom";
import { dataHandle } from "./util/dataHandle";
import Navbar from "./component/Navbar";

const App = () => {
  const [travelData, setTravelData] = useState([]);

  async function fetchAttraction() {
    const result = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.travel.taipei/open-api/zh-tw/Attractions/All",
      {
        headers: new Headers({
          accept: "application/json"
        })
      }
    );
    const data = await result.json();
    return data;
  }

  useEffect(() => {
    fetchAttraction()
      .then(result => {
        setTravelData(dataHandle(result.data));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home travelData={travelData} />
        </Route>
        <Route path="/:id" exact>
          <Attraction travelData={travelData} />
        </Route>
        <Redirect to="/" exact />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
