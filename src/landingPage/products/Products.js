import React from 'react'
import Navbar from '../Navbar';
import Hero from './hero';
import Left from './left';
import Footer from '../Footer';
import Universe from './universe';
function Products() {
    return ( 
        <>
           <Navbar/>
           <Hero/>
           <Left/>
           <Universe/>
           <Footer/>
        </>
    );
}

export default Products;