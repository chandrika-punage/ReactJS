import CompD from "./CompD";

let CompC=(props)=>{
    return <div>
        <h3>Component C</h3>
        <hr/>
        <pre>{JSON.stringify(props)}</pre>
        <CompD msg={props.msg}/>

    </div>
}
export default CompC;