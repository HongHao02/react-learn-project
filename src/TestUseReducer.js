import { useState,useReducer } from "react";
//Cung cấp một lựa chọn khác cho việc dùng state
//useState(): sủ dụng cho trường hợp state có kiểu dữ liệu nguyên thủy, array,object một cấp
//useReducer(): 
//Viết code phức tạp thành ngắn gọn hơn
//Dùng cho trường hợp phức tạp hơn. array (có object con), obj (có obj con), nhiều state


//useState
/**
 * 1.Initial state: 0
 * 2.Action: Up (state +1) / Down (state -1)
*/
//useReducer
/**
 * 1.Initial state: 0
 * 2.Action: Up (state + 1) / Down (state -1)
 * 3.Reducer
 * 4.Dispatch
*/
//Init state
const initState=0
// //Actions
const UP_ACTION='up'
const DOWN_ACTION='down'
//Reducer
const reducer=(state,action)=>{
    console.log('reducer is running...')
    switch(action){
        case UP_ACTION:return state+1
        case DOWN_ACTION:return state-1
        default:throw new Error('Invalid action')
    }
}
//Dispatch


//Dùng useState
// function TestUseReducer(){
//     const [count,setCount]= useState(0)
//     return(
//         <div style={{padding:'0 20px'}}>
//             <h1>{count}</h1>
//             <button onClick={()=>setCount(count-1)}>
//                 Down
//             </button>
//             <button onClick={()=>setCount(count+1)}>
//                 Up
//             </button>
//         </div>
//     )
// }

//Dùng useReducer
function TestUseReducer(){
    const [count, dispatch]= useReducer(reducer, initState)
    return(
        <div style={{padding:'0 20px'}}>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(DOWN_ACTION)}>
                Down
            </button>
            <button onClick={()=>dispatch(UP_ACTION)}>
                Up
            </button>
        </div>
    )
}


export default TestUseReducer;