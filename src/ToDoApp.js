//Todoapp with useReducer()
import { useReducer, useEffect, useRef, useState } from "react";
//Bài toán todoapp
/**START--->TODOAPP */
// //1.Init state
// const initState= {
//     job:'',
//     jobs:[]
// }

// //2.Actions
// const SET_JOB = 'set_job'
// const ADD_JOB= 'add_job'
// const DELETE_JOB= 'delete_job'

// const setJob=payload=>{
//     return{
//         type: SET_JOB,
//         payload
//     }
// }
// const addJob=payload=>{
//     return{
//         type:ADD_JOB,
//         payload
//     }
// }
// const deleteJob=payload=>{
//     return{
//         type:DELETE_JOB,
//         payload
//     }
// }


// //3.reducer
// const reducer=(state,action)=>{
//     console.log('Action: ',action)
//     console.log('Prev state: ',state)
//     let newState
//     switch(action.type){
//         case SET_JOB:
//             newState= {
//                 ...state,
//                 job:action.payload
//             }
//             break
//         case ADD_JOB:
//             newState={
//                 ...state,
//                 jobs:[...state.jobs,action.payload]
//             }
//             break
//         case DELETE_JOB:
//             const newJobs=[...state.jobs]
//             newJobs.splice(action.payload,1)

//             newState={
//                 ...state,
//                 jobs:newJobs
//             }
//             break

//         default:
//             throw new Error('Invalid action.')
//     }
//     console.log('New state: ',newState)
//     return newState
// }
// //4.dispatch


// function ToDoApp(){
//     const [state,dispatch]= useReducer(reducer, initState)
//     console.log(state)
//     // console.log('JOB: ',state.job,state.jobs)
//     //Dùng destructuring lấy ra {job,jobs} cho việc tính toán và truyền dữ liệu
//     const {job, jobs}= state
//     // console.log('JOB2: ',state)
//     const inputRef=useRef()
//     const handleSubmit=()=>{
//         dispatch(addJob(job))
//         dispatch(setJob(''))

//         inputRef.current.focus()
//     }
//     return(
//         <div style={{padding: '0 20px'}}>
//             <h3>TODO APP</h3>
//             <input type="text"
//             ref={inputRef}
//             value={job}
//             placeholder="Enter your job..." 
//             onChange={e=>{
//                 dispatch(setJob(e.target.value))

//             }}
//             />
//             <button onClick={handleSubmit}>ADD</button>
//             <ul>
//                 {jobs.map((job,index)=>(
//                     <li key={index}>
//                         {job}
//                         <span onClick={()=>dispatch(deleteJob(index))}>
//                             &times;
//                         </span>

//                     </li>
//                 ))}
//             </ul>

//         </div>
//     )
// }

/**END--->TODOAPP*/
//1.Initial state
const initState = {
    job: '',
    jobs: [],
    checked: []
}
//2.Actions
const ADD_JOB = 'add_job'
const SET_JOB = 'set_job'
const DELETE_JOB = 'delete_job'
const CLEAR_CHECKED = 'clear_checked'
const SET_CHECKED = 'set_checked'
const DONE_JOB = 'done_job'

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}
const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}
const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}
const setChecked = payload => {
    return {
        type: SET_CHECKED,
        payload
    }
}
const clearChecked = payload => {
    return {
        type: CLEAR_CHECKED,
        payload
    }
}
const doneJob = payload => {
    return {
        type: DONE_JOB,
        payload
    }
}


//3.Reducer
const reducer = (state, action) => {
    console.log('ACTION: ', action.type,action.payload)
    let newState
    switch (action.type) {

        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            console.log("PREV: ", state.job, state.jobs)
            break
        case ADD_JOB:
            // newState = {
            //     ...state,
            //     jobs: [...state.jobs, action.payload]
            // }
            if(action.payload){
                newState = {
                  ...state,
                  jobs: [...state.jobs, action.payload]
                }
              }else{
                alert("You must enter your task before adding!")
                newState={...state}
              }
            console.log("PREV: ", state.job, state.jobs)
            break
        case DELETE_JOB:
            const confirmDelete = window.confirm("Are you sure to delete?")
            if (confirmDelete) {
                newState = { ...state }
                newState.jobs.splice(action.payload, 1)
                console.log("PREV: ", state.job, state.jobs)
            }else{
                newState={...state}
            }
            break
        case SET_CHECKED:
            let isChecked = state.checked.includes(action.payload)
            if (isChecked) {
                //uncheck
                newState = {
                    ...state,
                    checked: state.checked.filter(item => item !== action.payload)
                }
            } else {
                //check
                newState = {
                    ...state,
                    checked: [...state.checked, action.payload]
                }
            }

            break
        case CLEAR_CHECKED:
            newState = {
                ...state,
                checked: []
            }
            break
        case DONE_JOB:

            newState = {
                ...state,
            }
            for (let i in action.payload) {
                newState.jobs.splice(i, 1)
            }
            newState.checked.splice(0, newState.checked.length)
            alert("CONGRATULATION!YOUR CHOOSEN JOB ARE DONE")
            break
        default: throw new Error('Invalid type!')

    }
    console.log('NEWSTATE: ', newState.job, newState.jobs);
    return newState;
}
//4.Dispatch


function ToDoApp() {
    const [state, dispatch] = useReducer(reducer, initState)
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
                                style={{ padding: '10px', cursor: 'pointer', color: 'red' }}
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


export default ToDoApp;