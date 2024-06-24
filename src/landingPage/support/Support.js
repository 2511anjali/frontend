import React from 'react'
import Navbar from '../Navbar';
import Hero from './hero';
import Tickets from './ticket';
import Footer from '../Footer';
function SupportPage() {
    return ( 
        <>
           <Navbar/>
           <Hero/>
           <Tickets/>
           <Footer/>
        </>
     );
}

export default SupportPage;