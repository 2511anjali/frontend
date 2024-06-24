import React from 'react'
function Education() {
    return ( 
        <div className='container my-5'>
            <div className='row'>
                <div className='col-6' >
                    <img src='media/index-education.svg' style={{height:300}}></img>
                </div>
                <div className='col-6'>
                    <h3 className='mb-3 pt-5 text-muted'>Free and open market education</h3>
                    <p className='my-3 fs-6'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a className='text-decoration-none'>Varsity<img src='media/arrow-right.svg'/></a>
                    <p className='my-3 fs-6'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a className='text-decoration-none'>TradingQ&A<img src='media/arrow-right.svg'/></a>
                </div>
            </div>
        </div>
     );
}

export default Education;