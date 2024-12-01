import React from 'react'

const footer = () => {
  return (
    <div className='m-10'>
        <div className='flex justify-between'>
            <div>
                <h4 className='font-semibold'>Subscribe to our newsletter</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='flex space-x-2'>
               <div>
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="border border-gray-900 rounded-lg p-2 w-full h-10 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <p className='text-sm'>By subscribing you agree to with our <span className='underline'>Privacy Policy</span> </p>
                </div>
                <button className='border-[1px] border-black w-52 h-10 rounded-lg hover:bg-black hover:text-white duration-300'>Subscribe</button>
            </div>
            
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 mt-20'>
                <div>
                    <img 
                    src={"/logo/logo.svg"} 
                    alt="logo" 
                    height={40}
                    width={125}
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

        <div className='flex justify-between border-t-[1px] border-black'>
            <div className='flex mt-7'>
                <p className='text-sm'>2023 Ddsgnr. All right reserved.</p>
                <div className='flex space-x-5'>
                    <p className='text-sm underline ml-5'>Privacy Policy</p>
                    <p className='text-sm underline'>Terms of Service</p>
                    <p className='text-sm underline'>Cookies Settings</p>
                </div>    
            </div>
            <div className="flex justify-end space-x-4 mr-4 mt-6">
                 <img src={"/icon/Facebook.svg"} alt="logo" height={28} width={28} />
                 <img src={"/icon/Instagram.svg"} alt="logo" height={28} width={28} />
                <img src={"/icon/Twitter.svg"} alt="logo" height={28} width={28} />
                <img src={"/icon/Linkedin.svg"} alt="logo" height={28} width={28} />
            </div>
        </div>
        
    </div>
  )
}

export default footer
