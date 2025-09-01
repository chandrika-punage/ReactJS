import Axios from 'axios'
import { useState } from 'react'

let User1=()=>{
    let [users,setUsers]=useState([])
    let getUserData=()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{setUsers(resp.data)})
        .catch()

    }
    return <div>
        <h3>User Component</h3>
        <hr/>
        <button onClick={getUserData}>Get Users</button>
        <pre>{JSON.stringify(users)}</pre>

    </div>
}
export default User1;






