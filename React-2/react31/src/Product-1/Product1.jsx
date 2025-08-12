import React from "react";

class Product extends React.Component{
    state={
        Prod_Name:"MP",
        price:35,
        Qty:1
    }
    IncrementHandler=()=>{
        this.setState({Qty:this.state.Qty+1})      //the Qty should be same in spelling otherwise it doesn't give o/p
    }
    DecrementHandler=()=>{
        this.setState({Qty:this.state.Qty-1})
    }


    render(){
        return <div>
            
            <button onClick={this.DecrementHandler}>-</button>
            <h3>Product Qty:{this.state.Qty}</h3>
            <button onClick={this.IncrementHandler}>+</button>

        </div>
    }

}
export default Product;