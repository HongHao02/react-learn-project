import { cleanup } from "@testing-library/react";
import { useEffect, useLayoutEffect, useState } from "react";

//useEffect
//1. Cập nhật lại state
//2. Cập nhật lại DOM (cập nhật lại 1 property nào đó trong DOM node -->mutated)
//3. Render lại UI
//4. Gọi cleanup nếu deps thay đôỉ
//5. Gọi useEffect callback

//useLayoutEffect (áp dụng cho những trường hợp hy hữu)
//1. Cập nhật lại state
//2. Cập nhật lại DOM (muted)
//3. Gọi cleanup nếu deps thay đổi (sync)
//4. Gọi useLayoutEffect callback (sync)
//5. Render lại UI

//Làm ứng dụng đếm chữ số đến số tối đa
//Trường hợp thường
// function TestUseLayoutEffect(){
//     const [count,setCount]= useState(1)
//     const handelClick=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handelClick}>RUN</button>
//         </div>
//     )
// }

//Vấn đề của useEffect
//Vấn đề nảy sinh khi useEffect thực hiện render UI trước sau đó mới thực hiện callback nên 
//sẽ xảy ra hiện tượng chớp nháy khi chuyển tiếp từ 3 qua 0
//Nếu là logic lớn hơn với lượng lớn dữ liệu thì sẽ xảy ra sai sót
// function TestUseLayoutEffect(){
//     const [count,setCount]= useState(0)
//     useEffect(()=>{
//         if(count > 3){
//             setCount(0)
//         }
//     },[count])
//     const handelClick=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handelClick}>RUN</button>
//         </div>
//     )
// }

//Sử dụng useLayoutEffect
//Thực hiện tương tự như useEffect chỉ khác thứ tự renderUI
//Giải thích về hiện tượng trên
/**
 * Duyệt qua useLayoutEffect callback sau đó render ra giao diện rồi gọi lại callback
 * Khi state thay đổi
 * Cập nhật lại state
 * Cập nhật DOM (nhưng khoan render)...Lúc này thẻ h1 đã có count=4 nhưng nó vẫn chưa render
 * Gọi cleanup và callback để thực hiện. Thực hiện cleanup trong trường hợp deps thay đổi
 * Lúc này có setSttate và có thay đổi deps nên re-render
 * Nó sẽ cập nhật lại state
 * Cập nhật lại DOM (thẻ h1 có count=0) 
 * Lại tiếp tục kiểm tra xem deps có thay đổi không thì lúc này deps đã không thay đôi thì tiến hành render ra UI nên không xảy ra nhấp nháyt
*/
function TestUseLayoutEffect(){
    const [count,setCount]= useState(0)
    useEffect(()=>{
        console.log("callback..."+" ",new Date().getMilliseconds())
        if(count > 3){
            setCount(0)
        }
        return()=>{
            console.log("cleanupfunction..."+" "+new Date().getMilliseconds())
        }
    },[count])
    console.log("re-render")
    const handelClick=()=>{
        setCount(count+1)
        console.log("count...",count)
    }
    return(
        <div>
            {console.log("rendering...")}
            <h1>{count}</h1>
            <button onClick={handelClick}>RUN</button>
        </div>
    )
}
export default TestUseLayoutEffect;