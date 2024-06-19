const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      vehicles: [],
      apiUrl: "https://swapi.dev/api",
    },
    actions: {
      getCharactersList: async () => {
        const store = getStore();
        try {
          const response = await fetch(
            `${store.apiUrl}/people`
          
          );

          if (!response.ok) {
            throw new Error("No se puede cargar");
          }
          const data = await response.json();
          console.log(data.results);
          setStore({ people: data.results});
       
        } catch (error) {
          console.log(error);
        }
      },
      getPlanetList: async () => {
        const store = getStore();
        try {
          const response = await fetch(
            `${store.apiUrl}/planets`);

          if (!response.ok) {
            throw new Error("No se puede cargar");
          }
          const data = await response.json();
         
          setStore({ planets: data.results });
        } catch (error) {
          console.log(error);
        }
      },
      getVehiclesList: async () => {
        const store = getStore();
        try {
          const response = await fetch(
            `${store.apiUrl}/vehicles`);
          
          if (!response.ok) {
            throw new Error("No se puede cargar");
          }
          const data = await response.json();
       
          setStore({ vehicles: data.results });
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
