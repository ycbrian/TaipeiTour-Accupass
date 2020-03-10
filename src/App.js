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

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://www.travel.taipei/open-api/zh-tw/Attractions/All",
      {
        headers: new Headers({
          accept: "application/json"
        })
      }
    )
      .then(response => {
        // console.log(response);
        return response.json();
      })
      .then(result => {
        // console.log(result.data);
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
