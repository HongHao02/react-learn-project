

import { useContext, useEffect, useState } from 'react';
import Content from './Content';
import TestUseEffect from './TestUseEffect';
import TestUseLayoutEffect from './TestUseLayoutEffect';
import TestUseRef from './TestUseRef';
import TestUseMemo from './TestUseMemo';
import TestUseMemoP from './TestUseMemoP';
import TestUseCallbackP from './TestUseCallbackP'
import TestUseMemoHook from './TestUseMemoHook';
import TestUseReducer from './TestUseReducer';
import ToDoApp from './ToDoApp';
import ToDoAppContent from './Todo';

import './App.css'

import { ThemeContext } from './ThemeContext';
import ParagrapContent from './ParagrapContent'

import { ThemeContext2 } from './TestContext/ThemeContext2';
import ParentsP from './TestContext/ParentsP';

//Global state
// import { StoreContext } from './store';

//Sau khi da custom useStore hook
import { useStore, actions } from './store';
import { useRef } from 'react';

//useImpresive
import { Video } from './useImpresive';

//CSS module
//Heading folder and Paragrap folder
import Heading from './Heading';
import Paragrap from './Paragrap/index';

//GlobalStyle
import GlobalStyle from './GlobalStyle/GlobalStyle';


//CLSX and classname
import Button from './CLSX/index'

/*-------------------------------------HOOKS: useState*/
const orders = [100, 200, 300, 500]
/*CODE NHÀ LÀM_INITIALS*/
// function App() {
//   const [total, setTotal] = useState(() => {
//     /*Dạng đầy đủ*/
//     // let total = orders.reduce((total, cur) => {
//     //   return total+cur
//     // }
//     /*Dạng viết tắt*/
//     let total = orders.reduce((total, cur) =>
//       total + cur
//     )
//     console.log(total)
//     return total;
//   }
//   )
//   const handelIncrease = () => {
//     setTotal(prev => prev + 1)
//   }


//   return (
//     <div className="App" style={{ padding: 20 }}>
//       <h1>{total}</h1>
//       <button onClick={handelIncrease}>Inscrease</button>
//     </div>
//   );

// }

/*CODE NHÀ LÀM_SET STATE*/
// function App(){
//   const [info, setInfo]=useState({
//     name:"Nguyễn Văn A",
//     age:20,
//     address:"Cần Thơ"
//   })

//   console.log(info)

//   const handelClick=()=>{
//     setInfo({
//       ...info,
//       bio:"Yêu con heo con"
//     })
//   }
//   return(
//     <div className='App'>
//       <h1>{JSON.stringify(info)}</h1>
//       <button onClick={handelClick}>Change</button>
//     </div>
//   )
// }

/*INITIAL STATE DUNG CALLBACK*/
// function App() {
//   const [counter,setCounter]=useState(()=>{
//     const total=orders.reduce((total,currentValue)=>
//       total+currentValue
//     )
//     console.log(total)

//     return total;
//   })

//   const handelIncrease=()=>{
//     setCounter(prevState=>prevState+1)
//   }
//   console.log("re-render...")
//   return (
//     <div className="App" style={{padding:20}}>
//       <h1>{counter}</h1>
//       <button onClick={handelIncrease}>Inscrease</button>
//     </div>
//   );
// }

/*SET STATE LA THAY THE STATE BANG GIA TRI MOI*/
// function App() {
//   const [info, setInfo] = useState({
//     name: "Nguyen Van A",
//     age: 20,
//     address: "Ninh Kieu.Tp.Can Tho"
//   })

//   const handelIncrease = () => {

//     //CÁCH DÙNG SAI (SET STATE LÀ CẬP NHẬT LẠI STATE)
//     // setInfo({
//     //   bio: "Yêu màu cam và ghét tham lam"
//     // })
//     //cách 1: dùng toán tử spread: rải phần tử
//     setInfo({
//       ...info,
//       bio:"yeu mau hong"
//     })

