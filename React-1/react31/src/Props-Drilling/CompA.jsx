import CompB from "./CompB";

let CompA=()=>{
    let msg="Hello world"
    return <div>
        <h3>Component A</h3>
        <h4>Data:{msg}</h4>
        <hr/>
        <CompB msg={msg}/>


    </div>
}
export default CompA;