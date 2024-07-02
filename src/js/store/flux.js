const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      People: [],
      planets: [],
      vehicles: [],
      apiUrl: "https://swapi.dev/api",
      currentCharacterDetails: {},
      Favorites: [],
    },
    actions: {
      getCharactersList: async () => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiUrl}/people`);

          if (!response.ok) {
            throw new Error("No se puede cargar");
          }
          const data = await response.json();
          console.log(data)
          setStore({ People: data.results });
        } catch (error) {
          console.log(error);
        }
      },
      getPlanetList: async () => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiUrl}/planets`);

          if (!response.ok) {
            throw new Error("No se puede cargar");
          }
          const data = await response.json();
         console.log(data)
          setStore({ planets: data.results });
        } catch (error) {
          console.log(error);
        }
      },
      getVehiclesList: async () => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiUrl}/vehicles`);

          if (!response.ok) {
            throw new Error("No se puede cargar");
          }
          const data = await response.json();
          console.log(data)
          setStore({ vehicles: data.results });
        } catch (error) {
          console.log(error);
        }
      },
      saveCurrentData: (data) => {
        const store = getStore();
        setStore({ ...store, currentCharacterDetails: data });
        
      },

      addFavorite: async (fav) => {
        const store = getStore();
        const newFavorites = store.Favorites.filter(
          (favorite) => favorite.name !== fav.name
        );
        setStore({
          Favorites: [...newFavorites, fav],
        });
      },

      deleteFavorite: async (fav) => {
        const store = getStore();
        const newFavorites = store.Favorites.filter(
          (favorite) => favorite.name !== fav.name
        );
        setStore({
          Favorites: newFavorites,
        });
      },
    },
  };
};

export default getState;
