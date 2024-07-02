import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartCirclePlus} from '@fortawesome/free-solid-svg-icons'


export const Planets = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  const handlerCurrentPlanetDetails = (planetData) => {
    actions.saveCurrentData(planetData);
    navigate("/details");
  };
  
  function addFavorite(fav) {
    actions.addFavorite(fav)
  }
  return (
    <>
      {store.planets.map((planet, index) => {
        return (
            
            <div className="col m-2" key= {planet.id}>
            
              <div className="card mt-4">
                <div class="card-body">
                 <h5 class="card-title">{planet.name}</h5>
                  <p class="card-text">
                    <img
                      src={`https://starwars-visualguide.com/assets/img/planets/${index + 2}.jpg`}
                      alt="aqui esta la imagen"
                      width="220px"
                    />
                    <div className="p-3">Period:{planet.orbital_period}</div>
             <div className="p-3"> Population: {planet.population}</div>
                 <div className="p-3"> Gravity: {planet.gravity}</div>
                  </p>
                  <div className="d-flex justify-content-between">
                  <Link
                    to={
                      "/details/" +
                      planet.url.split("/")[4] +
                      "/" +
                      planet.url.split("/")[5]
                    }
                  >
                    <button
                      onClick={() => handlerCurrentPlanetDetails(planet)}
                      className="btn btn-outline-primary d-flex justify-content-start "
                    >
                      Learn more!
                    </button>
                  </Link>
                  <Link>
                    <button
                      className="btn btn-outline-danger d-flex justify-content-start"
                      onClick={() => addFavorite(planet)}
                    >
                      <FontAwesomeIcon icon={faHeartCirclePlus} />
                    </button>
                  </Link>
                </div>
               </div>
              </div>
             </div>
          
        );
      })}
    </>
  )};

