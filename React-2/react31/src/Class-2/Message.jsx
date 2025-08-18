import React,{ Fragment, useState } from "react"

let Message=()=>{
    let [msg,setMsg]=useState("Hello")

    let gmHandler=()=>{
        setMsg("Good Morning")
    }

     let gaHandler=()=>{
        setMsg("Good Afternoon")
    }

     let geHandler=()=>{
        setMsg("Good Evening")
    }

     let gnHandler=()=>{
        setMsg("Good Night")
    }


    return <Fragment>
        <h3>Message Component</h3>
        <h3>Message:{msg}</h3>
        <button onClick={gmHandler}>Gm</button>
        <button onClick={gaHandler}>Ga</button>
        <button onClick={geHandler}>Ge</button>
        <button onClick={gnHandler}>Gn</button>

    </Fragment>
}
export default Message;