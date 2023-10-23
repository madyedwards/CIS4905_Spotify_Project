import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { MenuItems } from '../../MenuItems.js';
import './Dropdown.css';


// cname is the target for dropdown
// menuitems will replace w api calls for spotify data
function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
        <ul onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItems.map((item,index) => {
                return (
                    <li key={index}>
                        <Link 
                        className={item.cName} 
                        to={item.path}
                        onClick={() =>setClick(false)}
                        >
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>

        </>

    );
}

export default Dropdown;