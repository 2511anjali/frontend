import React from 'react'
function Hero() {
    return ( 
        <div className='hero_div bg-primary my-5'>
            <div className='container mt-5 pt-5'>
                <div className='row mb-5'>
                    <div className='col-7'>
                        <p className='support_para'> Support Portal</p>
                        <br/>
                        <p className='support_para2'>Search for an answer or browse help topics to create a ticket</p>
                        <br/>
                        <div className='d-flex mb-3'>
                        <input class="form-control " type="search" placeholder='Eg:How do i activate F&O, why is my order getting rejected...' aria-label="Search"></input>
                        <button type="button" class=" search_btn btn btn-light"><img src='media/search.svg'/></button>
                        </div>
                        <a className='fs-5 text-white '>Track account opening</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className='fs-5 text-white '>Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className='fs-5 text-white'>Intraday margins</a><br/>
                        <div className='my-3'>
                        <a className='fs-5 text-white '>Kite user manual</a>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className=' container d-flex justify-content-end mb-5'>
                            <a className='fs-5 text-white'>Track Tickets</a>
                        </div>
                        <h3 className='text-white mt-5 mb-2'>Featured</h3>
                        <div className='container mt-2 '>
                            <br/><a className='fs-5 text-white'>Current trackovers and Deslisting-June2024</a><br/><br/>
                            <a className='fs-5 text-white'>Latest Intraday leverages and Square-off timings</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;