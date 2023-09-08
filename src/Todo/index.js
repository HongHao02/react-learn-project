//Todoapp with useReducer()
import { useReducer, useRef } from "react";
import {setJob,addJob,deleteJob,setChecked,clearChecked,doneJob} from "./action";
import reducer ,{initState} from "./reducer";
import logger from "./logger";
//1.Initial state
//2.Actions
//--->action.js
//3.Reducer
//4.Dispatch

function ToDoAppContent() {
    const [state, dispatch] = useReducer(logger(reducer), initState)
    const inputRef = useRef()
    const { job, jobs, checked } = state
    //---
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))

        inputRef.current.focus()
    }
    //Nên tách ra hàm riêng cho code clean
    const handleDelete = (index) => {
        dispatch(deleteJob(index))
    }
    // //---checkbox (làm theo kiểu useState)
    // const handleChecked = (index) => {
    //     console.log('index ', index)

    //     setChecked((pre) => {
    //         const isChecked = checked.includes(index)
    //         if (isChecked) {
    //             //uncheck
    //             return checked.filter(item => item !== index)
    //         } else {
    //             //check
    //             return [...pre, index]

    //         }
    //     })
    // }
    // const handleDeleteCheckbox = () => {
    //     dispatch(deleteCheckbox(checked))
    //     inputRef.current.focus()
    // }

    console.log('re-render')
    return (
        <div>
            {console.log('render...')}
            <h1>TODOAPP</h1>
            <input type="text"
                ref={inputRef}
                value={job}
                placeholder="Enter your task..."
                onChange={e => dispatch(setJob(e.target.value))}
            />
            <button onClick={handleSubmit}>ADD</button>
            <button onClick={() => dispatch(clearChecked(checked))}>CLEAR_CHECK</button>
            <button style={{ backgroundColor: 'green' }}
                onClick={() => dispatch(doneJob(checked))}>DONE</button>

            <ul>
                {jobs.map((job, index) => {
                    return (
                        <li key={index}>{job}
                            <span
                                style={{  cursor: 'pointer', color: 'red' ,fontSize:'20px'}}
                                onClick={() => handleDelete(index)}>&times;</span>
                            <input type="checkbox"

                                checked={checked.includes(index)}
                                onChange={() => dispatch(setChecked(index))} /></li>
                    )
                })}
            </ul>
        </div>
    )
}


export default ToDoAppContent;