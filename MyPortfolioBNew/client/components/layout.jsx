import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.png';
export default function Layout() {
 return (
 <>
 <div id="nav">
 < img src={logo}alt="logo" id="logo" width="250px" height="250px"/>
 </div>
 <h1>My Portfolio</h1>
 
 <nav>
    
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
 </nav>
<br/>
 <hr />
 
 </>
 
 );
}
