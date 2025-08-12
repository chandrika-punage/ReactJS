import React from "react";
import CompB from "./CompB";

let CompA=()=>{
    let msg="Welcom to CompA"
    let id=101;
    let name="Rahul"
    let sal=45000;
    let Loc="Goa"
    return <div>
        <h3>Component A</h3>
        <hr/>
        <CompB eid={id} ename={name} esal={sal} eLoc={Loc}></CompB>
    </div>
}
export default CompA;
