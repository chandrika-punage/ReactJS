import React,{ Fragment, useState } from "react"

let Eventbinding=()=>{
    let [msg,setMsg]=useState("Hello")

    // Removing All Handler nd writing One Handler for All 

    // Event Binding


    let updateHandler=(value)=>{
        setMsg(value)
    }


    return <Fragment>
        <h3>Message Component</h3>
        <h3>Message:{msg}</h3>
        <button onClick={updateHandler.bind(null,"Good Morning")}>Gm</button>
        <button onClick={updateHandler.bind(null,"Good Afternoon")}>Ga</button>
        <button onClick={updateHandler.bind(null,"Good Evening")}>Ge</button>
        <button onClick={updateHandler.bind(null,"Good Night")}>Gn</button>

    </Fragment>
}
export default Eventbinding;