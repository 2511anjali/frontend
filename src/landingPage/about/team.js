import React from 'react'
function Team() {
    return ( 
        <div className='container text-center'>
            <h1>People</h1>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-6 '>
                      <img style={{height:300,width:300,borderRadius:"100%"}}src='media/nithin-kamath.jpg'/>
                      <p className='fs-5 fw-medium'>Nithin Kamath</p>
                      <p className='fs-6 text-muted'>Founder,CEO</p>

                    </div>
                    <div className='col-6 text-start '>
                      <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                        <br/><br/>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                        <br/><br/>
                        Playing basketball is his zen.
                        </p>
                        <p>Connect on <a className='text-decoration-none fw-medium'>Homepage</a> / <a className='text-decoration-none fw-medium'> TradingQnA</a> /<a className='text-decoration-none fw-medium'> Twitter</a></p>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Team;
