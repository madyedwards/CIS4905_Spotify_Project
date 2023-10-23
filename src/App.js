import React from 'react';
import Button from './components/button';
import axios from 'axios';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
// why do i have to import it here to get it to show for hero, but not for navbar
function App() {
  return (
    <>
      <Router>
        <Navbar>
          <Routes>
            <Route path='/' exact component={Home}/>
            <Route path='/service' component={Services} />
            <Route path='/product' component={Product} />
            <Route path='sign-up'component={Signup} />
          </Routes> 
        </Navbar>
        <Dropdown>
          Dropdown here test 
        </Dropdown>
        {/* <Button
          onClick={getStuff}
          type="button"
        >
          click here test!
        </Button> */}
        <Hero>

        </Hero>
        <CardHolder>

        </CardHolder>
      </Router>
    </>
  );
}


export default App;