//     //cách 2: dùng prev để backup dữ liệu
//     // setInfo(prev => {
//     //   //Sử lý logic ở đây...

//     //   return {
//     //     ...prev,
//     //     bio: 'Yêu màu xanh'
//     //   }
//     // })
//   }
//   console.log("re-render...")
//   return (
//     <div className="App" style={{ padding: 20 }}>
//       <h1>{JSON.stringify(info)}</h1>
//       <button onClick={handelIncrease}>Inscrease</button>
//     </div>
//   );
// }

/*----randomGifts*/
// const gifts=[
//   'CPU i9',
//   'RAM 32GB RGB',
//   'RBG Keyboard',
//   'RGB Speaker Logitech'
// ]

// function App(){
//   const [gift,setGift]=useState()
//   const giftLength=gifts.length;
//   const handelRandomGift=()=>{
//     const index=Math.floor(Math.random()*giftLength);
//     setGift(gifts[index])

//   }

//   return(
//     <div className='App'>
//       <h1>{gift || 'You dont have any gift now'}</h1>
//       <button onClick={handelRandomGift}>Claim now!</button>
//     </div>
//   )
// }

/*-----------------------------TWO WAY BINDING*/
//Hiển thị dữ liệu khi có thay đổi trong cả componet và UI
//ONE WAY BINDING
// function App(){
//   const [name,setName]= useState('')
//   const [email,setEmail]= useState('')

//   const handelSubmit=()=>{

//     setName('Nguyen Van BBB')
//     console.log(
//       {
//         name: name,
//         email:email
//       }
//     )
//   }
//   return(
//     <div className='App' style={{padding:30}}>
//       <input  onChange={e=>setName(e.target.value)}/>
//       <input  onChange={e=>setEmail(e.target.value)}/>
//       <button onClick={handelSubmit}>Register</button>
//     </div>
//   )
// }
//TWO WAY BINDING (input)
// function App(){
//   const [name,setName]= useState('')
//   const [email,setEmail]= useState('')

//   const handelSubmit=()=>{
//     setName('Nguyen Van BBB')
//     console.log(
//       {
//         name: name,
//         email:email
//       }
//     )
//   }
//   return(
//     <div className='App' style={{padding:30}}>
//       <input value={name} onChange={e=>setName(e.target.value)}/>
//       <input value={email} onChange={e=>setEmail(e.target.value)}/>
//       <button onClick={handelSubmit}>Register</button>
//     </div>
//   )
// }

//NHÀ LÀM TWB INPUT
// function App(){
//   const [name,setName]= useState('')
//   const [email,setEmail]= useState('')

//   const handleSubmit=()=>{
//     setName('Nguyen Van B')
//     console.log({name:name,
//     email:email})
//   }
//   console.log({
//     name:name,
//     email:email
//   })
//   return(
//     <div className='App'>
//       <input value={name} type="text" 
//       placeholder='Enter your name here'
//       onChange={e=>setName(e.target.value)}
//       />
//       <input value={email} type="text" 
//       placeholder='Enter your Email here'
//       onChange={e=>setEmail(e.target.value)}/>
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   )

// }

//TWO WAY BINDING (RADIO)
const courses = [
  {
    id: 1,
    name: 'JavaScript'
  },
  {
    id: 2,
    name: 'JavaScript basic'
  },
  {
    id: 3,
    name: 'JavaScript advanced'
  },
  {
    id: 4,
    name: 'ReactJS'
  }
]

// function App(){
//   const [checked, setChecked]= useState(2)
//   console.log(checked)

//   const handelSubmit=()=>{
//     //call API
//     console.log({id:checked})

//   }
//   return(
//     <div className='App' style={{padding:30}}>

//         {courses.map(course=>(
//           <div key={course.id}>
//             <input  
//             type='radio' 
//             checked={checked===course.id}
//             onChange={()=>setChecked(course.id)}/>{course.name}
//           </div>
//         ))

//         }

//       <button onClick={handelSubmit}>Register</button>
//     </div>
//   )
// }
//NHÀ LÀM TWB RADIO
// function App(){
//   const [checked,setChecked]=useState(2)

