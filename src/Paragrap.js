import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"


function Paragrap() {
    const context = useContext(ThemeContext)
    return (
        <div>
            <p className={context.theme}>
                useContext được dùng cho việc truyền props từ Conponent cha xuống bất
                kỳ Component con nào mà không cần thông qua các Component trung gian.
            </p>
            <ul>
                <li>Bước 1: createContext (Bước này tạo ra ngữ cảnh cho việc sử dụng useContext)</li>
                <li>Bước 2: Tạo provider (vẫn là 1 function Componet nhưng nó sẽ có prop là `value` để truyền cho tất
                    cả Component con của nó)</li>
                <li>Bước 3: Import và bọc Provider bên ngoài return của file index.js (Lúc này mọi Compnent bên trong Provider sẽ nhận được prop)</li>
                <li>Bước 4: Import context được tạo ra từ bước 1. và truyền nó vào useContext</li>
                <li>Bước 5: Sử dụng các giá trị được truyền vào bởi Provider (obj hoặc biến bất kỳ)</li>
            </ul>
        </div>
    )
}

export default Paragrap