import React from 'react';
import '../App.css';
import Hero from '../components/hero';
import Card from '../components/card';
import Dropdown from '../components/dropdown';
import { Route } from 'react-router-dom';
import PlaylistDisplay from './PlaylistDisplay';

function Home () {
    return (
        <>
            {/* <Dropdown /> */}
            <Hero>
                <Route path='/playlist' key='/playlist' element={<PlaylistDisplay />} />
            </Hero>
        </>
    )
}

export default Home;