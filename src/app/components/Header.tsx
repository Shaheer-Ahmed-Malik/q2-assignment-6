import React from 'react'

const Header = () => {
  return (
    <div >
      <div className='flex justify-between bg-primary h-14 m-1 border-b-[1px] border-black'>
        <ul className="flex space-x-6 ml-20 items-center">
          <li>Phone Number: 956 742 455 678</li>
          <li className="border-l-2 border-black px-6">Email: info@ddsgnr.com</li>
        </ul>

        <div className="flex justify-end space-x-4 mr-4">
          <img src={"/icon/Facebook.svg"} alt="logo" height={28} width={28} />
          <img src={"/icon/Instagram.svg"} alt="logo" height={28} width={28} />
          <img src={"/icon/Twitter.svg"} alt="logo" height={28} width={28} />
          <img src={"/icon/Linkedin.svg"} alt="logo" height={28} width={28} />
        </div>
      </div>
      <div className='flex m-1 justify-between items-center bg-primary h-14 border-b-[1px] border-black'>
          <div className='ml-4'>
            <img 
            src={"/logo/logo.svg"} 
            alt="logo" 
            height={40}
            width={125}
            />
          </div>
          <div className="flex space-x-6 m-5 bg-white border-r-rounded">
              <ul className="flex m-1 items-center space-x-6">
                <li className='hover:cursor-pointer hover:underline hover:underline-offset-[15px]'>Home</li>
                <li className='hover:cursor-pointer hover:underline hover:underline-offset-[15px]'>Courses</li>
                <li className='hover:cursor-pointer hover:underline hover:underline-offset-[15px]'>Services</li>
                <li className='hover:cursor-pointer hover:underline hover:underline-offset-[15px]'>Achievement</li>
                <li className='hover:cursor-pointer hover:underline hover:underline-offset-[15px]'>About us</li>
                <li className='hover:cursor-pointer hover:underline hover:underline-offset-[15px]'>Testimonial</li>
              </ul>
                <button className='border-[1px] border-black w-20 rounded-lg hover:bg-black hover:text-white hover:border-hidden duration-300'>login</button>
                <button className='h-10 w-20 bg-black text-white rounded-lg hover:bg-white hover:text-black duration-300'>sign up</button>

          </div>
        </div>
      
    </div>
  )
}

export default Header
