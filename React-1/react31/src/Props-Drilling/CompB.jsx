import CompC from "./CompC";

let CompB=(props)=>{
    return <div>
        <h3>Component B</h3>
        <hr/>
        <pre>{JSON.stringify(props)}</pre>
        <CompC msg={props.msg}/>

    </div>
}
export default CompB;