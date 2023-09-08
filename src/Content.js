import { prettyDOM } from "@testing-library/react";
import { useEffect, useState } from "react";

const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì? Tại sao phải học ReactJS?',
        description: 'Hoc ReactJS từ cơ bản đến nâng cao.'
    },
    {
        id: 2,
        name: 'SPA/MPA là gì?',
        description: 'Những điều cần nắm về SPA/MPA'
    },
    {
        id: 3,
        name: 'Arraw function là gì?',
        description: 'Biết cách sử dụng arraw function?Ưu và nhược điểm.'
    },
]
/**KIẾN THỨC CƠ BẢN CẦN NẮM
 * 
 * Side effects
 * 
 * Event: Add / remove event listener
 * Observer pattern: Subscribe / unsubscribe
 * Closure
 * Timers: setInterval, setTimeout, clearInterval, clearTimeout
 * useState
 * Mounted / unmounted
 * Toán tử `===`
 * Call API
 */
//useEffect(callback, [deps])
//PHẢI HỌC THẬT CHẮC useEffect() và các trường hợp sử dụng của nó
//1. useEffect(callback)
/*
    -1.1Gọi callback mỗi khi componet re-render
    -1.2Gọi callback mỗi khi re-render
    -1.3Call API bằng hai trường hợp (ngoài và trong)
*/
//2. useEffect(callback, [])
/*
    -2.1 Chỉ gọi callback 1 lần sau khi Component mounted
*/
//3. useEffect(callback, [deps])
/*
    -3.1 Callback sẽ được gọi lại mỗi khi deps thay đổi
    (useEffect sẽ kiểm tra deps trước và sau khi render có thay đổi gì không, nếu có sẽ gọi callback
        chúng sử dụng toán tử `===` để so sánh)
*/

//----LUÔN ĐÚNG VỚI MỌI TH
//--->callback là bắt buộc và deps là không bắt buộc
//I.callback luôn được gọi sau khi component mounted
//II.Cleanup function luôn được gọi trước khi component bị unmounted
//Việc sử dụng cleanup function giúp hạn chế rò rỉ bộ nhớ `memory leak`
//III. Cleanup function luôn được gọi trước callback(trừ lần đầu C được mounted)
/**
    1. Update DOM
        - F8 blog title
    2. Call API
    3. Listen DOM events
        -Scoll
        -Resize
    4. Cleanup
        -Remove listener / Unsubcribe
        -Clear timer
*/
//--------------------------------------------------------
/*---UPDATE DOM*/
// function Content(){
//     const [title,setTitle]= useState('')
//     useEffect(()=>{
//         //Side Effect (ta luôn nhường cho việc render UI trước, ưu tiên luồng chính là luồng render)
//         //Việc ta để document.title=title ở bên ngoài useEffect thì vẫn đạt được kết quả đó. Nhưng nếu nó là một
//         //logic phức tạp hơn thì việc cho ra bên ngoài nó sẽ thực hiện trước và ngăn cản luồng render gây chậm trễ trong 
//         //việc hiển thị UI
//         document.title=title
//         console.log("Rerender....",title)


//     })
//     // document.title=title
//     return(
//         <div>
//             <input type="text" value={title}
//             onChange={(e)=>{setTitle(e.target.value)}}/>
//             {console.log("render")}
//         </div>
//     )
// }

