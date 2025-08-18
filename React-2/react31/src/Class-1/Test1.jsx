// import React ,{ Component } from "react";

// class Test1 extends Component{
//     state;
//     constructor(props){
//         super(props)
//         console.log("Constructor Component")
//         this.state={
//             name:"John",
//             qty:1,
//             price:30
//         }
//     }

//         increment=()=>{
//             this.setState({qty:this.state.qty+1})
//         }

//         decrement=()=>{
//             this.setState({qty:this.state.qty-1})
//         }


//     render(){
//         console.log("render component")
//         return <div>
//             <h3>Product Qty:{this.state.qty}</h3>
//             <button onClick={this.decrement}>-</button>
//             <button onClick={this.increment}>+</button>

//         </div>
//     }
// }
// export default Test1;



import React, { Component } from 'react'
class Test1 extends Component {
    state;
    constructor(props){
        super(props);
        console.log("First Constructor")
        this.state={
            product_Name:"Marker Pen",
            price:30,
            qty:1
        }
    }
    incrHandler=()=>{
        this.setState({qty:this.state.qty+1})
    }
  render() {
    console.log("Second - Render method")
    return <div>
                <h4>Product Component</h4>
                <h4>Product Name:{this.state.product_Name}</h4>
                <h4>Product Price:{this.state.price}</h4>
                <button onClick={this.decrHandler}>-</button>
                 <h4>Product Qty:{this.state.qty}</h4>
                 <button onClick={this.incrHandler}>+</button>
            </div>
    
  }
}

export default Test1;