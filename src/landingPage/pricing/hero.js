import React from 'react'
function Hero() {
    return ( 
           <div>
            <div className='container text-center my-5 '>
                <h1 className='mt-5 pt-5 text-muted'>Pricing</h1>
                <p className='fs-5 py-3 text-muted'>Free equity investments and flat ₹20 intraday and F&O trades</p>
           </div>
           <br/>
           <br/>
           <br/>
           <hr />
            <div className='container mt-5 mb-5'>
                 <div className='row'>
                     <div className='col-4 '>
                          <img src='media/pricing-eq.svg' alt="Pricing image" />
                         <h3>Free equity delivery</h3>
                         <p > All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                       </div>
                       <div className='col-4'>
                          <img src='media/other-trades.svg' alt="Pricing image"/>
                         <h3>Intraday and F&O trades</h3>
                          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                       </div>
                       <div className='col-4'>
                           <img src='media/pricing-eq.svg' alt="Pricing image"/>
                          <h3>Free direct MF</h3>
                          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                       </div>
                   </div>
             </div>
           </div>
       
     );
}

export default Hero;
