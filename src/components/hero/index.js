import React from 'react';
import Button from '../button';
import './Hero.css';
import '../../App.css';
import CardHolder from '../card/CardHolder';
import { useState } from 'react';
import ControlledComponent from '../form';
import { Link } from 'react-router-dom';


// for some reason this info isnt showing in the website?
// prob an error with the imports
function Hero() {

  // const [click, setClick] = useState(true);
  // const handleClick = () => setClick(!click);

  return (
    <div className='hero-container'>
        <video src='../../../public/videos/background.mp4' autoPlay loop muted/>
        <h1>
            Generate a Playlist!
        </h1>
        <p>
            I want to create a playlist based on 
            <select>
                <option value=""> </option>
                <option value=""> artists </option>
                <option value=""> genres </option>
                <option value=""> songs </option>
            </select>
            . I want to include <ControlledComponent/> songs in my playlist.
        </p>
        <div className='hero-btns'>
            <Link to='/playlist'>
              <Button 
              className='btns' 
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              > 
              GENERATE
             </Button>   
            </Link>
        </div>
    </div>
  )
}

export default Hero