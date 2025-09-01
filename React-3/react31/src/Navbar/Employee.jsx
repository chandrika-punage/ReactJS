let Employee=()=>{
    let Employees=[{"eid":1,"ename":"Myrna","gender":"Female"},
{"eid":2,"ename":"Marla","gender":"Female"},
{"eid":3,"ename":"Delila","gender":"Female"},
{"eid":4,"ename":"Glyn","gender":"Male"},
{"eid":5,"ename":"Godiva","gender":"Female"},
{"eid":6,"ename":"Mellisa","gender":"Female"},
{"eid":7,"ename":"Tessie","gender":"Female"},
{"eid":8,"ename":"Patty","gender":"Male"},
{"eid":9,"ename":"Christopher","gender":"Male"},
{"eid":10,"ename":"Sande","gender":"Female"},
{"eid":11,"ename":"Cooper","gender":"Male"},
{"eid":12,"ename":"Luciano","gender":"Male"},
{"eid":13,"ename":"Kristyn","gender":"Non-binary"},
{"eid":14,"ename":"Freida","gender":"Female"},
{"eid":15,"ename":"Jillian","gender":"Female"},
{"eid":16,"ename":"Marcellina","gender":"Genderqueer"},
{"eid":17,"ename":"Simone","gender":"Male"},
{"eid":18,"ename":"Elisabet","gender":"Female"},
{"eid":19,"ename":"Waring","gender":"Male"},
{"eid":20,"ename":"Carmina","gender":"Female"},
{"eid":21,"ename":"Mavra","gender":"Female"},
{"eid":22,"ename":"Collete","gender":"Female"},
{"eid":23,"ename":"Phillip","gender":"Male"},
{"eid":24,"ename":"Marlo","gender":"Female"},
{"eid":25,"ename":"Barnabas","gender":"Male"},
{"eid":26,"ename":"Felice","gender":"Male"},
{"eid":27,"ename":"Rochette","gender":"Female"},
{"eid":28,"ename":"Fonz","gender":"Male"},
{"eid":29,"ename":"Karrah","gender":"Female"},
{"eid":30,"ename":"Rici","gender":"Female"},
{"eid":31,"ename":"Anastassia","gender":"Female"},
{"eid":32,"ename":"Cathe","gender":"Female"},
{"eid":33,"ename":"Reyna","gender":"Female"},
{"eid":34,"ename":"Retha","gender":"Female"},
{"eid":35,"ename":"Norina","gender":"Agender"},
{"eid":36,"ename":"Lucila","gender":"Female"},
{"eid":37,"ename":"Andy","gender":"Female"},
{"eid":38,"ename":"Ariella","gender":"Female"},
{"eid":39,"ename":"Keslie","gender":"Female"},
{"eid":40,"ename":"Amaleta","gender":"Female"},
{"eid":41,"ename":"Brittney","gender":"Genderfluid"},
{"eid":42,"ename":"Rhetta","gender":"Female"},
{"eid":43,"ename":"Dexter","gender":"Male"},
{"eid":44,"ename":"Murdoch","gender":"Genderfluid"},
{"eid":45,"ename":"Allistir","gender":"Male"},
{"eid":46,"ename":"Annice","gender":"Female"},
{"eid":47,"ename":"Patty","gender":"Male"},
{"eid":48,"ename":"Murvyn","gender":"Male"},
{"eid":49,"ename":"Sheila-kathryn","gender":"Female"},
{"eid":50,"ename":"Ella","gender":"Female"}]



    return <div className="container">
        <div className="row">
            <div className="col-6">
                <table className="table">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>Emp Id</th>
                            <th>Ename</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees.map((emp)=>{
                                return <tr key={emp.eid}>        
                                    <td>{emp.eid}</td>
                                    <td>{emp.ename}</td>
                                    <td>{emp.gender}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
export default Employee;