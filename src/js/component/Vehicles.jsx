import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons'

export const Vehicles = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  const handlerCurrentVehicleDetails = (planetData) => {
    actions.saveCurrentData(planetData);
    navigate("/details");
  };
  
  function addFavorite(fav) {
    actions.addFavorite(fav)
  }
  return (
    <>
      {store.vehicles.map((vehicle) => {
        return (
          <div className="col m-2" key={vehicle.id}>
            <div className="card mt-4">
              <div class="card-body">
                <h5 class="card-title">{vehicle.name}</h5>
                <p class="card-text">
                  <img
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${
                      vehicle.url.split("/")[5]
                    }.jpg`}
                    alt="aqui esta la imagen"
                    width="220px"
                  />
                  <div className="p-3">Model:{vehicle.model}</div>
                  <div className="p-3"> Passangers: {vehicle.passengers}</div>
                  <div className="p-3">
                    {" "}
                    Manufacturer: {vehicle.manufacturer}
                  </div>
                </p>
                <div className="d-flex justify-content-between">
                  <Link
                    to={
                      "/details/" +
                      vehicle.url.split("/")[4] +
                      "/" +
                      vehicle.url.split("/")[5]
                    }
                  >
                    <button
                      onClick={() => handlerCurrentVehicleDetails(vehicle)}
                      className="btn btn-outline-primary d-flex justify-content-start "
                    >
                      Learn more!
                    </button>
                  </Link>
                  <Link>
                    <button
                      className="btn btn-outline-danger d-flex justify-content-start"
                      onClick={() => addFavorite(vehicle)}
                    >
                      <FontAwesomeIcon icon={faHeartCirclePlus } />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
