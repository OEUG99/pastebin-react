import React from 'react';
import './Navbar.css';

class Navbar extends React.Component{
    render() {
        return (
            <div className="Navbar">
                <a className="home" href="#home">Paste Site</a>
                <a href="#news">News</a>
            </div>
        );
    }

} export default Navbar;