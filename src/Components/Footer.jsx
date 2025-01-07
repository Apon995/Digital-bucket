import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/LogoFolder/Logo.png'


function Footer() {

  const location = useLocation()
  return (

    <>
      {
        location.pathname == '/Register' || location.pathname == '/Login' ? '' :
          <div className='w-full  xl:px-[2%] px-[1%]  text-[#FFF] py-9 footer md:text-start text-center bg-[#635fc7] top-0 ' >

            <div className=' flex md:flex-row flex-col  items-center justify-between  py-9'>
              {/* --footer-1st-col-- */}
              <div>

                <div className='flex items-center gap-1'>
                  <img src={Logo} alt="Logo" className='w-[30px]' />
                  <h1 className='font-bold text-xl text-white tracking-widest uppercase'>DigitalBucket</h1>

                </div>


                <div>
                  <p className='md:text-base text-sm font-normal md:leading-[20px] leading-normal w-[260px] py-3 tracking-widest '>
                    DigitalBucket is a web site who take your data & daily work save and secure !
                  </p>
                </div>

                <div className='flex items-center gap-4 pt-4 md:justify-start justify-center' id='socialIcons'>
                  <div>
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                  <div>
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div>
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                </div>
              </div>





              {/* --footer-2nd-col-- */}
              <div className='lg:block hidden'>
                <h1 className='pb-4 font-semibold text-2xl'>Our Services For</h1>
                <div>
                  <ul className='text-base font-medium space-y-2' id='quickLinks'>
                    <li><Link to='/' >Programmer</Link></li>
                    <li><Link to='/' >Developer</Link></li>
                    <li><Link to='/' >Banker</Link></li>
                    <li><Link to='/' >Doctor & etc</Link></li>

                  </ul>
                </div>
              </div>

              {/* --foter-3rd-col-- */}
              <div className='lg:block hidden'>
                <h1 className='pb-4 font-semibold text-2xl'>Community</h1>

                <ul className='text-base font-medium space-y-2' id='serviceLinks'>
                  <li><Link to='/'>Digital Marketing</Link></li>
                  <li><Link to='/'>Business Ideas</Link> </li>
                  <li><Link to='/'>Website Checkup</Link></li>
                  <li><Link to='/'>Page Speed Test</Link></li>


                </ul>
              </div>

              {/* --footer-4th-col-- */}
              <div className='md:block hidden'>
                <h1 className='pb-4 font-semibold text-2xl'>Contact info </h1>

                <div>
                  <ul className='text-base font-medium space-y-2'>
                    <li>Mirpur Dhaka - 1216</li>
                    <li>Near By Mirpur shopping center</li>
                    <li>Hotline : +9990003</li>
                    <li>Email : DigitalBucket2023@gmail.com</li>

                  </ul>
                </div>
              </div>
            </div>

            <hr />
            <div className='mt-3 flex items-center justify-between'>
              <p className='text-base font-normal'>Copyright &copy; 2023 by <Link className='hover:border-b-2 border-black tracking-widest' to="https://midgeneration.com/">DigitalBucket.com</Link> - All Rights Reserved.</p>

              <div>
                <button onClick={() => window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                })} className='bg-[#Ffff] text-[#000000] md:py-4 py-1 md:px-10 px-2 text-xl hover:bg-black hover:text-white hover:rounded-md transition-all duration-500'><i className="fa-solid fa-arrow-up"></i></button>
              </div>

            </div>




          </div>


      }
    </>






  )
}

export default Footer