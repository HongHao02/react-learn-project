//useCallback
//1. memo()--> HOC
//2. useCallback()
    //- Reference types
    //- React memo()

import { memo } from "react"

function TestUseCallback({onIncrease}){
    return(
        <div>
            {console.log("re-render")}
            <h2>Hello anh em F8</h2>
            <button onClick={onIncrease}>Click me in ChildrenC!</button>

        </div>
    )
}
export default memo(TestUseCallback)