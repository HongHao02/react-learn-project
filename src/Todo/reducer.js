import { SET_JOB, ADD_JOB, DELETE_JOB, SET_CHECKED, CLEAR_CHECKED, DONE_JOB } from "./constants"
import { repalaceIndex } from "./action"

//1.initial state
export const initState = {
    job: '',
    jobs: [],

    checked: []
}

//3.Reducer
const reducer = (state, action) => {
    switch (action.type) {

        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }


        case ADD_JOB:
            // newState = {
            //     ...state,
            //     jobs: [...state.jobs, action.payload]
            // }
            if (action.payload) {
                return {
                    ...state,
                    jobs: [...state.jobs, action.payload]
                }
            } else {
                alert("You must enter your task before adding!")
                return { ...state }
            }

        case DELETE_JOB:
            // const confirmDelete = window.confirm("Are you sure to delete?")
            // if (confirmDelete) {
            //     let tempState = {
            //         ...state,
            //     }

            //     tempState.jobs.splice(action.payload, 1)
            //     return tempState
            // } else {
            //     return { ...state }
            // }
            let tempState = {
                ...state
            }
            
            tempState.jobs.splice(action.payload, 1)
            return tempState

        case SET_CHECKED:
            let isChecked = state.checked.includes(action.payload)
            if (isChecked) {
                //uncheck
                return {
                    ...state,
                    checked: state.checked.filter(item => item !== action.payload)
                }
            } else {
                //check
                return {
                    ...state,
                    checked: [...state.checked, action.payload]
                }
            }

        case CLEAR_CHECKED:
            return {
                ...state,
                checked: []
            }

        case DONE_JOB:

            //Xuất hiện lỗi do khi ta xóa thì index của mảng xẽ được cập nhật lại và lúc đó khi ta splice sẽ hiểu lầm về index cần xóa
            // for (let i in action.payload) {
            //     newState.jobs.splice(i, 1)
            // }
            let tempArr = [...state.jobs]
            for (let i of action.payload) {
                console.log("VALUE_i ", i)
                repalaceIndex(tempArr, i, '')
            }

            return {
                ...state,
                checked: [],
                jobs: [...tempArr.filter(item => item !== '')]
            }

        default: throw new Error('Invalid type!')

    }

}

export default reducer;