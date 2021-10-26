import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className = "header-wrapper">
       <h1>Math Magicians</h1>
       <ul>
       <Link to ='/calculator' ><li>Home</li></Link>
       <Link to ='/Calc' ><li>Calculator</li></Link>
       <Link to ='/Quote' ><li>Quote</li></Link>
       </ul>
    </div>
);

export default Header;