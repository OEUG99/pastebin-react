import React from 'react';
import './MainContainer.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "../Navbar/Navbar";
import {PasteEditor} from "../PasteEditor/PasteEditor";

class MainContainer extends React.Component{


    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={
                        <PasteEditor/>
                    } />
                    <Route path="/paste" element={
                        <div className="PasteViewer">
                            <Navbar/>
                        </div>
                    } />
                </Routes>
            </>
        );
    }

} export default MainContainer;

