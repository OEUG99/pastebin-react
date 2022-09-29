import React from 'react';
import './Sidebar.css';

class Sidebar extends React.Component{
    render() {
        return (
            <div>
                <p id="SidebarHeading">
                    <b><u>Recent Pastes: </u></b>
                </p>
                <div>
                    <ul id="RecentPastes">
                        <li>placeholder</li>
                        <li>placeholder</li>
                        <li>placeholder</li>
                        <li>placeholder</li>
                    </ul>
                </div>

            </div>
        );
    }

} export default Sidebar;