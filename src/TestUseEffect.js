import { useState, useEffect } from "react";
/*1.Update DOM*/
// function TestUseEffect(){
//     const [title,setTitle]=useState('')
//     useEffect(()=>{
//         document.title=title
//         console.log("callback...")
//     })
//     return(
//         <div>
//             <input type="text" value={title}
//             onChange={(e)=>setTitle(e.target.value)}/>
//             {console.log("rendering...")}
//         </div>
//     )
// }

/*2.Call API*/
//---CALL API Ở NGOÀI USE EFFECT

// function TestUseEffect() {

//     const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts => {
//             console.log({posts:posts})
//             setLists(posts)
//         })
//     const [type, setType] = useState('posts')
//     const [title, setTitle] = useState('')
//     const [lists,setLists]= useState([])

//     const handleSubmit=()=>{
//         console.log('sending data')
//         setTitle('')
//     }
//     return (
//         <div>
//             <input type="text" value={title}
//                 onChange={e => setTitle(e.target.value)} />
//             {tabs.map(tab => (
//                 <button key={tab}
//                 style={{backgroundColor: tab === type ? '#48CA40' : '#B6CDE4' }}
//                     onClick={() => setType(tab)}>{tab}</button>
//             ))}
//             <button onClick={handleSubmit}>Submit</button>
//             <ul>
//                 {lists.map(list=>(
//                     <li key={list.id}>{list.title || list.name}</li>
//                 ))}

//             </ul>
//         </div>
//     )

// }

//---CALL TRONG USEEFFECT THEO KIEU 1
// function TestUseEffect() {

//     const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts=>setLists(posts))
//     })
//     const [type, setType] = useState('posts')
//     const [title, setTitle] = useState('')
//     const [lists,setLists]= useState([])

//     const handleSubmit=()=>{
//         console.log('sending data')
//         setTitle('')
//     }
//     return (
//         <div>
//             <input type="text" value={title}
//                 onChange={e => setTitle(e.target.value)} />
//             {tabs.map(tab => (
//                 <button key={tab}
//                 style={{backgroundColor: tab === type ? '#48CA40' : '#B6CDE4' }}
//                     onClick={() => setType(tab)}>{tab}</button>
//             ))}
//             <button onClick={handleSubmit}>Submit</button>
//             <ul>
//                 {lists.map(list=>(
//                     <li key={list.id}>{list.title || list.name}</li>
//                 ))}

//             </ul>
//         </div>
//     )

// }
//---CALL TRONG USEEFFECT THEO KIEU 2
// function TestUseEffect() {

//     const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

//     useEffect(()=>{
//         console.log("fecting...")
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts=>setLists(posts))
//     },[])
//     const [type, setType] = useState('posts')
//     const [title, setTitle] = useState('')
//     const [lists,setLists]= useState([])

//     const handleSubmit=()=>{
//         console.log('sending data')
//         setTitle('')
//     }
//     console.log("re-render")
//     return (
//         <div>
//             <input type="text" value={title}
//                 onChange={e => setTitle(e.target.value)} />
//             {tabs.map(tab => (
//                 <button key={tab}
//                 style={{backgroundColor: tab === type ? '#48CA40' : '#B6CDE4' }}
//                     onClick={() => setType(tab)}>{tab}</button>
//             ))}
//             <button onClick={handleSubmit}>Submit</button>
//             <ul>
//                 {lists.map(list=>(
//                     <li key={list.id}>{list.title || list.name}</li>
//                 ))}

//             </ul>
//             {console.log("rendering...")}
//         </div>
//     )

// }

//CALL TRONG API THEO KIEU SO 3
// function TestUseEffect() {

//     const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']
//     const [type, setType] = useState('posts')
//     const [title, setTitle] = useState('')
//     const [lists,setLists]= useState([])

//     useEffect(()=>{
//         console.log("fecting..." +" "+type)
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//         .then(res => res.json())
//         .then(posts=>setLists(posts))
//     },[type])


//     const handleSubmit=()=>{
//         console.log('sending data')
//         setTitle('')
//     }
//     console.log("re-render")
//     return (
//         <div>
//             <input type="text" value={title}
//                 onChange={e => setTitle(e.target.value)} />
//             {tabs.map(tab => (
//                 <button key={tab}
//                 style={{backgroundColor: tab === type ? '#48CA40' : '#B6CDE4' }}
//                     onClick={() => setType(tab)}>{tab}</button>
//             ))}
//             <button onClick={handleSubmit}>Submit</button>
//             <ul>
//                 {lists.map(list=>(
//                     <li key={list.id}>{list.title || list.name}</li>
//                 ))}

//             </ul>
//             {console.log("rendering...")}
//         </div>
//     )

// }

/*3. Listen DOM event*/
//GO TO TOP
// function TestUseEffect() {

//     const [showGoToTop, setShowGoToTop] = useState(false)


//     useEffect(() => {
//         console.log("addEventListener")
//         const handleScrol = () =>{

//             setShowGoToTop(window.scrollY >= 200)
//         }



//         window.addEventListener('scroll', handleScrol)
//         //cleanup function
//         return ()=>{
//             console.log('cleanupfunction...')
//             window.removeEventListener('scroll',handleScrol)
//         }
//     }, [])
//     console.log('re-render')

