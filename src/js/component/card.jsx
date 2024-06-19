import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Card = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      {store.people.map((person) => {
        return (
          
            <p>{person.name}</p>
          
        );
      })}
    </>
  );
};
