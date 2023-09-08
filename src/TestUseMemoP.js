import { useState,useEffect } from "react";
import TestUseMemo from "./TestUseMemo";

//Mặc dù đã dùng useMemo
function TestUseMemoP(){
    const [count,setCount]= useState(0)
    const [count2,setCount2]= useState(0)
    
    return(
        <div>
            
            <TestUseMemo count={count2} />
            <h1>{count}</h1>
            <h2>{count2}</h2>
            <button onClick={()=>setCount(count+1)}>Click me 1</button>
            <button onClick={()=>setCount2(count2+1)}>Click me 2</button>
        </div>
    )
}
export default TestUseMemoP;