//     return (
//         <div>
//             <div style={{ backgroundColor: 'green', height: '1300px' }}></div>
//             {console.log('rendering...')}
//             {showGoToTop &&
//                 <button style={{
//                     backgroundColor: '#fff26e',
//                     position: 'fixed',
//                     right: 20,
//                     bottom: 20,
//                 }
//                 }>TOP</button>}

//         </div>
//     )
// }

//RESIZE
// function TestUseEffect() {

//     const [size,setSize]= useState(window.innerWidth)

//     useEffect(() => {
//         const handleResize=()=>{
//             setSize(window.innerWidth)
//         }
//         window.addEventListener('resize',handleResize)

//         return ()=>{
//             window.removeEventListener('resize',handleResize)
//         }
//     }, [])
//     console.log('re-render')

//     return (
//         <div>
//             <div style={{ backgroundColor: 'green', height: '1300px' }}>{size}</div>
//         </div>
//     )
// }

/*4. TIMERS*/
//setInterval
//ĐỒNG HỒ ĐẾM NGƯỢC
//Tư duy cũ
//Tạo ra vô số Interval mới sau mỗi lần re-render
// function TestUseEffect(){
//     const [time,setTime]= useState(180)

//     let timer=setInterval(()=>{
//         setTime(time-1)
//     },1000)
//     return(
//         <div>{time}</div>
//     )
// }
//Tư duy cải tiến nhưng vẫn lỗi
/*Lý do của hiện tượng này là giá trị time đã được set cứng lúc chạy useEffect lần đầu nên đến lần sau sẽ vẫn là 180*/
// function TestUseEffect(){
//     const [time,setTime]= useState(180)

//     useEffect(()=>{
//         let timer=setInterval(()=>{
//             setTime(time-1)
//             console.log(time)
//         },1000)
//     },[])
//     return(
//         <div>{time}</div>
//     )
// }

//Tư duy theo kiểu mới dùng pre
//Nhưng vẫn sảy ra memory leak
// function TestUseEffect(){
//     const [time,setTime]= useState(180)

//     useEffect(()=>{
//         setInterval(()=>{
//             setTime(pre=>{
//                 console.log(pre-1)
//                 return  pre-1
//             })

//         },1000)
//     },[])
//     return(
//         <div>{time}</div>
//     )
// }
//Khắc phục memory leak
// function TestUseEffect(){
//     const [time,setTime]= useState(180)

//     useEffect(()=>{
//         let timer=setInterval(()=>{
//             setTime(pre=>{
//                 console.log(pre-1)
//                 return  pre-1
//             })

//         },1000)

//         //cleanup function
//         return ()=>{
//             clearInterval(timer)
//         }
//     },[])
//     return(
//         <div>{time}</div>
//     )
// }

/*4. Cleanup function*/
// function TestUseEffect(){
//     const [count,setCount]= useState(1)
//     useEffect(()=>{
//         console.log(`Callback...${count}`)

//         return()=>{
//             console.log(`CleanupFunction...${count}`)
//         }
//     })
//     return(
//         <div>
//             <button onClick={()=>setCount(count+1)}>Click me</button>
//             <h1>{count}</h1>
//         </div>
//     )
// }

//ỨNG DỤNG HIỂN THỊ ẢNH
// function TestUseEffect() {
//     const [avatar, setAvatar] = useState()

//     useEffect(()=>{
//         return()=>{
//             avatar && URL.revokeObjectURL(avatar.preview)
//         }

//     },[avatar])
//     const handlePreview=(e)=>{
//         const file=e.target.files[0];
//         file.preview=URL.createObjectURL(file);
//         setAvatar(file)
//     }
//     return (
//         <div>
//             <input type="file" onChange={handlePreview} />
//             {avatar && <img src={avatar.preview} style={{
//                 width:'50%',
//             }} alt="" />}
//         </div>
//     )
// }

//BÌNH LUẬN THỜI GIAN THỰC
//Nếu không có cleanup thì nó sẽ không được gỡ comment khỏi bài trước đó
const lessons=[
    {id:1,name:"Học ReactJS tại F8"},
    {id:2,name:"Học JS tại F8"},
    {id:3,name:"Học CSS tại F8"},
]
// function TestUseEffect(){
//     const [lessonID,setLessonID]= useState(1)
//     useEffect(()=>{
//         const myCustomEvent=({detail})=>{
//             console.log(detail)
//         }
//         window.addEventListener(`lesson-${lessonID}`,myCustomEvent)
//     })


//     return(
//         <div>
//             {lessons.map(lesson=>(
//                 <li key={lesson.id} onClick={()=>setLessonID(lesson.id)
//                 } style={{color:lesson.id===lessonID?"red":"black"}}>{lesson.name}</li>
//             ))}
//         </div>
//     )
// }

//Giải quyết bằng cleanup function
function TestUseEffect(){
    const [lessonID,setLessonID]= useState(1)
    useEffect(()=>{
        const myCustomEvent=({detail})=>{
            console.log(detail)
        }
        window.addEventListener(`lesson-${lessonID}`,myCustomEvent)

        return()=>{
            window.removeEventListener(`lesson-${lessonID}`,myCustomEvent)
        }

    },[lessonID])

    
    return(
        <div>
            {lessons.map(lesson=>(
                <li key={lesson.id} onClick={()=>setLessonID(lesson.id)
                } style={{color:lesson.id===lessonID?"red":"black"}}>{lesson.name}</li>
            ))}
        </div>
    )
}

export default TestUseEffect;

