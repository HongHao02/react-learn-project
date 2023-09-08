import { useContext } from "react";
import { ThemeContext2 } from "./ThemeContext2";

function P(){
    const themeContext=useContext(ThemeContext2)
    return(
        <p className={themeContext.theme}>This is paragrap uses context to change this light/dark mode</p>
    )
}
export default P