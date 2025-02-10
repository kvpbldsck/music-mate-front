import React, { createContext, useReducer, useContext, useEffect } from "react";
const AppContext = createContext();
const initialState = { theme: localStorage.getItem("theme") || 'light'} ;

function reducer(state, action) {
  switch(action.type) {
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { ...state, theme: newTheme};
      default: 
      return state; 
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState); 

  useEffect(() => {
    document.body.className = state.theme + "-theme"; 
  }, [state.theme]);

  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext); 