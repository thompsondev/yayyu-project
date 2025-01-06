import React from 'react'
import Image from 'next/image';
import googleImage from "../assets/google-logo-9808 1.png"

const SignUp = () => {
  return (
    <div className='mt-10 max-w-full-md mx-auto md:px-24 max-w-full-sm sm:px-6 max-w-full-lg lg:px-32'> 
        <div className='container '>
            <h1 className='lg:text-[40px] sm:text-[30px] font-normal font-font2 text-center'>Register your account</h1>
            <div className='lg:mx-60 mt-7'>
              <form className='w-full' >
                <div className='mb-3'>
                  <label htmlFor="" className='text-[14px] font-medium'>First name</label><br/>
                  <input type="text" placeholder='First name' className='border-2 p-[10px] rounded-[4px] w-full'/>
                </div>
                <div className='mb-3'>
                  <label htmlFor="" className='text-[14px] font-medium'>Last name</label><br/>
                  <input type="text" placeholder='Last name' className='border-2 p-[10px] rounded-[4px] w-full'/>
                </div>
                <div className='mb-3'>
                  <label htmlFor="" className='text-[14px] font-medium'>E-mail</label><br/>
                  <input type="email" placeholder='email' className='border-2 p-[10px] rounded-[4px] w-full'/>
                </div>
                <div className='mb-3'>
                  <label htmlFor="" className='text-[14px] font-medium'>Your Password</label><br/>
                  <input type="password" placeholder='Password' className='border-2 p-[10px] rounded-[4px] w-full'/>
                </div>
                <div className='mb-3'>
                  <input type="password" placeholder='Comfirm Password' className='border-2 p-[10px] rounded-[4px] w-full'/>
                </div>
                <div className='text-[#636060] lg:text-[10px] sm:text-[8px] font-medium flex items-center justify-between mb-5'>
                  <p >
                    By clicking , signup you agree to yayyu Terms of Use and Privacy Policy
                  </p>
                  <p>
                    Forget password?               
                  </p>
                </div>
                <button className='bg-black hover:bg-[#FCBA41] text-white w-full py-4'>Signup</button>
                <p className='text-[20px] font-medium py-2 text-center'>OR</p>
                <button className='bg-black hover:bg-[#FCBA41] text-white w-full py-4 flex items-center justify-center gap-x-4'><Image src={googleImage} alt='google'/> Sign up with google </button>
              </form>
            </div>
            

        </div>
    </div>
  )
}

export default SignUp