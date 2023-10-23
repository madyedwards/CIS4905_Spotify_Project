import React from 'react';
import Card from './index';
import './CardHolder.css';

// ul tag makes it so they separate; outside it will open a new row
function CardHolder() {
  return (
    <div className='cards'>
        <h1>
            Check out these epic destinations
        </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Card 
                    //src="image.jpg"
                    text="explore the hidden waters"
                    label="Adventure"
                    path='/services'
                    />
                    <Card 
                    //src="image.jpg"
                    text="i wonder how ill use this in my site"
                    label="wow crazy"
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CardHolder