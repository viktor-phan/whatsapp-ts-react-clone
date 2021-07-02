import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext({});
interface myProp {
  reducer: any;
  initialState: any;
  children: any;
}
export function StateProvider({ reducer, initialState, children }: myProp) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateValue = () => useContext(StateContext);
