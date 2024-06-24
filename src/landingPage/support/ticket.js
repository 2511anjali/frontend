import React from 'react'
function Tickets() {
    return (
        <div className='container'>
          <p className='fs-4 mt-5'>To create a ticket, select a relevant topic</p>
          <div className='row'>
            <div className='col-4'>
               <a className='text-decoration-none text-dark fs-4'>
                <img  style={{height:20}} src='media/plus-circle.svg'></img>Account opening
               </a><br/><br/>

               <a className='ticket_anchor text-decoration-none'>Getting started</a><br/>
               <a className='ticket_anchor text-decoration-none'>Online</a><br/>
               <a className='ticket_anchor text-decoration-none'>Offline</a><br/>
               <a className='ticket_anchor text-decoration-none'>Charges</a><br/>
               <a className='ticket_anchor text-decoration-none'>Company,Partnership & HUF</a><br/>
               <a className='ticket_anchor text-decoration-none'>Non Resident Indian(NRI)</a><br/><br/>

               <a className='text-decoration-none text-dark fs-4'>
                <img  style={{height:20}} src='media/wallet.svg'></img>Funds
               </a><br/><br/>

               <a className='ticket_anchor text-decoration-none'>Fund withdrawal</a><br/>
               <a className='ticket_anchor text-decoration-none'>Adding Funds</a><br/>
               <a className='ticket_anchor text-decoration-none'>Adding Bank accounts</a><br/>
               <a className='ticket_anchor text-decoration-none'>eMandates</a><br/><br/>

            </div>


            <div className='col-4'>
              <a className='text-decoration-none text-dark fs-5'>
                <img style={{height:20}}  src='media/person.svg'></img>Your Zerodha Account
              </a><br/><br/>

              <a className='ticket_anchor text-decoration-none'>Login credentials</a><br/>
              <a className='ticket_anchor text-decoration-none'>Your Profile</a><br/>
              <a className='ticket_anchor text-decoration-none'>Account modification and segment addition</a><br/>
              <a className='ticket_anchor text-decoration-none'>CMR & DP ID</a><br/>
              <a className='ticket_anchor text-decoration-none'>Nomination</a><br/>
              <a className='ticket_anchor text-decoration-none'>Transfer and conversion of shares</a><br/><br/>

              <a className='text-decoration-none text-dark fs-4 '>
                <img  style={{height:20}} src='media/c-circle.svg'></img>Console
               </a><br/><br/>
                
               <a className='ticket_anchor text-decoration-none'>IPO</a><br/>
               <a className='ticket_anchor text-decoration-none'>Portfolio</a><br/>
               <a className='ticket_anchor text-decoration-none'>Fund statements</a><br/>
               <a className='ticket_anchor text-decoration-none'>Profile</a><br/>
               <a className='ticket_anchor text-decoration-none'>Reports</a><br/>
               <a className='ticket_anchor text-decoration-none'>Referal Programs</a><br/>

            </div>


            <div className='col-4'>
            <a className='text-decoration-none text-dark fs-5'>
                <img  style={{height:20}} src='media/bar-chart.svg'></img>Trading & Markets
               </a><br/><br/>

               <a className=' ticket_anchor text-decoration-none '>Trading FAQs</a><br/>
               <a className=' ticket_anchor text-decoration-none'>Kite</a><br/>
               <a className=' ticket_anchor text-decoration-none'>Margins</a><br/>
               <a className=' ticket_anchor text-decoration-none'>Products and order types</a><br/>
               <a className=' ticket_anchor text-decoration-none'>Corporate actions</a><br/>
               <a className=' ticket_anchor text-decoration-none'>Kite features</a><br/><br/>

               <a className='text-decoration-none text-dark fs-4'>
                <img  style={{height:20}} src='media/coin.svg'></img>Coin
               </a><br/><br/>

               <a className=' ticket_anchor text-decoration-none'>Understanding mutual funds and Coin</a><br/>
               <a className=' ticket_anchor text-decoration-none'>Coin app</a><br/>
               <a className=' ticket_anchor text-decoration-none'>Coin web</a><br/>
               <a className='ticket_anchor text-decoration-none'>Transaction reports</a><br/>
               <a className='ticket_anchor text-decoration-none'>Ntional Pension Scheme(NPS)</a><br/>

            </div>
          </div>
        </div>
      );
}

export default Tickets;