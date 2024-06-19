import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Card = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      {store.people.map((person) => {
        return (
            
            <div className="col-3" key= {person.id}>
              <h2>
                 <span className="badge text-bg-secondary">Personajes</span>
              </h2>
              <div className="card mt-4">
                <div class="card-body">
                 <h5 class="card-title">{person.name}</h5>
                  <p class="card-text">
                    <img
                      src={`https://starwars-visualguide.com/assets/img/characters/${
                        person.url.split("/")[5]
                       }.jpg`}
                      alt="aqui esta la imagen"
                      width="300px"
                    />
                    <div className="p-3">gander:{person.gender}</div>
             <div className="p-3"> hair_color: {person.hair_color}</div>
                 <div className="p-3">color: {person.eye_color}</div>
                  </p>
                  <button className="btn btn-outline-primary btn-lg d-flex justify-content-start">
                     Learn more!
                   </button>
               </div>
              </div>
             </div>
          
        );
      })}
    </>
  );
};
