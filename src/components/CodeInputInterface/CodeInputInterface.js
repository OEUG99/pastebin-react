import React from 'react';
import './CodeInputInterface.css';
import Sidebar from "../Sidebar/Sidebar";
import { BrowserRouter } from 'react-router-dom';
import TextAreaAutoresize from "../TextAreaAutoresize/TextAreaAutoresize";


class CodeInputInterface extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleClick = this.handleClick.bind(this);
    }


    async handleClick(pasteName, pasteContent) {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body:
                JSON.stringify({
                    "title": pasteName,
                    "contents": pasteContent,
                    "syntaxHighlight": 0,
                })

        }

        let response = await fetch("http://localhost:8080/api/v1/paste/", requestOptions);

        if (response.ok) {
            let json = await response.text();
            // go to paste page using react router dom
            window.location.href = "http://localhost:3000/paste/";

        } else {
            console.log("response not good")

        }
    }


    render() {

        return (
            <div className="CodeInputInterface">

                <center><p>Write code here:</p></center>

                <input id="titleTextInput" type="text" placeholder="Type file name..." maxLength={15}/>
                <button id="submitButton"
                        /*
                        now we will get the content of the text area and the title of the paste.
                        then we will send a post request to the server with the title and content
                         */
                        onClick={() => this.handleClick(
                            document.getElementById("titleTextInput").value,
                            // get the thing we need via its reference
                            document.getElementsByClassName("textarea")[0].value

                        )}> Click here to publish </button>
                <br/>

                <TextAreaAutoresize id="codeInput" type="text"
                                    required={true}
                                    placeholder="Type code here..."
                                    cols={120}
                                    rows={30}
                />

            </div>
        );
    }

} export default CodeInputInterface;