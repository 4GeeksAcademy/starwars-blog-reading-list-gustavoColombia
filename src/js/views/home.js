import React from "react";
import "../../styles/home.css";
import { People } from "../component/People.jsx";
import { Vehicles } from "../component/Vehicles.jsx";
import { Planets } from "../component/Planets.jsx";

export const Home = () => {
  return (
    <div className="container">
      <h2>
        <span className="display-6 text-light mt-2">Personajes</span>
      </h2>
      <div className="d-flex overflow-auto">
        <People />
      </div>
      <h2 className="display-5 text-light mt-4">Vehicles</h2>
      <div className="d-flex overflow-auto">
        <Vehicles />
      </div>
      <h2 className="display-6 text-light mt-4">Planets</h2>
      <div className="d-flex overflow-auto">
        <Planets />
      </div>
    </div>
  );
};
