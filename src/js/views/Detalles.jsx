import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Detalles = () => {
  const { store, actions } = useContext(Context);
  let details = store.currentCharacterDetails;
  return (
    <div>
      <h1>
        {details.url.split("/")[4] === "people" && (
          <div>
            <div className="container ">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={`https://starwars-visualguide.com/assets/img/characters/${
                        details.url.split("/")[5]
                      }.jpg`}
                      alt="aqui esta la imagen"
                      width="250px"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title display-3 h4 pb-2 mb-4 text-danger border-danger">
                        {details.name}
                      </h5>
                      <p className="card-text" style={{ fontSize: "2rem" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At aspernatur modi quis, ducimus repellat voluptate iure
                        vero, minima non praesentium natus quaerat ab, iste sint
                      </p>
                    </div>
                  </div>
                  <div class="h4 pb-2 mb-4 text-danger border-bottom border-danger"></div>
                  <div
                    className="container text-center"
                    style={{ fontSize: "2rem" }}
                  >
                    <div className="row h4 pb-2 mb-4 text-danger border-danger">
                      <div className="col">Name: {details.name}</div>
                      <div className="col">
                        Birth Year: {details.birth_year}
                      </div>
                      <div className="col">Gander: {details.gender}</div>
                      <div className="col">Height: {details.height}</div>
                      <div className="col">
                        Hair Color: {details.hair_color}
                      </div>
                      <div className="col">
                        Skin Color: {details.skin_color}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </h1>
      <h1>
        {details.url.split("/")[4] === "vehicles" && (
          <div>
            <div className="container ">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={`https://starwars-visualguide.com/assets/img/vehicles/${
                        details.url.split("/")[5]
                      }.jpg`}
                      alt="aqui esta la imagen"
                      width="250px"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title display-3 h4 pb-2 mb-4 text-danger border-danger">
                        {details.name}
                      </h5>
                      <p className="card-text" style={{ fontSize: "2rem" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At aspernatur modi quis, ducimus repellat voluptate iure
                        vero, minima non praesentium natus quaerat ab, iste sint
                      </p>
                    </div>
                  </div>
                  <div class="h4 pb-2 mb-4 text-danger border-bottom border-danger"></div>
                  <div
                    className="container text-center"
                    style={{ fontSize: "2rem" }}
                  >
                    <div className="row h4 pb-2 mb-4 text-danger border-danger">
                      <div className="col">Name: {details.name}</div>
                      <div className=" col">Crew: {details.crew}</div>
                      <div className=" col">Length: {details.length}</div>
                      <div className=" col">
                        Max_Atmosphering_Speed: {details.max_atmosphering_speed}
                      </div>
                      <div className=" col"> Model: {details.model}</div>
                      <div className="col">
                        Passengers : {details.passengers}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </h1>
      <h1>
        {details.url.split("/")[4] === "planets" && (
          <div>
            <div className="container ">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={`https://starwars-visualguide.com/assets/img/planets/${
                        details.url.split("/")[5]
                      }.jpg`}
                      alt="aqui esta la imagen"
                      width="250px"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title display-3 h4 pb-2 mb-4 text-danger border-danger">
                        {details.name}
                      </h5>
                      <p className="card-text" style={{ fontSize: "2rem" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At aspernatur modi quis, ducimus repellat voluptate iure
                        vero, minima non praesentium natus quaerat ab, iste sint
                      </p>
                    </div>
                  </div>
                  <div class="h4 pb-2 mb-4 text-danger border-bottom border-danger"></div>
                  <div
                    className="container text-center"
                    style={{ fontSize: "2rem" }}
                  >
                    <div className="row h4 pb-2 mb-4 text-danger border-danger">
                      <div className="col">Name: {details.name}</div>
                      <div className=" col">Climate: {details.climate}</div>
                      <div className=" col">
                        Population: {details.population}
                      </div>
                      <div className=" col">
                        Orbital Period: {details.orbital_period}
                      </div>
                      <div className=" col">
                        {" "}
                        Rotation Period: {details.rotation_period}
                      </div>
                      <div className="col">Diameter : {details.diameter}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </h1>
    </div>
  );
};
