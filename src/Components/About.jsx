import React from 'react'
// import contactImg from "../assets/contact-image.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {  Pagination, Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import member1 from "../assets/OurTeamMember/member1.png"
import member2 from "../assets/OurTeamMember/member2.png"
import member3 from "../assets/OurTeamMember/member3.png"
import member4 from "../assets/OurTeamMember/member4.png"

import aboutSlide1 from "../assets/BackgroundFolder/about-slide.png";
import Hisorty from "../assets/BackgroundFolder/Our-history.webp";
import { motion } from "framer-motion"



function About() {
  return (
    <section className="min-h-screen px-[4%]">

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        {/* ---about-us-section */}
        <div className="flex gap-3 lg:flex-row-reverse items-center flex-col w-full md:my-28 my-10 ">
          <div className="lg:w-[50%] ">
            <h1 className="text-[#292929] font-[600] leading-[1.2] md:text-3xl text-4xl ">
              About Us 
            </h1>
            <br />

            <p className="text-[#707070] lg:text-[18px] text-sm tracking-widest">

              At Digital Bucket, we believe in the transformative power of organization and purposeful task management. Born from a passion for efficiency and fueled by the relentless pursuit of productivity, we've crafted a platform designed to turn aspirations into accomplishments.
              <br />
              <br />
              Our mission is simple yet profound: to empower individuals in maximizing their potential by providing a seamless and intuitive task management experience. We're dedicated to helping you prioritize tasks, set achievable goals, and ultimately transform your ambitions into tangible successes.
              <br />
              <br />
              At Digital Bucket, we're committed to continuous innovation. We listen to our users, evolving and improving our platform to meet the evolving demands of the modern world. Your productivity is our priority, and we strive to be the catalyst for your success, every step of the way.


            </p>
            <br />
            <br />
            <button className="text-[#635fc7] text-sm font-medium hover:border-b-2 ">
              Learn More ...
            </button>


          </div>
          <div className="lg:w-[50%] lg:p-9">
            <img src={Hisorty} alt="" />
          </div>
        </div>

      </motion.div>



      <br />
      <br />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        {/* ---our-team-member */}
        <div className="flex items-center justify-center flex-col py-11">
          <div className="flex  justify-center items-center w-full flex-col">
            <br />
            <h1 className="md:text-4xl text-2xl text-center font-bold text-[#343a40] tracking-tighter">
              Developers and Designer's
            </h1>

          </div>
          <br />
          <br />
          {/* team-member-row */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-7">
            {/* -member-one- */}
            <div>
              <div className="member">
                <div className="member-img">
                  <img src={member3} alt="member1" />
                  <br />
                </div>
                <div className="member-content">
                  <h3>
                    Jassica
                  </h3>
                  <p>Web Developer<br />
                  </p>
                  <div className="social-links">

                    <ul>
                      <li><Link to="/" >
                        <i className="fa fa-facebook"></i>
                      </Link></li>

                      <li>
                        <Link to="/" >
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="/">
                          <i className="fa fa-instagram"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="/" >
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* --member-two */}
            <div>
              <div className="member">
                <div className="member-img">
                  <img src={member4} alt="member2" />
                  <br />
                </div>
                <div className="member-content">
                  <h3>
                    Yuvraj ashique
                  </h3>
                  <p>

                    Front End Developer

                  </p>
                  <div className="social-links">

                    <ul>
                      <li><Link to="/" >
                        <i className="fa fa-facebook"></i>
                      </Link></li>

                      <li>
                        <Link to="/" >
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="/">
                          <i className="fa fa-instagram"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="/" >
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* --member-three */}
            <div>
              <div className="member">
                <div className="member-img">
                  <img src={member1} alt="member3" />
                  <br />
                </div>
                <div className="member-content">
                  <h3>
                    Taslima akter
                  </h3>
                  <p>Backend Developer <br />
                  </p>
                  <div className="social-links">

                    <ul>
                      <li><Link to="/" >
                        <i className="fa fa-facebook"></i>
                      </Link></li>

                      <li>
                        <Link to="/" >
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="/">
                          <i className="fa fa-instagram"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="/" >
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


            {/* -member-four */}
            <div>
              <div className="member">
                <div className="member-img">
                  <img src={member2} alt="member4" />
                  <br />
                </div>
                <div className="member-content">
                  <h3>
                    Mudassir Abir
                  </h3>
                  <p>
                    DSA expert </p>
                  <div className="social-links">

                    <ul>
                      <li><Link to="/" >
                        <i className="fa fa-facebook"></i>
                      </Link></li>

                      <li>
                        <Link to="/" >
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="/">
                          <i className="fa fa-instagram"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="/" >
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

      </motion.div>


      <br />
      <br />
      <br />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        {/* ---Testimonials-section- */}
        <div>
          <div className="text-center space-y-2">
            <h2 className="text-[#292929] font-bold text-5xl tracking-normal">
              Testimonial{" "}
            </h2>
          </div>

          <br />
          <br />

          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            navigation={false}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex md:flex-row flex-col items-center gap-2 ">
                <div className="md:w-[40%] w-full">
                  <img
                    src={aboutSlide1}
                    alt=""
                    className="w-[280px] md:w-fit mx-auto"
                  />
                </div>
                <div className="md:w-[55%] w-full ">
                  <div>
                    <h1 className="lg:text-3xl text-base font-[600] text-[#2742fd]">
                      Sarah M,{" "}
                      <span className="text-[#343a40] lg:text-sm text-xs font-normal">
                        -Freelance Graphic Designer
                      </span>
                    </h1>
                    <br />
                    <p className="lg:text-xl text-sm text-[#292929] leading-[1.6] font-medium">
                      As a freelancer juggling multiple projects, DigitalBucket
                      has become my go-to task management system. The interface
                      is sleek and easy to navigate, allowing me to create
                      detailed task lists for each project effortlessly. I love
                      the flexibility to customize categories and deadlines
                      based on project needs. The collaborative features have
                      been a game-changer; sharing progress with clients and
                      getting their feedback in real-time has improved my
                      workflow significantly. Highly recommended for fellow
                      freelancers seeking seamless project management
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex md:flex-row flex-col items-center gap-2">
                <div className="md:w-[40%] w-full">
                  <img src={aboutSlide1} alt="" />
                </div>
                <div className="md:w-[55%] w-full">
                  <div>
                    <h1 className="lg:text-3xl text-base font-[600] text-[#2742fd]">
                      Chris T,{" "}
                      <span className="text-[#343a40] lg:text-sm text-xs font-normal">
                        Team Lead at TechCo
                      </span>
                    </h1>
                    <br />
                    <p className="lg:text-xl text-sm text-[#292929] leading-[1.6] font-medium">
                      DigitalBucket has transformed how our team operates. With
                      numerous projects on our plate, this platform's
                      collaborative tools have revolutionized our productivity.
                      Setting up tasks, assigning them to team members, and
                      tracking progress has never been simpler. The shared task
                      lists and deadline reminders keep everyone aligned and
                      accountable. The ability to integrate with our existing
                      tools has streamlined our workflow further. Kudos to
                      DigitalBucket for simplifying team collaboration and
                      enhancing our efficiency!
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex md:flex-row flex-col items-center gap-2 ">
                <div className="md:w-[40%] w-full">
                  <img src={aboutSlide1} alt="" />
                </div>
                <div className="md:w-[55%] w-full">
                  <div>
                    <h1 className="lg:text-3xl text-base font-[600] text-[#2742fd]">
                      chris Yan ,{" "}
                      <span className="text-[#343a40]  lg:text-sm text-xs  font-normal">
                        Small Business Owner
                      </span>
                    </h1>
                    <br />
                    <p className="lg:text-xl text-sm text-[#292929] leading-[1.6] font-medium">
                      DigitalBucket has been a game-changer for my small
                      business. With a myriad of responsibilities, keeping track
                      of tasks was overwhelming. This platform's intuitive
                      interface helped me organize tasks effortlessly. The
                      ability to prioritize and set deadlines keeps me focused.
                      What stands out most is the seamless integration with
                      other apps we use daily. It's made our workflow incredibly
                      efficient. DigitalBucket has truly simplified task
                      management for my team, allowing us to focus more on
                      growing our business!
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex md:flex-row flex-col items-center gap-2 ">
                <div className="md:w-[40%] w-full">
                  <img src={aboutSlide1} alt="" />
                </div>
                <div className="md:w-[55%] w-full">
                  <div>
                    <h1 className="lg:text-3xl text-base font-[600] text-[#2742fd]">
                      Shofikul islam,{" "}
                      <span className="text-[#343a40] lg:text-sm text-xs font-normal">
                        Student & Part-time Writer
                      </span>
                    </h1>
                    <br />
                    <p className="lg:text-xl text-sm text-[#292929] leading-[1.6] font-medium">
                      Being a student and a writer means juggling assignments
                      and personal projects. DigitalBucket has been a lifesaver.
                      The simplicity of creating task lists and setting
                      reminders ensures I never miss a deadline. I appreciate
                      the clean layout and easy navigation, making it
                      stress-free to manage both my academic and creative tasks.
                      The flexibility to access it across devices has been
                      incredibly convenient. If you're a student or someone
                      balancing multiple responsibilities, I highly recommend
                      DigitalBucket for its user-friendly approach to task
                      management.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>



      <br />
      <br />
      <br />
    </section>
  )
}

export default About