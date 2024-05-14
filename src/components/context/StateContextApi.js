import React, { createContext, useState } from "react";
import Movies from "../Movies/Movies";

export const StateContext = createContext([]);
const StateContextApi = () => {
  const [watchLater, setWatchLater] = useState([]);
  return (
    <div>
      <StateContext.Provider value={[watchLater, setWatchLater]}>
        <Movies></Movies>
      </StateContext.Provider>
    </div>
  );
};

export default StateContextApi;
