/**
 * Created by jannevainio on 21/11/2021.
 */

import React, { useEffect, useState } from 'react';

const Store = React.createContext();
Store.displayName = 'Store';

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children }) => {

  const [lavaData, setLavaData] = useState([]);

  console.log("APP UPDATE");
  useEffect(() => {

    async function fetchMyAPI() {
      let response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1lPX9h_xT2eN5ed8lG5WdiiH4kphH4IRQlDLRU2qjft0/values/Asetukset?key=AIzaSyABZeUkblAHJB7s8jRlea4jitjuqtff5k0")

      response = await (response.json());
      console.log(response);
      const finalData = response.values;
      setLavaData(finalData);
    }

    fetchMyAPI()
  }, []);

  console.log("lavaData");
  console.log(lavaData);

  return (
    <Store.Provider value={{lavaData }}>{children}</Store.Provider>
  );
};
