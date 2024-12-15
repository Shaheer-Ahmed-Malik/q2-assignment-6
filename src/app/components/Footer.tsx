import React from 'react'

const Footer = () => {
  return (
    <div className='m-10'>
        <div className='flex flex-col md:flex-row justify-center md:justify-between text-center md:text-start'>
            <div className='mb-4'>
                <h4 className='font-semibold'>Subscribe to our newsletter</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='md:flex space-y-4 md:space-y-0 md:space-x-10'>
                <div>
                    <input
                    type="text"
                    placeholder="Enter your email"
                    className="border border-gray-900 rounded-lg p-2 w-full md:w-60 h-10 focus:outline-none focus:ring-1 text-center md:text-left focus:ring-blue-500"/>
                    <p className='text-xs'>By subscribing you agree to with our</p>
                    <p className="underline text-xs text-slate-500">Privacy Policy</p>
                </div>
                <button className='border-[1px] border-black w-full md:w-52 h-10 rounded-lg hover:bg-black hover:text-white duration-300'>Subscribe</button>
            </div>
            
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 mt-20 text-center md:text-start justify-center'>
                <div>
                    <img 
                    src="/logo/logo1.svg"
                    alt="logo" 
                    height={40}
                    width={125}
                    className='pb-8'
                    />
                </div>
                <div>
                    <h4 className='font-semibold h-12'>Courses</h4>
                    <ul className='text-sm'>
                        <li className='h-10'>Business</li>
                        <li className='h-10'>Development</li>
                        <li className='h-10'>Technology</li>
                        <li className='h-10'>Design</li>
                        <li className='h-10'>Programming</li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-semibold h-12'>Resources</h4>
                    <ul className='text-sm'>
                        <li className='h-10'>Career</li>
                        <li className='h-10'>Resume</li>
                        <li className='h-10'>Learning</li>
                        <li className='h-10'>Interview Preparation</li>
                        <li className='h-10'>Jobs</li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-semibold h-12'>About Us</h4>
                    <ul className='text-sm'>
                        <li className='h-10'>Contact</li>
                        <li className='h-10'>Help/Support</li>
                        <li className='h-10'>FAQ</li>
                        <li className='h-10'>Terms and Conditions</li>
                        <li className='h-10'>Partners</li>
                    </ul>
                </div>
            </div>    

        <div className='flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-6 text-center border-t-[1px] border-black'>
            <div className='flex flex-col md:flex-row mt-7'>
                <p className='text-sm'>2023 Ddsgnr. All right reserved.</p>
                <div className='flex justify-between mt-4 md:mt-0 md:space-x-5'>
                    <p className='text-sm underline md:ml-5'>Privacy Policy</p>
                    <p className='text-sm underline'>Terms of Service</p>
                    <p className='text-sm underline'>Cookies Settings</p>
                </div>    
            </div>
            <div className="flex justify-center md:justify-end space-x-4 md:mr-4 md:mt-6">
                 <img src="/icon/facebook-1.svg" alt="logo" height={28} width={28} />
                 <img src="/icon/instagram-2.svg" alt="logo" height={28} width={28} />
                <img src="/icon/twitter-4.svg" alt="logo" height={28} width={28} />
                <img src="/icon/linkedin-3.svg" alt="logo" height={28} width={28} />
            </div>
        </div>
        
    </div>
  )
}

export default Footer
