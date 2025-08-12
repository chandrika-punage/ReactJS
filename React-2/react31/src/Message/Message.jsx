import React from "react";

class Message extends React.Component{
    msg="Hello";
    gmHandler=()=>{
        this.msg="good morning";
        console.log(this.msg);
        this.forceUpdate();
    }
    gnHandler=()=>{
        this.msg="good night";
        console.log(this.msg)
        this.forceUpdate();
    }

    render(){
        return <div>

        <h2>Message Component</h2>
        <h3>Message:{this.msg}</h3>
        <button onClick={this.gmHandler}>Gm</button>

        <button onClick={this.gnHandler}>Gn</button>

        </div>
    }
}
export default Message;