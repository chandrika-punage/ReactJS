import React,{useState} from "react";
let Testfunc = ()=>{
    let [product,setProduct]=useState({pname:"Marker Pen",price:30,qty:1})
    let incrHandler = ()=>{
        setProduct({qty:product.qty+1})
    }
    let decrHandler = ()=>{
        setProduct({qty:product.qty-1})
    }
    return <div>
                <h3>Product Component</h3>
                <h3>Product Name:{product.pname}</h3>
                <h3>Product Price:{product.price}</h3>
                <h3>Product qty:{product.qty}</h3>
                <button onClick={decrHandler}>-</button>
                <button onClick={incrHandler}>+</button>
    
            </div>
}
export default Testfunc;