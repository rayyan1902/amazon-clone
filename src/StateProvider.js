import React, {createContext, useContext, useReducer} from "react";

//Prepares the dataLayer
export const StateContext = createContext();


//Wrap our app and provide the Data layer to every component inside our app
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);


//Pull information from Data layer
export const useStateValue = () => useContext(StateContext);

//So that every component can get access to Data layer



//initialState is what data looks like originally and reducer is what we can manipulate data to look like