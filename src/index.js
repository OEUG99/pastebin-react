import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import CodeInputInterface from "./components/CodeInputInterface/CodeInputInterface";
import MainContainer from "./components/mainContainer/MainContainer";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <MainContainer/>
        </BrowserRouter>
    </React.StrictMode>
)