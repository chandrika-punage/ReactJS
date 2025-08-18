// import React from "react";

// class UsingClass extends React.Component{
//     constructor(props){
//         super(props)
//             this.state={msg:"Hello"};
//     }
//     updateHandler=(value)=>{
//         this.setState({msg:value})
//     }

//     render(){
//         return <div>
//             <h3>Message Value:{this.state.msg}</h3>
//             <button onClick={updateHandler.bind(this,"Good Morning")}>Gm</button>
//             <button onClick={updateHandler.bind(this,"Good Afternoon")}>Ga</button>
//             <button onClick={updateHandler.bind(this,"Good Evening")}>Ge</button>
//             <button onClick={updateHandler.bind(this,"Good Night")}>Gn</button>
//         </div>
//     }
// }
// export default UsingClass;



import React from "react";
class UsingClass extends React.Component{
    constructor(props){
        super(props)
        this.state={msg:"Hello"}
    }
    updateHandler=(value)=>{
        console.log(value);
        this.setState({msg:value})
    }
    render(){
        return  <div>
                    <h3>Message Component</h3>
                  
                    <h3>Message Value:{this.state.msg}</h3>
                    <button onClick={this.updateHandler.bind(this,"GM")}>GM</button>
                    <button onClick={this.updateHandler.bind(this,"GA")}>GA</button>
                    <button onClick={this.updateHandler.bind(this,"GE")}>GE</button>
                    <button onClick={this.updateHandler.bind(this,"GN")}>GN</button>
                </div>
    }
}
export default UsingClass;