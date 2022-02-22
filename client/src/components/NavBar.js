import React from "react";
import {Link} from 'react-router-dom';

function NavBar() {
 
    return(
        <header>
            <div>
                <React.Fragment>
                <Link to="/user">My Profile</Link>
                <Link to="/entries">My Admirers</Link>
                <Link to="/new-entry">New Admirer</Link>
                </React.Fragment>
            </div>
            <div>
               <p>This Is Your...</p>
                <h1>JOURNEY</h1> 
            </div>
        </header>
    )
};

export default NavBar;