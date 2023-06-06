import React from 'react'
import { createContext, useState, useEffect } from 'react'


export function ThemeContextProvider(props) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(()=>{
    const theme = localStorage.getItem('darkMode');
    if(theme){
        setDarkMode(JSON.parse(theme));
    }
  }, [] )

  return(
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export const ThemeContext = createContext();

