import Axios from 'axios'
import { useState } from 'react'

let Func=()=>{
    let [users,setUsers]=useState([])
    let getUserData=()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{setUsers(resp.data)})
        .catch()

    }
    return <div className="container">
        <div className="row">
            <div className="col-6">
                <table className="table">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>Emp Id</th>
                            <th>Ename</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees.map((users)=>{
                                return <tr key={users.eid}>        
                                    <td>{users.eid}</td>
                                    <td>{users.ename}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
export default Func;






