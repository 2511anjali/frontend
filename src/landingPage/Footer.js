import React from 'react'
function Footer() {
    return ( 
          <div className='mt-5'>
            <hr/>
            <div className='container'>
                <div className='row'>
                    <div className='col-3 '>
                        <img src='media/logo.svg' style={{height:30, width:80}}/>
                        <p className='fs-6 text-muted'>© 2010 - 2024,Zerodha Broking Ltd.
                           All rights reserved.
                        </p>
                        <div className='container '>
                            <div className='col d-flex justify-content-around'>
                             <a ><img src='media/twitter-x.svg'/></a>
                             <a ><img src='media/facebook.svg'/></a>
                             <a ><img src='media/instagram.svg'/></a>
                             <a ><img src='media/linkedin.svg'/></a>
                            </div>
                           <hr/>
                           <div className='col d-flex  justify-content-around'>
                              <a ><img src='media/youtube.svg'/></a>
                              <a ><img src='media/whatsapp.svg'/></a>
                              <a ><img src='media/telegram.svg'/></a>
                           </div>
                        </div>
                    </div>
                    <div className='col-3 '>
                        <h5 >Company</h5>
                        <a className='f_tag ' >About</a><br/>
                        <a className=' f_tag'>Products</a><br/>
                        <a className='f_tag'>Pricing</a><br/>
                        <a className='f_tag '>Referral programme</a><br/>
                        <a className='f_tag'>Careers</a><br/>
                        <a className='f_tag '>Zerodha.tech</a><br/>
                        <a className='f_tag '>Press and Media</a><br/>
                        <a className='f_tag'>Zerodha cares(CSR)</a><br/>
                    </div>
                    <div className='col-3'>
                        <h5>Support</h5>
                        <a className='f_tag '>Contact us</a><br/>
                        <a className='f_tag '> Support Portal</a><br/>
                        <a className='f_tag '>Z-connect blog</a><br/>
                        <a className='f_tag '>List of charges</a><br/>
                        <a className='f_tag '>Downloads & Resources</a><br/>
                        <a className='f_tag '>Videos</a><br/>
                        <a className='f_tag '>Market overview</a><br/>
                        <a className='f_tag '>How to file a complaint?</a><br/>
                        <a className='f_tag '>Statue of your complaints</a><br/>
                    </div>
                    <div className='col-3'>
                        <h5>Account</h5>
                        <a className='f_tag '>Open an account</a><br/>
                        <a className='f_tag'>Fund Transfer</a><br/>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
               <p className=' text-muted' id='footer_para' >Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX -SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. -SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 -SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a className='text-decoration-none'>complaints@zerodha.com</a>, for DP related to <a className='text-decoration-none'>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
               <br/>
               <br/>
               Procedure to file a complaint on <a className='text-decoration-none'>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances.
               <br/>
               <br/>
               <a className='text-decoration-none'>Smart Online Dispute Resolution</a>|<a className='text-decoration-none'>Grievances Redressal Mechanism</a>
               <br/>
               <br/>
               Investments in securities market are subject to market risks; read all the related documents carefully before investing.
               <br/>
               <br/>
               Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
               <br/>
               <br/>
               "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a className='text-decoration-none'>create a ticket here</a>.
               <br/>
               <br/>
               <div className='container ' id='anchor_tags'>
                <a className='tag'>NSE</a>
                <a className='tag'>BSE</a>
                <a className='tag'>MCX</a>
                <a className='tag'>Terms & conditions</a>
                <a className='tag'>Policies & procedures</a>
                <a className='tag'>Privacy policy</a>
                <a className='tag'>Disclosure</a>
                <a className='tag'>For invester's attention</a>
                <a className='tag'>Investor charter</a>
               </div>
               </p>
               
              
            </div>
          </div>

    );
}

export default Footer;