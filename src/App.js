import React from 'react';
import Button from './components/button';
import axios from 'axios';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import Hero from './components/hero';
import CardHolder from './components/card/CardHolder';
import Services from './pages/Services';
import Product from './pages/Product';
import Signup from './pages/Signup';
import Dropdown from './components/dropdown';

// using react 6, so switch does not work; confirm how to work pages

//dont use var, only const (if not needed ot reassign)
//**arrow function, cna put any parameters in () and function in {}, create async function that tells there is an api 
//call in the future, can run async
// eveyrthing returned saved in results var, can also be data
const getStuff = async()=>{const results = await axios.get('exampleurl')
  return results.data;
};

//the main app site
// export this to get the site to run

// in actual site: go to webpage Home, Loading, and Playlist
// is loading a site? how can i get it to do a little loading animation, then jump to the playlist
// export can also be an option, but should only do this if i have time at the end of the project
function App() {
  return (
    <>
      <Router>
        {/* <Navbar> */}
        <Navbar />
          <Routes>
            <Route path='/' key='/' exact element={<Home />}/>
            <Route path='/service' key='/service' element={<Services />} />
            <Route path='/product' key='/product' element={<Product />} />
            <Route path='sign-up' key='/sign-up' element={<Signup />} />
          </Routes> 
        {/* </Navbar> */}
        
  
        {/* <CardHolder /> */}
      </Router>
    </>
  );
}


export default App;
