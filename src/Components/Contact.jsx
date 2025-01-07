import React from "react";
import contactimg from '../assets/BackgroundFolder/Contact-image-2.jpg';
import { motion } from "framer-motion"



function Contact() {
  return (
    <>
      {/* ----contact-section-- */}
      <br />
      <div className=' px-[2%] w-full'>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <div className='text-center space-y-2'>
              <h1 className='md:text-4xl text-3xl font-semibold text-[#000]'>Contact us Now !</h1>

              <p className='text-base font-normal text-[#54595F] text-wrap'>Asslamwaikum , welcome to Digital Bucket, <br className="md:block hidden" />This is Task management system ! how can i help you ? </p>
            </div>




            <div className='flex items-center gap-4 pt-4 md:justify-start justify-center mx-auto w-fit hover:text-white' id='socialIcons'>
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



        </motion.div>




        <br />
        <br />
        <br />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >


          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-4'>
            {/* ---location-box-- */}
            <div className='border-[1px] p-7 space-y-1 text-center cursor-pointer hover:shadow-lg hover:bg-white  socialIcons'>
              <div className='border-[2px] p-4 rounded-full w-fit mx-auto text-xl'>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h1 className='text-xl font-semibold text-[#000]'>Our Location</h1>
              <p className='text-base font-normal text-[#54595F]'>Mirpur Dhaka 1216 <br />
                Near by Mirpur shopping center .</p>

            </div>
            {/* ---contact-box--- */}
            <div className='border-[1px] p-7 space-y-1 text-center  cursor-pointer hover:shadow-lg hover:bg-white  socialIcons '>
              <div className='border-[2px] p-4 rounded-full w-fit mx-auto text-xl '>
                <i className="fa-solid fa-phone"></i>
              </div>
              <h1 className='text-xl font-semibold text-[#000]'>Call us</h1>
              <p className='text-base font-normal text-[#54595F]'> 01344433353
                <br />
                01244545335
              </p>

            </div>
            {/* --email-box-- */}
            <div className='border-[1px] p-7 space-y-1 text-center cursor-pointer hover:shadow-lg hover:bg-white  socialIcons'>
              <div className='border-[2px] p-4 rounded-full w-fit mx-auto text-xl'>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h1 className='text-xl font-semibold text-[#000]'>Email address</h1>
              <p className='text-base font-normal text-[#54595F]'> Digitalbucket2023@gmail.com</p>

            </div>

          </div>
        </motion.div>


      </div>







      <br />
      <br />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <div
          id="Contact"
          className="flex gap-2 md:flex-row-reverse items-center flex-col w-full mt-20 px-[2%]"
        >
          <div className="lg:w-[40%] md:w-[50%] w-full  ">
            <form id="contact" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder="Enter your Name" />
              </div>
              <div>
                <input type="text" placeholder="Enter your passion " />
              </div>
              <div>
                <input type="text" placeholder="Enter your Email" />
              </div>
              <div>
                <input type="text" placeholder="Enter your Contact Number " />
              </div>

              <button>Send</button>
            </form>
          </div>
          <div className="lg:w-[60%] md:w-[50%] lg:p-9 w-full">
            <img src={contactimg} alt="" />
          </div>
        </div>

      </motion.div>



      <br />
      <br />

      <motion.div
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 1 }}
      >

        <div className="px-[2%] rounded-md my-10">
          <iframe
            width="100%"
            height="500"
            frameBorder="0"
            src="https://maps.google.com/maps?width=300&amp;height=500&amp;hl=en&amp;q=Mirpur%20Dhaka%201216&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen
          ></iframe>
        </div>

      </motion.div>

    </>
  );
}

export default Contact;
