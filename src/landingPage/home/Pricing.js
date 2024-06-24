import React from 'react'
function Pricing() {
    return ( 
        <div className='container mt-5'>
            <div className='row mb-5'>
                <div className='col-6'>
                   <h1>Unbeatable pricing </h1>
                   <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                   <a href='src/landingPage/pricing'style={{textDecoration:"none"}} >See pricing <img src="media/arrow-right.svg"/></a>
                </div>
                <div className='col-6 '>
                  <div className='row'>
                      <div className='col-6 border rounded text-center'>
                       <h1 className='currency text-muted pt-3'>&#8377;0</h1>
                       <p className='fs-6 pt-4 pb-3'> Free equity delivery and direct mutual funds</p>
                      </div>
                      <div className='col-6 border border-start-0 rounded text-center'>
                         <h1 className='currency text-muted pt-3'>&#8377;20</h1>
                         <p className='fs-6 pt-4 pb-3'> Intraday and F&O</p>
                      </div>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;