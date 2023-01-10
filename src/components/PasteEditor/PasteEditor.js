import React from 'react';
import './PasteEditor.css';
import Navbar from "../Navbar/Navbar";
import CodeInputInterface from "../CodeInputInterface/CodeInputInterface";
import Sidebar from "../Sidebar/Sidebar";

export class PasteEditor extends React.Component{
    render() {
        return (
            <div className="PasteEditor">
                <Navbar/>
                <CodeInputInterface/>
            </div>
        );
    }

}