import React from 'react'
function Notfound() {
    return ( 
        <div className='container text-center my-5'>
            <img src='media/404.jpg'/>
            <p className=' fs-2 fw-medium text-muted'>Page not found</p>
            <a href='/'className='fs-6 text-decoration-none  fw-medium'>Click here to go Homepage</a>
        </div>
     );
}

export default Notfound;