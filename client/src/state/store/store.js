import React, { createContext, useReducer } from "react";
import { reducer } from "../reducers/reducer";

// const initialState = {

//   nodes: [
//     {
//       id: "0",
//       color: "red",
//       symbolType: "diamond",
//       size: 300,
//     },
//     { id: "1" },
//     { id: "2" },
//     { id: "3" },
//     { id: "4" },
//   ],
//   links: [
//     { source: "0", target: "1" },
//     { source: "1", target: "2", label: "dddddds" },
//     { source: "3", target: "0", label: "dddddds" },
//     { source: "4", target: "1" },
//   ],
// };
const initialState = {
  nodes: [
    {
      id: "1",
      color: "#0079ff",
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500),
      size: 400,
    },
  ],
  links: [],
};
export const GraphContext = createContext();

export const GraphProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GraphContext.Provider value={{ state, dispatch }}>
      {children}
    </GraphContext.Provider>
  );
};
