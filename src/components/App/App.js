import React from 'react';
import './App.css';
import Navbar from "../Navbar/Navbar";
import CodeInput from "../CodeInput/CodeInput";

class App extends React.Component{


    render() {
        return (
                <div className="App">
                    <Navbar/>
                    <CodeInput/>
                </div>

        );
    }

} export default App;

