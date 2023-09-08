import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './ThemeContext';
import { ThemeProvider2 } from './TestContext/ThemeContext2';

//Ta da dung index de khong can khai bao them duong dan cap 2
// import SroreProvider from './store/SroreProvider';

import { StoreProvider } from './store';


//Fake comments
//Phát đi comment mỗi 2s giả lập người dùng comment
//Đối với các sự kiện click (thì DOM tự phát ra sự kiện cho ta lắng nghe còn này là do ta phát tùy ý và lắng nghe sau đó)
function emitComment(id) {
  //custom envent
  setInterval(() => {
    //Phát một sự kiện ở đối tượng windown cho tất cả các file đang mở
    //dispatchEvent giúp ta có thể lắng nghe sự kiện ở mọi file trong dự án 
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Nội dung comment của lesson ${id}`
      })
    )
  }, 2000)

}
//Cứ mỗi 2s nó sẽ phát đi một event với name: lesson-${id} và detail

emitComment(1)
emitComment(2)
emitComment(3)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // <ThemeProvider>
  //   <App/>,
  // </ThemeProvider>

  // <ThemeProvider2>
  //   <App/>
  // </ThemeProvider2>

  <StoreProvider>
    <App/>
  </StoreProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
