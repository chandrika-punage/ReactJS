import React from "react";

class Message1 extends React.Component{
    msg="Hello";
    state={
        "msg":"Hello..."
    }
    gmHandler=()=>{
        this.setState({"msg":"Good Morning"})
    }
    gnHandler=()=>{
        this.setState({"msg":"Good night"})
    }

    render(){
        console.log("render method")
        return <div>
            <h3>Message Value:{this.state.msg}</h3>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gnHandler}>GN</button>

        </div>
    }

}
export default Message1;