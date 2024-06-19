import React from "react";
import "../../styles/home.css";
import {Card} from "../component/card.jsx";

export const Home = () => {
  return (
    <div className="container-fluid">
    <div className="row overflow-auto">
    <Card/>
    </div>
    </div>
  );
};