/*---1.3 CALL API*/
function Content() {
    const [title, setTitle] = useState('')

    const [posts, setPosts] = useState([])

    const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']
    const [type, setType] = useState('posts')

    //show go to top
    const [showGoToTop, setShowGoToTop] = useState(false)
    //resize
    const [width, setWidth] = useState(window.innerWidth)
    //countdown
    const [countdown, setCountdown] = useState(180)
    ///III. Cleanup function
    const [count, setCount] = useState(1)

    //AVATAR
    const [avatar, setAvatar] = useState()
    ///------TH1: Trường hợp làm luôn gọi API bên ngoài
    //Mỗi lần re-render nó lại gọi API lại, rất dở, Nhưng nếu ra dùng useEffect số 1 thì nó vẫn bị
    //do callback sẽ được gọi lại mỗi khi rerender
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(res => res.json)
    // .then(posts => {
    //     console.log(posts)
    // })

    ///------TH2. Gọi API trong useEffect
    //Trong trường hợp này còn tệ hơn trường hợp trước lí do khi setPosts(setState) thì Componet được 
    //rerender lại thì nó lại tiếp tục gọi useEffect --> gọi API --->setState--->rerender tạo thành vòng lặp callAPI vô tận (GIẢI PHÁP:DÙNG DẠNG SỐ 2)
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(posts => {
    //             setPosts(posts)
    //         })
    // })

    ///------TRƯỜNG HỢP DÙNG SỐ 2: 2. useEffect(callback, [])
    //Muốn thực hiện logic 1 lần khi C được mounted và không gọi lại khi C rerender
    //Dùng cho việc gọi API một lần
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(posts => {
    //             setPosts(posts)
    //         })
    // }, [])

    //------TRƯỜNG HỢP DÙNG SỐ 3: 3. useEffect(callback, [deps])
    //Giá trị deps là 1 biến có thể là props có thể là  state 
    //Trường hợp ví dụ: call API bằng các nút đại diện cho API đó
    //Ta dùng mảng các tab và useState type
    /*
        -Lúc này khi title thay đổi chúng sẽ gọi lại callback và nó chỉ phụ thuộc vào deps tab
    */
    // useEffect(() => {
    //     // console.log('Type changed' +"_"+ new Date().getMilliseconds())
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //         .then(res => res.json())
    //         .then(posts => {
    //             setPosts(posts)
    //         })
    // }, [type])
    // console.log(type+"_"+new Date().getMilliseconds())
    // return (
    //     <div>
    //         {tabs.map(tab =>
    //             <button key={tab}
    //                 style={
    //                     type === tab ? {
    //                         color: '#fff',
    //                         backgroundColor: '#333',
    //                     } : {}
    //                 }
    //                 onClick={() => setType(tab)}>{tab}</button>
    //         )
    //         }
    //         <input
    //             value={title}
    //             onChange={e => setTitle(e.target.value)} />
    //         <ul>
    //             {posts.map(post => (
    //                 <li key={post.id}>{post.title || post.name}</li>
    //             ))}
    //         </ul>
    //     </div>
    // )

    /*---3. LISTEN DOM EVENT*/
    /*
    Ta cần lưu ý rằng react sử dụng toán tử so sánh `===` nên khi nào có sự thay đổi nó mới re-render nên 
    trong trường hợp scrollY thay đổi thì nó chỉ setState lại mà không re-render nếu độ dài vẫn cứ lớn hơn 200px
    */
    //Thực hiện mỗi logic chúng ta sẽ đưa vào 1 useEffect.
    //Dom event sẽ chỉ được gọi 1 lần nên sẽ làm theo trường hợp số 2, về sau mỗi lần 
    //sự kiện được kích hoạt thì callback sẽ được gọi
    /*Scroll*/
    // useEffect(() => {
    //     const handleScroll = () => {
    //         //In ra khoảng cách cuộn từ trên xuống dưới
    //         // if(window.scrollY >= 200){
    //         //     setShowGoToTop(true)
    //         // }else{
    //         //     setShowGoToTop(false)
    //         // }
    //         // console.log("setState")
    //         setShowGoToTop(window.scrollY >= 200)
    //     }
    //     window.addEventListener('scroll', handleScroll)
    //     console.log('addEventListener')
    //     //Cleanup function
    //     return ()=>{
    //         //Trước khi component bị unmounted thì nó sẽ gọi cái này

    //         window.removeEventListener('scroll', handleScroll)
    //         console.log('removeEventListener')
    //     }
    // }, [])

    // // console.log("re-render")
    // return (
    //     <div>
    //         {tabs.map(tab =>
    //             <button key={tab}
    //                 style={
    //                     type === tab ? {
    //                         color: '#fff',
    //                         backgroundColor: '#333',
    //                     } : {}
    //                 }
    //                 onClick={() => setType(tab)}>{tab}</button>
    //         )
    //         }
    //         <input
    //             value={title}
    //             onChange={e => setTitle(e.target.value)} />
    //         <ul>
    //             {posts.map(post => (
    //                 <li key={post.id}>{post.title || post.name}</li>
    //             ))}
    //         </ul>
    //         {showGoToTop && (
    //             <button style={{
    //                 backgroundColor:'#fff26e',
    //                 position:'fixed',
    //                 right:20,
    //                 bottom:20,
    //             }}>GoToTop</button>
    //         )}

    //     </div>
    // )
    /*Resize*/
    // useEffect(()=>{
    //     const handleResize=()=>{
    //         setWidth(window.innerWidth)
    //     }
    //     window.addEventListener('resize',handleResize)
    //     console.log('addEventListener')
    //     //Cleanup function
    //     return ()=>{
    //         console.log('removeEventListener')
    //         window.removeEventListener('resize',handleResize)
    //     }
    // },[])
    // return(
    //     <div>
    //         <h1>{width}</h1>
    //     </div>
    // )

    /*----------------TIMER*/
    //Cách dùng sai (theo logic cũ):
    /*
        -setInterval sẽ chạy vô hạn cho đến hhi ta tắt chương trình hoặc clear
        -Vấn để xảy ra khi mỗi lần setInterval thì nó lại setState và re-render và lại tạo ra setInterval mới
        -Các interval này chạy cùng lúc với nhau và gây ra lỗi
    */
    // setInterval(()=>{
    //     setCountdown(countdown-1)
    // },1000)
    //Cách đúng nhưng vẫn còn vấn đề
    /**
     * Ta thấy ở đây số giây hiển thị luôn là 179 mặc dù setInterval được chạy liên túc
     * Ta nhớ lại khái niệm hàm đóng closure do chúng ta sử dụng useEffect số 2 nên callback này
     * chỉ được gọi 1 lần nên lúc này nó hiểu countdown là 180 và đóng cứng countdown ở đó nên mặc dù mỗi lần
     * setInterval ta đều cập nhật lại countdown - 1 tuy nhiên do countdown đã đóng cứng theo phạm vi của hàm nên luôn bằng 179
    */
    // useEffect(() => {
    //     setInterval(() => {
    //         setCountdown(countdown - 1)
    //         console.log('Countdown: ',countdown)
    //     }, 1000)
    // }, [])
    //setInterval: Cách giải quyết (dùng prevState)dùng callback cho state
    // useEffect(() => {
    //     setInterval(() => {
    //         setCountdown(prevState=>prevState - 1)
    //         console.log('Countdow...')
    //         console.log('Countdown: ',countdown)
    //     }, 1000)
    // }, [])
    //setTimeout
    //Lúc này mỗi khi countdown thay đổi (deps thay đổi) nó sẽ re-render lại và setTimeout tiếp và tiếp tục như vậy nhưng cách này hại não hơn
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCountdown(countdown - 1)
    //         console.log('Countdown: ',countdown)
    //     }, 1000)
    // }, [countdown])

    //Nhưng vấn đề vẫn còn như bài trước (là vấn đề memory leak)Khi component unmouted thì nó vẫn âm thầm setInterval
    // useEffect(() => {
    //     const TimerID=setInterval(() => {
    //         setCountdown(prevState=>prevState - 1)
    //         console.log('Countdow...')
    //         console.log('Countdown: ',countdown)
    //     }, 1000)

    //     //Cleanup function
    //     return ()=>clearInterval(TimerID)
    // }, [])
    // return (
    //     <div>
    //         <h1>{countdown}</h1>
    //     </div>
    // )

    ///III. Cleanup luôn được gọi trước callback trừ lần đầu
    //Trươc khi bắt đầu lần n+1 thì sẽ dọn dẹp lần n để tránh memory leak
    /**
     * Mounted or Re-render lần 1
     * Cleanup lần 1
     * Mounted or Re-render lần 2
    */
    // useEffect(()=>{
    //     console.log(`Mounted or Re-render lần ${count}`)

    //     //Cleanup function
    //     return ()=>{
    //         console.log(`Cleanup lần ${count}`)
    //     }
    // },[count])

    // return (
    //     <div>
    //         <h1>{count}</h1>
    //         <button onClick={()=>setCount(count+1)}>Click me</button>
    //     </div>
    // )

    //---------LÀM ỨNG DỤNG CHO PHÉP HIỂN THỊ ẢNH NGAY LẬP TỨC
    //Nhưng nếu ta lại chọn ảnh và không reset lại trang thì ảnh vẫn còn mặc dù ta không sài được nữa (memory leak)
    // const handlePreviewAvatar=(e)=>{
    //     //Lấy ra file đầu tiên
    //     const file= e.target.files[0];
    //     console.log(URL.createObjectURL(file))
    //     file.preview=URL.createObjectURL(file);
    //     setAvatar(file)

    // }
    //Giải quyết
    // useEffect(()=>{
    //     if(avatar){
    //         console.log("avatar_p ",avatar.preview)
    //     }else{
    //         console.log("callback first")
    //     }
    //     //Cleanup
    //     return ()=>{
    //         //Xóa url nhưng sẽ có lỗi do ban đầu avatar là undefined
    //         // URL.revokeObjectURL(avatar.preview)

    //         //giải quyết
    //         avatar && console.log("cleanup function")
    //         avatar && URL.revokeObjectURL(avatar.preview)
    //     }
    // },[avatar])
    // console.log("re-render")
    // const handlePreviewAvatar=(e)=>{
    //     console.log("handlePreview")
    //     //Lấy ra file đầu tiên
    //     const file= e.target.files[0];
    //     console.log(URL.createObjectURL(file))
    //     //Thêm thuộc tính cho object file
    //     file.preview=URL.createObjectURL(file);
    //     //Sau khi setState thì re-render lại
    //     setAvatar(file)

    // }
    // return (
    //     <div>
    //         <input type="file" 
    //         onChange={handlePreviewAvatar}/>
    //         {avatar && <img src={avatar.preview} alt="" width="50%"/>}
    //         {console.log('rendering...')}

    //     </div>
    // )

    //---------SỬ LÝ THỜI GIAN THỰC: CHAT, BÌNH LUẬN
    //Vấn đề xuất hiện khi nó vẫn lession bài 1 khi ta chuyển qua bài 2 bài 3
    // const [lessonID, setLessonID] = useState(1)
    // useEffect(()=>{
    //     const handleComment=({detail})=>{
    //         console.log(detail)
    //     }
    //     window.addEventListener(`lesson-${lessonID}`,handleComment)
    // },[lessonID])
    // return (
    //     <div>
    //         <ul>
    //             {
    //                 lessons.map(lesson =>
    //                 (
    //                     <li key={lesson.id}
    //                         style={{ color: lessonID === lesson.id ? 'red' : '#333' }}
    //                         onClick={() => setLessonID(lesson.id)}>
    //                         {lesson.name}
    //                     </li>
    //                 )
    //                 )
    //             }
    //         </ul>
    //     </div>
    // )

    //Giải quyết: dùng cleanup function
    //PHẢI CỰC KỲ CHÚ Ý VIỆC CLEANUP FUNCTION. NHÌN RA ĐƯỢC CƠ HỘI ỨNG DỤNG CỦA CLEANUP FUNCTION

    // const [lessonID, setLessonID] = useState(1)
    // useEffect(()=>{
    //     const handleComment=({detail})=>{
    //         console.log(detail)
    //     }
    //     window.addEventListener(`lesson-${lessonID}`,handleComment)

    //     return()=>{
    //         window.removeEventListener(`lesson-${lessonID}`,handleComment)
    //     }
    // },[lessonID])
    // return (
    //     <div>
    //         <ul>
    //             {
    //                 lessons.map(lesson =>
    //                 (
    //                     <li key={lesson.id}
    //                         style={{ color: lessonID === lesson.id ? 'red' : '#333' }}
    //                         onClick={() => setLessonID(lesson.id)}>
    //                         {lesson.name}
    //                     </li>
    //                 )
    //                 )
    //             }
    //         </ul>
    //     </div>
    // )

}

export default Content;