import React, { useState} from "react";

let Messagefunc =()=>{
    let [msg,setMsg]=useState("Hello")
    let gmHandler=()=>{
        setMsg("Hello,Gm")
    }
    let gnHandler=()=>{
        setMsg("Hello,Gn")
    }
    

    return <div>
        <h3>Message Component</h3>
        <h3>Msg Value:{msg}</h3>
        <button onClick={gmHandler}>Gm</button>
        <button onClick={gnHandler}>Gn</button>

    </div>

}
export default Messagefunc;