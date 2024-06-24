import React from 'react'
function Stats() {
    return ( 
        <div className='container my-5'>
           <div className='row'>
              <div className='col-6'>
                  <h1>
                      Trust with confidence
                   </h1>
                   <h5 className='mt-5'> Customer-first always</h5>
                   <p className='text-secondary fs-6 '> That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>
                   <h5 className='mt-5'>No spam or gimmicks</h5> 
                   <p className='text-secondary'> No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                   <h5 className='mt-5'>The Zerodha universe</h5> 
                   <p className='text-secondary'> Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                   <h5 className='mt-5'>Do better with money</h5> 
                   <p className='text-secondary'> With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
               </div> 
                <div className='col-6 mb-5'>
                    <img src="media/ecosystem.png" alt='Ecosystem image' className=' pr-5' height="650px" width="600px"/>
                        <a href='src/landingPage/products/Products.js' className='mx-5' style={{textDecoration:"none"}}>Explore our products<img src='media/arrow-right.svg'/></a>
                        <a href='src/landingPage/products/Products.js' className='mx-5' style={{textDecoration:"none"}}>Try Kite demo<img src='media/arrow-right.svg'/></a>
                </div >
            </div>
        </div>    
    );
}

export default Stats;
