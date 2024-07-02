import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeartCirclePlus} from '@fortawesome/free-solid-svg-icons'

export const People = () => {
  const { store, actions } = useContext(Context);

  const handlerCurrentDetails = (data) => {
    actions.saveCurrentData(data);
  };

  function addFavorite(fav) {
    actions.addFavorite(fav);
  }

  return (
    <>
      {store.People.map((person) => {
        return (
          <div className="col m-2" key={person.id}>
            <div className="card mt-4">
              <div class="card-body">
                <h5 class="card-title">{person.name}</h5>
                <p class="card-text">
                  <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${
                      person.url.split("/")[5]
                    }.jpg`}
                    alt="aqui esta la imagen"
                    width="200px"
                  />
                  <div className="p-3">gander:{person.gender}</div>
                  <div className="p-3"> hair_color: {person.hair_color}</div>
                  <div className="p-3">color: {person.eye_color}</div>
                </p>
                <div className="d-flex justify-content-between">
                  <Link
                    to={
                      "/details/" +
                      person.url.split("/")[4] +
                      "/" +
                      person.url.split("/")[5]
                    }
                  >
                    <button
                      onClick={() => handlerCurrentDetails(person)}
                      className="btn btn-outline-primary d-flex justify-content-start "
                    >
                      Learn more!
                    </button>
                  </Link>
                  <Link>
                    <button
                      className="btn btn-outline-danger d-flex justify-content-start"
                      onClick={() => addFavorite(person)}
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
  );
};
