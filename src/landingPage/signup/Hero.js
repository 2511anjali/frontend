import React from 'react'
function Hero() {
    return (
         <div className='container mt-5'>
            <div className='row'>
                <div className='col-7 pt-5 ml-5 text-end'>
                    <img className='landing'src='media/landing1.png' alt='landing'/>
                </div>
                <div className='col-5 pt-5 '>
                    <h1 className=' pb-3'> Signup now</h1>
                    <p className='pb-2 text-muted '>Or track your existing application</p>
                    <div class="input-group flex-nowrap pb-3">
                        <span class="input-group-text" id="addon-wrapping">+91</span>
                       <input type="text" class="form-control" placeholder="Mobile number"  />
                   </div>
                   <p className='pb-2' id='para2'>You will recieve an otp on your number</p>
                   <button type="button" class="btn btn-primary pb-2">Continue</button>
                   <br/>
                   <a className='text-decoration-none' id='choice'>Want to open an NRI account?</a>
                </div>
            </div>
         </div>
      );
}

export default Hero;