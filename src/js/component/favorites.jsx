import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'


export const Favorites = () => {
  const { store, actions } = useContext(Context);

  const handlerCurrentDetails = (data) => {
    actions.saveCurrentData(data);
  };

  function deleteFavorite(fav) {
    actions.deleteFavorite(fav);
  }
  return (
    <>
    {store.Favorites.length === 0 && <span>(empty!)</span>}
      {store.Favorites.map((favorite) => {
        return (
          <div className="col m-2" key={favorite.id}>
            <div className="card mt-4">
              <div class="card-body">
                <h5
                  onClick={() => handlerCurrentDetails(favorite)}
                  class="card-title"
                >
                  {favorite.name}
                </h5>
                <p class="card-text"></p>

                <button
                  onClick={() => deleteFavorite(favorite)}
                  className="btn btn-outline-primary btn-lg d-flex justify-content-start"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
