import React from 'react'
function Left() {
    return ( 
        <div className='container my-5 '>
            <div className='row'>
                <div className='col-8'>
                    <img src='media/products-kite.png' alt="kite"/>
                </div>
                <div className='col-4'>
                     <h1 className='text-secondary  my-5'>Kite</h1>
                     <p className='text-secondary fs-5'>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
                      <div className='d-flex justify-content-between w-75'>
                      <a className='text-decoration-none '>Try demo<img className='mr-5'src='media/arrow-right.svg'/></a>
                      <a className='text-decoration-none '>Learn more<img src='media/arrow-right.svg'/></a>
                      </div>
                      <div className='d-flex justify-content-between w-75'>
                        <img  src='media/google-play-badge.svg'></img>
                        <img  src='media/appstore-badge.svg'></img>
                      </div>
                </div>
            </div>
            <div className='row my-5 '>
                 <div className='col-4 pt-5 my-5'>
                    <h1 className='text-secondary my-5'>Console</h1>
                    <p className='text-secondary fs-5'>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
                    <a className='text-decoration-none'>Learn more<img src='media/arrow-right.svg'></img></a>
                 </div>
                 <div className='col-8 d-flex justify-content-center'>
                    <img src='media/products-console.png'></img>
                 </div>
            </div>
            <div className='row my-5 pt-5'>
                <div className='col-8'>
                    <img src='media/products-coin.png'></img>
                </div>
                <div className='col-4'>
                    <h1 className='text-secondary mb-3'>Coin</h1>
                    <p className='text-secondary fs-5'>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>
                    <a className='text-decoration-none'>Coin<img src='media/arrow-right.svg'></img></a>
                    <div className=' d-flex justify-content-between'>
                        <img src='media/google-play-badge.svg'></img>
                        <img src='media/appstore-badge.svg'></img>
                    </div>
                </div>
            </div>
            <div className='row my-5 pt-5'>
                <div className='col-4'>
                    <h1 className='text-secondary my-3 pt-5'>Kite connect API</h1>
                    <p className='text-secondary fs-5 mb-2'>Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.</p>
                    <a className='text-decoration-none'>Kite connect<img src='media/arrow-right.svg'></img></a>
                </div>
                <div className='col-8 d-flex justify-content-center'>
                    <img src='media/products-kiteconnect.png'></img>
                </div>
            </div>
            <div className='row my-5 pt-5'>
                <div className='col-8 d-flex justify-content-center'>
                    <img src='media/varsity-products.png'></img>
                </div>
                <div className='col-4'>
                    <h1 className='mt-5 mb-3 pt-5'>Varsity Mobile</h1>
                    <p className='mb-2'>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>
                    <div className='d-flex justify-content-between'>
                        <img src='media/google-play-badge.svg'></img>
                        <img src='media/appstore-badge.svg'></img>
                    </div>
                </div>
            </div>
            <div className='container text-center'>
            <p className='my-5 pt-5 fs-5'>Want to know more about our technology stack? Check out the <a className='text-decoration-none'>Zerodha.tech</a> blog.</p>
            </div>
        </div>
     );
}

export default Left;
