import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div>
        {/* sm */}
        <div className="block md:hidden">
        <div className="flex justify-between items-center border-b border-black pr-6 pl-2 h-20">
            <Image
            src="/logo/logo1.svg"
            alt="logo"
            width={150}
            height={140} 
            />
            <Image
            src="/icon/hamburger.svg"
            alt="logo"
            width={20}
            height={125} 
            />
          </div>
        </div>
        {/* large */}
        <div className="hidden md:block">
        <div className="flex justify-between bg-primary h-14 m-1 border-b-[1px] border-black">
          <ul className="flex space-x-6 ml-8 items-center">
            <li>Phone Number: 956 742 455 678</li>
            <li className="border-l-2 border-black px-6">
              Email: info@ddsgnr.com
            </li>
          </ul>

          <div className="flex justify-end space-x-4 mr-4">
            <Image
              src="/icon/facebook-1.svg"
              alt="logo"
              height={28}
              width={28}
            />
            <Image
              src="/icon/instagram-2.svg"
              alt="logo"
              height={28}
              width={28}
            />
            <Image
              src="/icon/twitter-4.svg"
              alt="logo"
              height={28}
              width={28}
            />
            <Image
              src="/icon/linkedin-3.svg"
              alt="logo"
              height={28}
              width={28}
            />
          </div>
        </div>
        {/* logo */}
        <div className="flex m-1 justify-between items-center bg-primary h-14 border-b-[1px] border-black">
          <div>
            <Link href="/">
              <Image src="/logo/logo1.svg" alt="logo" height={40} width={150} />
            </Link>
          </div>
          <div className="flex space-x-6 m-5 pl-3 bg-white rounded">
            <ul className="flex m-1 items-center space-x-6">
              <li className="hover:cursor-pointer hover:underline hover:underline-offset-[15px]">
                Home
              </li>
              <li className="hover:cursor-pointer hover:underline hover:underline-offset-[15px]">
                Courses
              </li>
              <li className="hover:cursor-pointer hover:underline hover:underline-offset-[15px]">
                Services
              </li>
              <li className="hover:cursor-pointer hover:underline hover:underline-offset-[15px]">
                Achievement
              </li>
              <li className="hover:cursor-pointer hover:underline hover:underline-offset-[15px]">
                About us
              </li>
              <li className="hover:cursor-pointer hover:underline hover:underline-offset-[15px]">
                Testimonial
              </li>
            </ul>
            <button className="border-[1px] border-black w-20 rounded-lg hover:bg-black hover:text-white hover:border-hidden duration-300">
              login
            </button>
            <button className="h-10 w-20 bg-black text-white rounded-lg hover:bg-white hover:text-black duration-300">
              sign up
            </button>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Header;
