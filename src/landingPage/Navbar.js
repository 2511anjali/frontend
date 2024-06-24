import React from 'react'
function Navbar() {
    return (  
        <div className='nav-div mb-5'>
            <div className='container'>
              <a className='active'><img src='media/logo.svg' className='main_logo'></img></a>
           </div>
           <div className='nav-item'>
              <a className='active' href='/signup'>Signup</a>
              <a className='active' href='/about'>About</a>
              <a className='active' href='/products'>Products</a>
              <a className='active' href='/pricing'>Pricing</a>
              <a className='active' href='/support'>Support</a>
              <img src='media/list.svg' className='list_img' alt='list_image'/>
           </div>
           
        </div>
    );
}

export default Navbar;