import reducer from "./reducer"

function logger(){
    return (preState,action)=>{
        console.group(action.type)
        console.log("PREV_STATE ",preState)
        console.log("ACTION ",action)
        const newState=reducer(preState,action)
        console.log("NEW_STATE ",newState)
        console.groupEnd()
        
        return newState
    }
}
export default logger;