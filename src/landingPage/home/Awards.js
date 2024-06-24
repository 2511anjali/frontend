import React from 'react'
function Awards() {
    return ( 
       <div className='container mt-5 '>
          <div className='row'>
             <div className='col-6'>
                 <img src="media/largest-broker.svg" alt='Broker image' className='mr-5' height="250px"/>
             </div>
             <div className='col-6 fs-6'>
                 <h1  > 
                     Largest stock broker in India
                 </h1>
                 <p className='mt-4'>
                    1.5+ Crore Zerodha clients contribute over 15% of all retail order volumes in India daily by trading and investing in:
                 </p>
                    <div className='row mb-5'>
                        <div className='col-6 '>
                            <ul>
                                <li className='pb-2'>Futures and Options</li>
                                <li className='pb-2'>Commodity derivatives</li>
                                <li className='pb-2'>Currence derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6 '>
                            <ul>
                                <li className='pb-2'>Stocks and IPOs</li>
                                <li className='pb-2'> Direct mutual funds</li>
                                <li className='pb-2'>Bonds and Gov. Securities</li>
                            </ul>
                        </div>
                        <img src='media/press-logos.png' alt="Logo images" className='mb-5'></img>
                    </div>
             </div>
          </div>
       </div>
     );
}

export default Awards;