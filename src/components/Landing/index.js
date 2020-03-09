import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import MainMovie from "../MainMovie";
import MovieDetail from "../MovieDetail";

const LandingPage = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route exact path='/' component={MainMovie} />
        <Route path='/:MovieId' component={MovieDetail} />
      </div>
    </BrowserRouter>
  );
};
export default LandingPage;
