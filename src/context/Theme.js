import React, { createContext, useState } from "react";

const ThemeContext = createContext()

function ThemeProvider({children}){
    const [theme, setTheme] = useState()
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}