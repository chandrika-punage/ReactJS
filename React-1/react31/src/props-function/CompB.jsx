import React from "react";
let CompB=(props)=>{
    return <div>
        <h3>Component B</h3>
        <pre>{JSON.stringify(props)}</pre>
        <h4>Employee Id:{props.eid}</h4>
        <h4>Employee Name:{props.ename}</h4>
        <h4>Employee Sal:{props.esal}</h4>
        <h4>Employee Location:{props.eLoc}</h4>
    </div>
}
export default CompB;