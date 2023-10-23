import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button';
//import { Button } from './Button';
import './Navbar.css';

// using react router dom?
// click ? means if not clicked its the times, if clicked its bars

function Navbar() {
  // useStates
  const [click, setClick] = useState(false);  
  const [button, setButton] = useState(true);

  // updating useStates
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //function to display based on screen size
  const showButton = () => {  
    if(window.innerWidth <= 960) {
      setButton(false);
    }
    else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);
  
  // link to get to other sites seems to not be working
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
           <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            PlaylistGen <i class="fa-regular fa-moon"></i> 
           </Link> 
           <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
           </div>
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/service' 
              className='nav-links' 
              onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
              to='/product' 
              className='nav-links' 
              onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
              to='/sign-up' 
              className='nav-links-mobile' 
              onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
           </ul>
           {Button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
    </nav>
    </>
  );
}

export default Navbar;