import React from 'react';
import Button from '../button';
import './Hero.css';
import '../../App.css';

// for some reason this info isnt showing in the website?
// prob an error with the imports
function Hero() {
  return (
    <div className='hero-container'>
        {/*if i wanted a video it would go here but nah*/}
        <h1>
            Adventure Awaits
        </h1>
        <p>
            what are you waiting for
        </p>
        <div className='hero-btns'>
            <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
        > 
            Get Started
            </Button>
        </div>
        <div className='hero-btns'>
            <Button 
            className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'
        > 
            Watch Trailer <i classname='far fa-play-circle'></i>
            </Button>
        </div>

    </div>
  )
}

export default Hero