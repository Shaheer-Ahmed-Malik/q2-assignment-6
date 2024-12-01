import React from 'react';

export default function home() {
  return(
    <div>
      {/* home */}
        <div className="flex justify-between items-center mx-36">
          <div>
            <h1 className="text-6xl font-bold w-[500px]">Learn new skills online with ease</h1>
            <p className="w-[400px] mt-6">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
              <div className="mt-6 space-x-4">
                <button className="bg-black text-white h-12 w-48 rounded-lg">Start learning now</button>
                <button className="border-2 border-black h-12 w-48 rounded-lg">Explore Courses</button>
              </div>
          </div>
          <div>
            <img src={"/images/image-1.svg"} alt="image" width="420px" height="10px" className="align" />
          </div>
       </div>
       {/* trusted */}
       <div className="flex p-20 bg-primary text-xl font-bold justify-between items-center">
          <h2>Trusted by 2000+ companies worldwide</h2>
          <div className="flex justify-between space-x-4">
            <img src="/logo/air1.svg" alt="" />
            <img src="/logo/air2.svg" alt="" />
            <img src="/logo/air3.svg" alt="" />
            <img src="/logo/air4.svg" alt="" />
            <img src="/logo/air5.svg" alt="" />
          </div>
       </div>
       {/* explore courses */}
          <div className="text-center">
            <div>
              <h1 className="p-10 text-5xl font-bold ">Explore Courses By Category</h1>
              <p>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
              <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 gap-y-8">
                <div className="bg-primary rounded-md">
                  <img src={"/course-icon/pen-tool-2.svg"} alt="logo" height={28} width={28} />
                  <h1 className='font-bold'>Design & Development</h1>
                  <p>50+Ccouses Avaliable</p>
                </div>
                <div className="bg-primary rounded-md">
                  <img src={"/course-icon/volume-high.svg"} alt="logo" height={28} width={28} />
                  <h1 className='font-bold'>Marketing</h1>
                  <p>50+ Courses Avaliable</p>
                </div>
                <div className="bg-primary rounded-md">
                 <img src={"/course-icon/group.svg"} alt="logo" height={28} width={28} />
                 <h1 className='font-bold'>Development</h1>
                  <p>50+ Courses Avaliable</p>
                </div>
                <div className="bg-primary rounded-md">
                  <img src={"/course-icon/microphone.svg"} alt="logo" height={28} width={28} />
                  <h1 className='font-bold'>Communication</h1>
                  <p>50+ Courses Avaliable</p>
                </div>
                <div className="bg-primary rounded-md">
                  <img src={"/course-icon/link.svg"} alt="logo" height={28} width={28} />
                  <h1 className='font-bold'>Digital Marketing</h1>
                  <p>50+ Courses Avaliable</p>
                </div>
                <div className="bg-primary rounded-md">
                  <img src={"/course-icon/arrow-2.svg"} alt="logo" height={28} width={28} />
                  <h1 className='font-bold'>Self Deployment</h1>
                  <p>50+ Courses Avaliable</p>
                </div>
                <div className="bg-primary rounded-md">
                  <img src={"/course-icon/briefcase.svg"} alt="logo" height={28} width={28} />
                  <h1 className='font-bold'>Business</h1>
                  <p>50+ Courses Avaliable</p>
                </div>
                <div className="bg-primary rounded-md">
                  <img src={"/course-icon/book.svg"} alt="logo" height={28} width={28} />
                  <h1 className='font-bold'>Finance</h1>
                  <p>50+ Courses Avaliable</p>
                </div>
                <div className="bg-primary rounded-md">
                  <img src={"/course-icon/book2.svg"} alt="logo" height={28} width={28} />
                  <h1 className='font-bold'>Consulting</h1>
                  <p>50+ Courses Avaliable</p>
                </div>
              </div>
              <div className="flex item-center justify-center m-20">
                <button className="w-60 h-10 border-[1px] rounded-lg border-black hover:text-white hover:bg-black duration-300">View All Courses</button>
              </div>
            </div>
            <div>
          </div>

        {/* achievement section */}
              <div>
                  <div>
                    <h1 className="p-10 text-5xl font-bold">Our Achievement</h1>
                    <p className="m-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <ul className="grid gap-4 grid-cols-2 md:grid-cols-4 item-center justify-center mt-20">
                      <li>
                        <h1 className="text-4xl font-semibold">200+</h1>
                        <p>Courses</p>
                      </li>
                      <li>
                        <h1 className="text-4xl font-semibold">50K</h1>
                        <p>Members</p>
                      </li>
                      <li>
                        <h1 className="text-4xl font-semibold">370K</h1>
                        <p>Student</p>
                      </li>
                      <li>
                        <h1 className="text-4xl font-semibold">100+</h1>
                        <p>Recognization</p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h1 className="p-10 mt-20 text-5xl font-bold">Our Achievement</h1>
                    <p className="m-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <ul className="grid gap-4 grid-cols-2 md:grid-cols-4 item-center justify-center mt-20">
                      <li>
                        <h1 className="text-4xl font-semibold">200+</h1>
                        <p>Courses</p>
                      </li>
                      <li>
                        <h1 className="text-4xl font-semibold">50K</h1>
                        <p>Members</p>
                      </li>
                      <li>
                        <h1 className="text-4xl font-semibold">370K</h1>
                        <p>Student</p>
                      </li>
                      <li>
                        <h1 className="text-4xl font-semibold">100+</h1>
                        <p>Recognization</p>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
        {/* courses */}
          <div>
            <div className='text-center'>
              <h1 className='text-5xl font-bold mt-20 mb-10'>Courses</h1>
              <p>Your ultimate guide to learning</p>
            </div>
            <div>
              <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-y-12 align place-items-center'>
                {/* YAHA SE */}
                <div className='w-96 bg-primary rounded-lg hover:'>
                  
                  <img src={"/images/image1.svg"} alt="rating star" height="20" width="400" />
                <div className='pl-2'>
                    <div>
                      <div className='flex justify-between items-center mt-8 mb-4 mr-4'>
                        <h3 className='font-semibold'>Design</h3>
                        <div className='flex'>
                          <img src={"/icon/star 1.svg"} alt="rating star" height="10" width="20" />
                          <h4 className="font-semibold">5.0</h4>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1 className='text-2xl font-semibold'>UX/UI Design 201</h1>
                      <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className='flex space-x-10 items-center mb-4'>
                        <button className='border-[1px] border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white duration-300'>Enroll Now</button>

                        <h4 className='font-semibold'>$400</h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2nd */}
                <div className='w-96 bg-primary rounded-lg hover:'>
                  
                  <img src={"/images/image1.svg"} alt="rating star" height="20" width="400" />
                <div className='pl-2'>
                    <div>
                      <div className='flex justify-between items-center mt-8 mb-4 mr-4'>
                        <h3 className='font-semibold'>Design</h3>
                        <div className='flex'>
                          <img src={"/icon/star 1.svg"} alt="rating star" height="10" width="20" />
                          <h4 className="font-semibold">5.0</h4>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1 className='text-2xl font-semibold'>UX/UI Design 201</h1>
                      <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className='flex space-x-10 items-center mb-4'>
                        <button className='border-[1px] border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white duration-300'>Enroll Now</button>

                        <h4 className='font-semibold'>$400</h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 3RD */}
                <div className='w-96 bg-primary rounded-lg hover:'>
                  
                  <img src={"/images/image1.svg"} alt="rating star" height="20" width="400" />
                <div className='pl-2'>
                    <div>
                      <div className='flex justify-between items-center mt-8 mb-4 mr-4'>
                        <h3 className='font-semibold'>Design</h3>
                        <div className='flex'>
                          <img src={"/icon/star 1.svg"} alt="rating star" height="10" width="20" />
                          <h4 className="font-semibold">5.0</h4>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1 className='text-2xl font-semibold'>UX/UI Design 201</h1>
                      <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className='flex space-x-10 items-center mb-4'>
                        <button className='border-[1px] border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white duration-300'>Enroll Now</button>

                        <h4 className='font-semibold'>$400</h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 4TH */}
                <div className='w-96 bg-primary rounded-lg hover:'>
                  
                  <img src={"/images/image1.svg"} alt="rating star" height="20" width="400" />
                <div className='pl-2'>
                    <div>
                      <div className='flex justify-between items-center mt-8 mb-4 mr-4'>
                        <h3 className='font-semibold'>Design</h3>
                        <div className='flex'>
                          <img src={"/icon/star 1.svg"} alt="rating star" height="10" width="20" />
                          <h4 className="font-semibold">5.0</h4>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1 className='text-2xl font-semibold'>UX/UI Design 201</h1>
                      <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className='flex space-x-10 items-center mb-4'>
                        <button className='border-[1px] border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white duration-300'>Enroll Now</button>

                        <h4 className='font-semibold'>$400</h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 5TH */}
                <div className='w-96 bg-primary rounded-lg hover:'>
                  
                  <img src={"/images/image1.svg"} alt="rating star" height="20" width="400" />
                <div className='pl-2'>
                    <div>
                      <div className='flex justify-between items-center mt-8 mb-4 mr-4'>
                        <h3 className='font-semibold'>Design</h3>
                        <div className='flex'>
                          <img src={"/icon/star 1.svg"} alt="rating star" height="10" width="20" />
                          <h4 className="font-semibold">5.0</h4>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1 className='text-2xl font-semibold'>UX/UI Design 201</h1>
                      <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className='flex space-x-10 items-center mb-4'>
                        <button className='border-[1px] border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white duration-300'>Enroll Now</button>

                        <h4 className='font-semibold'>$400</h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 6TH */}
                <div className='w-96 bg-primary rounded-lg hover:'>
                  
                  <img src={"/images/image1.svg"} alt="rating star" height="20" width="400" />
                <div className='pl-2'>
                    <div>
                      <div className='flex justify-between items-center mt-8 mb-4 mr-4'>
                        <h3 className='font-semibold'>Design</h3>
                        <div className='flex'>
                          <img src={"/icon/star 1.svg"} alt="rating star" height="10" width="20" />
                          <h4 className="font-semibold">5.0</h4>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1 className='text-2xl font-semibold'>UX/UI Design 201</h1>
                      <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className='flex space-x-10 items-center mb-4'>
                        <button className='border-[1px] border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white duration-300'>Enroll Now</button>

                        <h4 className='font-semibold'>$400</h4>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div> 
              <div className='flex justify-center item-center m-20'>
                  <button className="w-60 h-10 border-[1px] rounded-lg border-black hover:text-white hover:bg-black duration-300">View All Courses</button>
              </div>
            </div>
          </div>
        {/* team part */}
        <div className='bg-primary'>
          <div className='text-center'>
            <h1 className='text-5xl font-bold text-center pt-20'>Our team</h1>
            <p className='m-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>

          <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-11 w-full min-h-screen place-items-center'>

            {/* no-1 */}
            <div className='flex flex-col items-center w-52'>
              <img src={"/images/team5.svg"} alt="" height="10" width="70" className='m-6 drop-shadow-xl' />
              <div className='text-center justify-center item-center'>
                <h4 className='font-semibold'>James Nuduku</h4>
                <p>Marketing coordinator</p>
              </div>
              <div className='flex justify-center item-center space-x-3 m-4'>
                <img src={"/icon/vector2.svg"} alt="icon" height="10" width="20" />
                <img src={"/icon/vector1.svg"} alt="icon" height="10" width="20" />
                <img src={"/icon/vector3.svg"} alt="icon" height="10" width="23" />
              </div>
            </div>
            {/* no-2 */}
            <div className='flex flex-col items-center w-52'>
              <img src={"/images/team6.svg"} alt="" height="10" width="70" className='m-6 drop-shadow-xl' />
              <div className='text-center justify-center item-center'>
                <h4 className='font-semibold'>Joseph Munyambu</h4>
                <p>Nursing Assistant</p>
              </div>
              <div className='flex justify-center item-center space-x-3 m-4'>
                <img src={"/icon/vector2.svg"} alt="icon" height="10" width="20" />
                <img src={"/icon/vector1.svg"} alt="icon" height="10" width="20" />
                <img src={"/icon/vector3.svg"} alt="icon" height="10" width="23" />
              </div>
            </div>
            {/* no-3 */}
            <div className='flex flex-col items-center w-52'>
              <img src={"/images/team1.svg"} alt="" height="10" width="70" className='m-6 drop-shadow-xl' />
              <div className='text-center justify-center item-center'>
                <h4 className='font-semibold'>Joseph Ngumbau</h4>
                <p>Medical Assistant</p>
              </div>
              <div className='flex justify-center item-center space-x-3 m-4'>
                <img src={"/icon/vector2.svg"} alt="icon" height="10" width="20" />
                <img src={"/icon/vector1.svg"} alt="icon" height="10" width="20" />
                <img src={"/icon/vector3.svg"} alt="icon" height="10" width="23" />
              </div>
            </div>
            {/* no-4 */}
            <div className='flex flex-col items-center w-52'>
              <img src={"/images/team2.svg"} alt="" height="10" width="70" className='m-6 drop-shadow-xl' />
              <div className='text-center justify-center item-center'>
                <h4 className='font-semibold'>Erick Kipkemboi</h4>
                <p>Web Designer</p>
              </div>
              <div className='flex justify-center item-center space-x-3 m-4'>
                <img src={"/icon/vector2.svg"} alt="icon" height="10" width="20" />
                <img src={"/icon/vector1.svg"} alt="icon" height="10" width="20" />
                <img src={"/icon/vector3.svg"} alt="icon" height="10" width="23" />
              </div>
            </div>
            {/* no-5 */}
            <div className='flex flex-col items-center w-52'>
              <img src={"/images/team3.svg"} alt="" height="10" width="70" className='m-6 drop-shadow-xl' />
              <div className='text-center justify-center item-center'>
                <h4 className='font-semibold'>Stephen Kerubo</h4>
                <p>President of Sales</p>
              </div>
              <div className='flex justify-center item-center space-x-3 m-4'>
                <img src={"/icon/vector2.svg"} alt="icon" height="10" width="20" />
                <img src={"/icon/vector1.svg"} alt="icon" height="10" width="20" />
                <img src={"/icon/vector3.svg"} alt="icon" height="10" width="23" />
              </div>
            </div>
            {/* no-6 */}
            <div className='flex flex-col items-center w-52'>
              <img src={"/images/team4.svg"} alt="" height="10" width="70" className='m-6 drop-shadow-xl' />
              <div className='text-center justify-center item-center'>
                <h4 className='font-semibold'>John Leboo</h4>
                <p>Dog Trainer</p>
              </div>
              <div className='flex justify-center item-center space-x-3 m-4'>
                <img src={"/icon/vector2.svg"} alt="icon" height="10" width="20" />
                <img src={"/icon/vector1.svg"} alt="icon" height="10" width="20" />
                <img src={"/icon/vector3.svg"} alt="icon" height="10" width="23" />
              </div>
            </div>

          </div>

        </div>
        {/* testimonial part*/}
        <div className='p-10 pt-32 bg-primary'>
          <div>
            <h1 className='text-5xl font-bold'>Customer testimonial</h1>
            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10 mt-16'>
            
            <div className='border-black border-[1px] p-8 hover:bg-slate-300 duration-300'>
              <img src={"/icon/Stars.svg"} alt="rating stars" height="40" width="125" className='mb-5'/>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
              
              <div className='flex  space-x-4 mt-6'>
                <img src={"/avatar/avatar1.svg"} alt="" height="" width="" />
                <div>
                  <h4 className='font-semibold mt-1'>James Nduku</h4>
                  <p>Software Developer</p>
                </div>
              </div>
            </div>

            <div className='border-black border-[1px] p-8 hover:bg-slate-300 duration-300'>
              <img src={"/icon/Stars.svg"} alt="rating stars" height="40" width="125" className='mb-5'/>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
              
              <div className='flex  space-x-4 mt-6'>
                <img src={"/avatar/avatar2.svg"} alt="" height="" width="" />
                <div>
                  <h4 className='font-semibold mt-1'>Erick Kipkemboi</h4>
                  <p>Scrum Master</p>
                </div>
              </div>
            </div>

            <div className='border-black border-[1px] p-8 hover:bg-slate-300 duration-300'>
              <img src={"/icon/Stars.svg"} alt="rating stars" height="40" width="125" className='mb-5'/>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
              
              <div className='flex  space-x-4 mt-6'>
                <img src={"/avatar/avatar3.svg"} alt="" height="" width="" />
                <div>
                  <h4 className='font-semibold mt-1'>Stephen Kerubo</h4>
                  <p>UI/UX Designer</p>
                </div>
              </div>
            </div>

          
          </div>
        </div>

    </div>
  )
}