import { SET_JOB,ADD_JOB,DELETE_JOB,SET_CHECKED,CLEAR_CHECKED,DONE_JOB } from "./constants"
export const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}
export const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}
export const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}
export const setChecked = payload => {
    return {
        type: SET_CHECKED,
        payload
    }
}
export const clearChecked = payload => {
    return {
        type: CLEAR_CHECKED,
        payload
    }
}
export const doneJob = payload => {
    return {
        type: DONE_JOB,
        payload
    }
}

function repalaceIndex(arr,index,newValue){
    if (index >= 0 && index < arr.length) {
        console.log('INDEX_prev ',arr[index])
        arr.splice(index, 1, newValue);
        console.log('INDEX_new ',arr[index])
    }
}
export {repalaceIndex}