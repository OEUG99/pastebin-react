import React from 'react';
import './Sidebar.css';

class Sidebar extends React.Component{
    render() {
        return (
            <>
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

            </>
        );
    }

} export default Sidebar;