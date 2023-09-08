import TestUseCallback from "./TestUseCallback";
import { useState,useCallback } from "react";


//Mục đích của useCallback là tránh việc các Component re-render khong cần thiết mặc dù đã dùng useMemo
//useMemo sử dụng toán tử `===` để so sánh nên nếu có sự thay đổi trong props hoặc là tham chiếu
//ở kiểu dữ liệu tham chiếu (thì chúng cũng sẽ tính là true (là props có thay đổi))

//Nếu ta có truyền props là kiểu dữ liệu tham chiếu cho C con thì useMemo sẽ nhận định phạm vi tham chiếu đã thay đổi và sẽ sẽ re-render ==>Việc này
//không cần thiết

//==>Để khắc phục ta dùng useCallback để nếu mà không có deps thay đổi nó sẽ dùng tham chiếu ban đầu
function TestUseCallbackP(){
    const [count,setCount]=  useState(0)
    //Dùng lỗi vì mỗi lần C cha re-render nó lại tạo ra vùng tham chiếu mới cho handleIncrease
    // const handleIncrease=()=>{
    //     setCount(pre=>pre+1)
    // }
    const handleIncrease=useCallback(()=>{
        setCount(pre=>pre+1)
    },[])

    return(
        <div>
            <TestUseCallback onIncrease={handleIncrease}/>
            <h2>{count}</h2>
            <button onClick={handleIncrease}>Click me</button>
        </div>
    )
}
export default TestUseCallbackP;