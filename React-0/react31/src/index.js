// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


let root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)   

// root.render("Good")  //Good
// root.render(<h1>Gm</h1>);    //Gm
// root.render(<h1>Gm</h1><h2>Gn</h2>)    //cannot execute we get error
// root.render(<><h1>Gm</h1><h2>Gn</h2></>)    //gm gn we get output :after using the empty fragments
// root.render(<div><h1>Gmm</h1><h2>Gnn</h2></div>)    //gmm gnn as output: we can use div tag also


