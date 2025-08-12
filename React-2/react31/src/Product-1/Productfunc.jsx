import React, { useState } from "react";

let Productfunc=()=>{

    let [qty,setQty]=useState(1)

    let gmHandler=()=>{
        setQty(qty+1)
    }
    let gnHandler=()=>{
        setQty(qty-1)
    }


    return <div>
        <h3>Using Functions</h3>
        <button onClick={gmHandler}>+</button>
        <h3>Product Qty:{qty}</h3>
        <button onClick={gnHandler}>-</button>

    </div>
}
export default Productfunc;
