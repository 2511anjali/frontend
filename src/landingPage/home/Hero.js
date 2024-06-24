import React from 'react'
function Hero() {
    return (  
        <div className='container mb-5 mt-5'>
            <div className='row'>
                <div className='col  text-center'>
                    <img src='media/landing.png' alt='Hero Image ' height="300px" className='mb-5 mt-3 '/>
                    <h1 className=' mt-5 '>Invest in everything</h1>
                    <p className='fs-4'>Online plateform to invest in stocks,derivatives,mutual funds and more</p>
                    <button className='btn btn-primary mt-3 mb-5'>Sign up now</button>
                </div>
                
            </div>
        </div>
    );
}

export default Hero;
