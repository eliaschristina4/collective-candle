// import React, { Component } from "react";
import { useState } from 'react';
// import {
//   Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Products from './components/Products'

// class App extends Component {
//   state = {
//       data: null
//     };

//     componentDidMount() {
//       this.callBackendAPI()
//         .then(res => this.setState({ data: res.express }))
//         .catch(err => console.log(err));
//     }
//     // fetching the GET route from the Express server which matches the GET route from server.js
//     callBackendAPI = async () => {
//       const response = await fetch('/db');
//       const body = await response.json();
  
//       if (response.status !== 200) {
//         throw Error(body.message) 
//       }
//       // console.log(response);
//       return body;
//     };

//     render() {
//       return (
//         <div className="App">
//           {/* <Products /> */}
//           <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <h1 className="App-title">Welcome to React</h1>
//           </header>
//           <p className="App-intro">{this.state.data}</p>
//         </div>
//       );
//     }
//   }

function App() {
  // const [data, setData] = useState(null);

  // React.useEffect(() => {
  //   fetch("/db")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <div className="App">
      <Products />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data? 'Loading' : data}</p>
      </header> */}
    </div>
  );
}

export default App;