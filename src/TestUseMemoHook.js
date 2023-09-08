//useMemo hook not memo() HOC
import { useState,useRef,useMemo } from "react"
function TestUseMemoHook(){
    const [productName,setProductName]=useState('')
    const [price,setPrice]=useState('')
    const [listProducts,setListProducts]=useState([])
    const productRef=useRef()

    const handleSubmit=()=>{
        setListProducts([...listProducts, {
            productName,
            price:Number(price)
        }])
        setProductName('')
        setPrice('')
        productRef.current.focus()
    }
    console.log('re-render');
    const total=useMemo(()=>{
        const result=listProducts.reduce((result,pro)=>{
            console.log('Tinh toan tong')
            return result + pro.price
        },0)
        console.log("TINH TOAN LAI")
        return result;

    },[listProducts])
    //Nếu không có useMemo() thì mỗi lần setState nó lại đi tính total và việc lặp lại 
    //logic này là hoàn toàn không cần thiết, chúng ta chỉ nên tính toán lại sau khi đã cập nhật lại danh sách sản phẩm
    // const total=
    //     listProducts.reduce((result,pro)=>{
    //         console.log('Tinh toan tong')
    //         return result + pro.price
    //     },0)
    return(
        <div>
            <h1>TOTAL: {total}</h1>
            <input type="text" 
            ref={productRef}
            value={productName}
            onChange={e=>setProductName(e.target.value)}/>
            <input type="text" 
            value={price}
            onChange={e=>setPrice(e.target.value)}/>
            <button onClick={handleSubmit}>ADD</button>
            <div>
                {listProducts.map((product,index)=>{
                    // console.log(product);
                    return <li key={index}>{product.productName} - {product.price}</li>
                })}
            </div>
        </div>
    )

}
export default TestUseMemoHook;