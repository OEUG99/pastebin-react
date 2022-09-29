import React from 'react';
import './CodeInput.css';
import Sidebar from "../Sidebar/Sidebar";


class CodeInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.currentTarget.textContent});
    }

    async handleClick(val) {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8080'
            },
            body: JSON.stringify({
                name: 'File Name Here',
                contents: {val},
            })
        }

        let response = await fetch("http://10.0.0.15:8080/api/v1/paste/", requestOptions);

        if (response.ok) {
            let json = await response.text();
            console.log(json);
        } else {
            console.log("response not good")
        }
    }

    render() {


        return (
            <div className="UserInterface">
                <center><p>Write code here:</p></center>

                <input id="titleTextInput" type="text" placeholder="Type file name..."/>
                <button id="submitButton" onClick={() => this.handleClick(this.state.value)}> Click here to publish </button>
                <br/>

                <div id="divLeft">
                    <textarea id="titleTextInput" type="text" required={true} placeholder="Type code here..." onInput={this.handleChange}/>
                </div>
                <div id="divRight">
                    <Sidebar/>
                </div>
            </div>
        );
    }

} export default CodeInput;