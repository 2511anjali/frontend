import React from 'react'
function Universe() {
    return ( 
        <div className='container my-5 pt-5 text-center'>
            <h1 className='my-3'>The Zerodha Universe</h1>
            <p className='fs-6'>Extend your trading and investment experience even further with our partner platforms</p>
            <div className='container my-5 '>
                <div className='row'>
                    <div className='col-4'>
                     <a className='text-decoration-none text-muted'><img className='universe_image'src='media/smallcase-logo.png'/><br/>
                     <p className=' universe_para  pb-3'>Thematic investment platform</p>
                      </a>
                      <a className='text-decoration-none text-muted'><img className='universe_image'src='media/zerodhafundhouse.png'/><br/>
                     <p className='universe_para f'>Asset Management</p>
                      </a>
                    </div>
                    <div className='col-4'>
                     <a className='text-decoration-none text-muted'><img className='universe_image' src='media/streak-logo.png'/><br/>
                     <p className='universe_para  pb-3'>Algo & Strategy Platform</p>
                      </a>
                      <a className='text-decoration-none text-muted'><img className='universe_image' src='media/tijori.svg'/><br/>
                     <p className='universe_para '>Fundamental Research Platform</p>
                      </a>
                    </div>
                    <div className='col-4'>
                     <a className='text-decoration-none text-muted'><img className='universe_image' src='media/sensibull-logo.svg'/><br/>
                     <p className='universe_para  pb-3'>Options Trading Platform</p>
                      </a>
                      <a className='text-decoration-none text-muted'><img className='universe_image' src='media/ditto-logo.png'/><br/>
                     <p className='universe_para '>Insurance</p>
                      </a>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary btn-lg mb-5'>Signup now</button>
        </div>
     );
}


export default Universe;