//   const handleSubmit=()=>{
//     console.log(checked)
//   }
//   return(
//     <div className='App'>
//       {
//         courses.map((course)=>(
//           <div key={course.id}>
//             <input type="radio" 
//             checked={course.id===checked}
//             onChange={()=>{
//               setChecked(course.id)
//             }}
//             />{course.name}
//           </div>
//         ))
//       }
//       <button onClick={handleSubmit}>Register</button>

//     </div>
//   )
// }
//TWO WAY BINDING (CHECKBOX)
// function App(){
//   const [checked, setChecked]= useState([])

//   console.log(checked)
//   const handleCheck=(id)=>{
//     setChecked(prev=>{
//       const isChecked= checked.includes(id);
//       if(isChecked){
//         //unCheck
//         return checked.filter(item=>item!==id)
//       }else{
//         return [...prev,id]
//       }
//     })
//   }

//   const handelSubmit=()=>{
//     //call API
//     //Đơn giản hóa việc triển khai dữ liệu (gửi thẳng dữ liệu lên API)
//     console.log({ids:checked})

//   }
//   return(
//     <div className='App' style={{padding:30}}>

//         {courses.map(course=>(
//           <div key={course.id}>
//             <input  
//             type='checkbox' 
//             checked={checked.includes(course.id)}
//             //Mục đích lồng hàm cấp cha là để truyền dc đối số id
//             onChange={()=>handleCheck(course.id)}
//             />{course.name}
//           </div>
//         ))

//         }

//       <button onClick={handelSubmit}>Register</button>
//     </div>
//   )
// }
//NHÀ LÀM  TWB CHECKBOX
// function App(){
//   const [checked,setChecked]=useState([])
//   const handleChecked=(id)=>{
//     setChecked((prev)=>{
//       const isChecked=checked.includes(id);
//     if(isChecked){
//       //unCheck
//       //Kiểm tra xem id này có nằm trong check không,Nếu có điều đó có nghĩa là
//       //checkbox này đang được click vào (do nó đang được sử dụng onChange)
//       return checked.filter((item)=>item!==id)
//     }else{
//       //check
//       return [...prev,id]
//     }
//     })
//   }
//   console.log({id:checked})
//   const handleSubmit=()=>{
//     console.log({id:checked})
//   }

//   return(
//     <div className='App'>
//       {courses.map((course)=>(
//         <div key={course.id}>
//           <input
//           type='checkbox'
//           checked={checked.includes(course.id)}
//           onChange={()=>handleChecked(course.id)}
//         />{course.name}
//         </div>
//       ))}

//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   )
// }

/*---------------------TODO LIST*/
// function App(){
//   //Lấy dữ liệu từ localStorage
//   //Ta phải lưu ý dòng này vì nếu ban đầu dữ liệu trong localStorage là 
//   //null thì sẽ báo lỗi ở lần đầu setInitial
//   //Ta sử dụng toán tử `??` để nếu giá trị đằng trước là undefined hoặc null thì sẽ lấy thằng đằng sau

//   //Trong đoạn này ta vẫn lãng phí 1 lần render của JSON.parse( giải quyết đưa nó vào initial)
//   // const storageJobs=JSON.parse(localStorage.getItem('jobs')) 
//   //CHECKBOX
//   const [job,setJob]= useState('')
//   //Ta đưa vào initialState cho chúng chỉ render 1 lần
//   const [jobs,setJobs]= useState(()=>{
//     const storageJobs=JSON.parse(localStorage.getItem('jobs')) 
//     console.log(storageJobs)
//     //Dùng toán tử nullish `??` cho việc return về mặc định [] nếu localStorage null or undifined
//     return storageJobs ?? [];
//   })
//   const handleSubmit=()=>{
//     //Chuyển mảng về JSON để lưu trữ và set lại JOBS
//     setJobs(prev=>{
//       const newJobs=[...prev,job]
//       const jsonJobs=JSON.stringify(newJobs);
//       localStorage.setItem('jobs',jsonJobs)
//       return newJobs;
//     })
//     setJob('')
//   }
//   const handleDelete=()=>{

