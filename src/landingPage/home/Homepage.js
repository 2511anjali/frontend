import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Pricing';
import Education from './Education';
import Openaccounts from '../Openaccounts';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Stats from './stats';
function Homepage() {
    return ( 
        <>
           <Navbar/>
           <Hero/>
           <Awards/>
           <Stats/>
           <Pricing/>
           <Education/>
           <Openaccounts/>
           <Footer/>
        </>
     );
}

export default Homepage;
 
