import React from 'react';
import Button from '../button';
import './Hero.css';
import '../../App.css';
import CardHolder from '../card/CardHolder';

// for some reason this info isnt showing in the website?
// prob an error with the imports
function Hero() {
  return (
    <div className='hero-container'>
        <video src='../../../public/videos/background.mp4' autoPlay loop muted/>
        <h1>
            Generate a Playlist!
        </h1>
        <p>
            I want to create a playlist based on [dropdown of options].
            I want to include [number of songs].
            
        </p>
        <div className='hero-btns'>
            <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
        > 
            GENERATE
            </Button>
        </div>
        {/* <div className='hero-btns'>
            <Button 
            className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'
        > 
            Watch Trailer <i classname='far fa-play-circle'></i>
            </Button>
        </div> */}

    </div>
  )
}

export default Hero