import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound";
import ScoreBoard from "../components/ScoreBoard";
import StepperContainer from "../components/StepperContainer";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StepperContainer />} exact />
        <Route path="/score" element={<ScoreBoard />} exact />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Main;
