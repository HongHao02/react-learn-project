import video2 from '../videos/video-1.mp4'

import { forwardRef, useImperativeHandle, useRef , useEffect} from 'react';

function Video(props, ref){
    const videoRef=useRef()
    
    console.log(videoRef.current)
    useImperativeHandle(ref, ()=>({
        play(){
            videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        }
    }))

    return(
        <video src={video2}
        //sử dụng tron tình huống không đảm bảo toàn vẹn dữ liệu
        // ref={ref}
        //Tình huống đảm bảo toàn vẹn dữ liệu
        ref={videoRef}
        width={280}
        
        ></video>
    )
}

export default forwardRef(Video);