//   }
//   console.log(job)
//   return(
//     <div className='App'>
//       <input value={job} type="text"
//       onChange={e=>setJob(e.target.value)} 
//     placeholder='Enter your task need to do here'
//     />

//     <button onClick={handleSubmit}>Add</button>
//     <button onClick={handleDelete}>Delete</button>
//     <ul>
//       {jobs.map((job,index)=>
//         (<div>
//           <li key={index}><input type="checkbox" 
//           />{job}</li>

//         </div>)
//       )}
//     </ul>
//     </div>
//   )
// }

/*---------------------MOUNTED and UNMOUNTED*/
function App() {
  //Set trang thai hien thi ban dau la false `chua hien thi`
  const [show, setShow] = useState(false)
  // const themeContext=useContext(ThemeContext)
  const ThemeContext = useContext(ThemeContext2)


  //Global state
  // const [state,dispatch]= useContext(StoreContext)
  // console.log(state)

  //Sau khi custom hook
  const [state, dispatch] = useStore()
  console.log(state)

  const { todos, todoInput } = state
  const inputRef = useRef()
  // console.log('todoInput: ', todoInput)

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodoInput(''))

    inputRef.current.focus()
  }
  const handleDelete = (index) => {
    dispatch(actions.deleteTodo(index))
    inputRef.current.focus()
  }
  ///---end global state

  //useImpresive
  const videoRef = useRef()
  useEffect(() => {
    console.log(videoRef.current)
  })
  const handlePlay = () => {
    videoRef.current.play()
  }
  const handlePause = () => {
    videoRef.current.pause()
  }

  return (

    // <div className='App'>
    //   <button onClick={() => setShow(!show)}>Toggle</button>
    //   {/* {show && <Content/>} */}
    //   {/* {show && <TestUseLayoutEffect/>} */}
    //   {/* {show && <TestUseRef/>} */}
    //   {/* {show && <TestUseMemoP/>} */}
    //   {/* {show && <TestUseCallbackP/>} */}
    //   {/* {show && <TestUseMemoHook/>} */}
    //   {/* {show && <TestUseReducer/>} */}
    //   {/* {show && <ToDoApp/>} */}
    //   {/* {show && <ToDoAppContent />} */}

    // </div>

    ///FOR TEST CONTEXT
    // <div className='App'>
    //   <button onClick={themeContext.toggleTheme}>Toggle</button>
    //   <ParagrapContent/>
    // </div>

    ///GLOBAL STATE WITH TODOAPP

    // <div className='App'>
    //   <h1>TODOAPP</h1>
    //   <input type="text"
    //     ref={inputRef}
    //     value={todoInput}
    //     placeholder="Enter your task..."
    //     onChange={e => {
    //       dispatch(actions.setTodoInput(e.target.value))
    //     }} />

    //   <button onClick={handleAdd}>ADD</button>
    //   <ul>
    //     {todos.map((todo, index) => (
    //       <li key={index}>{todo}
    //         <span onClick={ handleDelete(index)}>&times;</span>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    //useImpresive
    // <div>
    //   <Video ref={videoRef}/>
    //   <button onClick={handlePlay}>Play</button>
    //   <button onClick={handlePause}>Pause</button>
    // </div>

    //CSS module
    // <div>
    //   <Heading/>
    //   <Paragrap/>
    // </div>

    //GlobalStyle
    // <div>
    //   <GlobalStyle>
    //     <Heading />
    //     <Paragrap />

    //     <div className='d-flex'>
    //       <div>Item 1</div>
    //       <div>Item 2</div>
    //     </div>
    //   </GlobalStyle>
    // </div>

    //CLSX
    <div>
      <Button primary test={'t'}/>
      <Button secondary/>
      <Button disabled/>
    </div>

  )
}

export default App;
