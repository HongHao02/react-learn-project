import { useState,memo } from "react";

//1. memo() -> Higher Order Component (HOC)
//---> Ghi nhớ prop của 1 C để quyết định có re-render lại C hay không, tối ưu về hiệu năng
//2. useCallback()


//Các khái niệm cần nhớ
//1. Hooks
//2. HOC
//3. Render props
//Trường hợp dùng: C sử dụng nhiều props (nhiều phần UI) gây ảnh hưởng đến hiệu năng thì sử dụng memo(C cha sử dụng nhiều C con, phức tạp về UI --> tránh re-render không cần thiết)
//Phân tích dùng memo cho thật kỹ, tránh lạm dụng

//KHÔNG SỬ DỤNG MEMO KHI PROPS KHÔNG THAY ĐỔI/KHÔNG CÓ PROPS
//Khi C cha (TestUseMemoP) re-render thì nó cũng re-render C con nếu là UI phức tạp thì sẽ gây ra các vấn đề về hiệu năng
// function TestUseMemo(){
//     return (
//         <div>
//             {console.log("re-render")}
//             <h2>HELLO ANH EM F8</h2>
//         </div>
//     )

// }
//Nhận vào 1 component rồi check xem có prop nào thay đổi không. Có thì mới re-render
// export default TestUseMemo;

//DÙNG MEMO
//Lúc này khi nào props của C TestUseMemo thay đổi thì nó mới re-render
function TestUseMemo({count}){
    return (
        <div>
            {console.log("re-render")}
            <h2>HELLO ANH EM F8 LẦN {count}</h2>
        </div>
    )

}
export default memo(TestUseMemo);