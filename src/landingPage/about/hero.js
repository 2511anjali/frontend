import React from 'react'
function Hero() {
    return ( 
        <div className='container my-5'>
            <div className='container text-center my-5 py-5' style={{height:160}}>
              <h3 className='text-secondary'>We pioneered the discount broking model in India.
             <br/> Now, we are breaking ground with our technology.</h3>
           </div> 
           <div className='conntainer my-5'>
            <div className='row'>
                <div className='col-6 pr-2 '>
                    <p className='fs-6 text-secondary'>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                    <br/><br/>
                    Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                    <br/><br/>
                    Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className='col-6 pl-2 '>
                    <p className='fs-6 text-secondary'>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                    <br/><br/>
                    <a className='text-decoration-none'>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    <br/><br/>
                    And yet, we are always up to something new every day. Catch up on the latest updates on our <a className='text-decoration-none'>blog</a> or see what the media is <a className='text-decoration-none'>saying about us.</a></p>
                </div>
            </div>
           </div>
        </div>
     );
}

export default Hero;