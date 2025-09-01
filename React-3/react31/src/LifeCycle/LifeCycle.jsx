import Axios from "axios";
import React from "react";

class LifeCycle extends React.Component{
    constructor(props){
        super(props)
        this.state={users:[]}

    }

    componentDidMount=()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            this.setState({users:resp.data})
        })
        .catch(()=>{})
    }

    render(){
        return <>

        <pre>{JSON.stringify(this.state.users)}</pre>
        {/* <button onClick={this.get_Data}>Get Data</button>  no need of button */}

        <div className="container">
            <div className="row">
                <div className="col-6">

        <table className="table">
            <thead>
                <tr>
                    <th>Emp Id</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.users.map((users)=>{
                        return <tr key={users.id}>
                            <td>{users.id}</td>
                            <td>{users.name}</td>
                        </tr>
                    })
                }


            </tbody>
        </table>

                </div>
            </div>
        </div>
        
        

        
        </>
    }

} 

export default LifeCycle;