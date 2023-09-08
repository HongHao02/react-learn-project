//Lưu các tham trị tham chiếu qua một biến bên ngoài (FC)

import { useState, useRef, useEffect } from "react";

//Vấn đề ở đây là sau khi re-render thì phạm vi của các hàm là độc lập với nhau nên nếu ta bấm STOP
//Chậm hơn 1s thì sẽ clear được Interval nhưng nếu dài hơn thì lúc
//này sẽ không làm được nữa do phạm vi đã khác id đã khác và việc chúng ta clear 1 id không có sẽ không STOP được
//-->Nhưng nếu ta đưa let timerID ra khỏi FC thì nó lại vi phạm các quy ước của React
//---->Dùng useRef (tương tự như việc đưa timerID ra ngoài)

//Trường hợp dùng sai do phạm vi hàm sau mỗi lần re-render
// function TestUseRef() {
//     let timerID
//     const [count, setCount] = useState(60)

//     const handleStart = () => {
//         timerID = setInterval(() => {
//             setCount(pre=>pre-1)
//             console.log('START...',timerID)
//         }, 1000)
//     }
//     const handleStop = () => {
//         clearInterval(timerID)
//         console.log('STOP...',timerID)
//     }
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleStart}>Start</button>
//             <button onClick={handleStop}>Stop</button>
//         </div>
//     )
// }
//Trường hợp dùng với setInterval
function TestUseRef(){
    // let timerID;
    const [count,setCount]=useState(60)

    const timerID= useRef()
    //Trả về một object mang property là obj.current
    // console.log(timerID.current)
    const preCount=useRef()

    const h1Ref=useRef()
    //Lấy giá trị hiện tại và giá trị trước đó
    useEffect(()=>{
        preCount.current= count

    },[count])
    useEffect(()=>{
        //Lấy giá trị tọa độ thật (DOMReact) của h1Ref mỗi lần update
        const rect=h1Ref.current.getBoundingClientRect()

        console.log(rect)
    })

    const handleStart=()=>{
        if(timerID.current){

        }else{
            timerID.current=setInterval(()=>{

                setCount(pre=>pre-1)

            },3000)
            console.log('Start -> ',timerID.current)
        }
    }
    const handleStop=()=>{
        clearInterval(timerID.current)
        timerID.current=false
        console.log('Stop -> ',timerID.current)
    }
    //Đoạn này sau này được thực hiện các logic so sánh giá trị trước và sau
    console.log(count, preCount.current)
    return (
        <div>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

//Trường hợp dùng useRef làm tham chiếu đến DOM element
// function TestUseRef(){
//     const inputElement = useRef(null);

//   const handleClick = () => {
//     inputElement.current.focus();
//   };

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={handleClick}>Focus Input</button>
//     </>
//   );
// }
export default TestUseRef;