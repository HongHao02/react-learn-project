import { useState,createContext } from "react";

//Tạo context và provider
//Context
//CompA=>CompB=>CompC

//1. Create context
//2. Provider (ôm component cha)
//3. Consumer


const ThemeContext= createContext()

function ThemeProvider({ children }){
    const  [theme,setTheme]= useState('dark')
    const toggleTheme=()=>{
        setTheme(theme=== 'dark'?'light':'dark')
    }
    const value={
        theme,
        toggleTheme
    }
    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext,ThemeProvider}
