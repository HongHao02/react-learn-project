import { createContext } from "react";
import { useState } from "react";


const ThemeContext2= createContext()

function ThemeProvider2({children}){
    const [theme, setTheme]= useState('dark')
    const toggleTheme=()=>{
        setTheme(theme==='dark'?'light':'dark')
    }
    const value={
        theme,
        toggleTheme
    }
    return(
        <ThemeContext2.Provider value={value}>
            {children}
        </ThemeContext2.Provider>
    )
}

export {ThemeContext2, ThemeProvider2}