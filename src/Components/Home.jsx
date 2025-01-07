import React from "react";
import Hisorty from "../assets/BackgroundFolder/Our-history.webp";
import Customize from "../assets/BackgroundFolder/Esay-Customize.png";
import Review from "../assets/BackgroundFolder/Review.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import aboutSlide1 from "../assets/BackgroundFolder/about-slide.png";
import { motion } from "framer-motion"


function Home() {
  return (
    <>
      <div>
        <br />
        {/* ----Our-member-- */}

        <div className="flex gap-4 flex-wrap items-center py-14 justify-center px-[2%]">
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div
              className="bg-[#dffff6] p-8 rounded-md text-center text-xl font-medium">
              <h2 className="text-[#2dcea5] text-[50px] font-bold mb-4">4.9 K</h2>
              <p className="text-[#292929] tracking-wider">Satisfaction</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            <div className="bg-[#fff3eb] p-8 rounded-md text-center text-xl font-medium">
              <h2 className="text-[#f99c5e] text-[50px] font-bold mb-4">10k</h2>
              <p className="text-[#292929] tracking-wider">Visitor</p>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 4 }}
          >

            <div className=" bg-[#dff5ff] p-8 rounded-md text-center text-xl font-medium">
              <h2 className="text-[#21bcff] text-[50px] font-bold mb-4">5k+</h2>
              <p className="text-[#292929] tracking-wider">Active user</p>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 5 }}
          >


            <div className="bg-[#e9f3ff] p-8 rounded-md text-center text-xl font-medium">
              <h2 className="text-[#0472fa] text-[50px] font-bold mb-4">0.1</h2>
              <p className="text-[#292929] tracking-wider">Version</p>
            </div>
          </motion.div>
        </div>




        {/* --our--history-section- */}

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >

          <div
            className={`flex w-full items-center md:flex-row flex-col px-[2%] `}
          >
            <div className="md:w-[50%] lg:p-9 md:p-2  bg-[#FFFF]">
              <h1 className="text-[#333333] lg:text-6xl text-4xl font-bold">
                Our <br />
                <span>History</span>
              </h1>

              <br />
              <p className="lg:text-[18px] tracking-widest text-base font-normal leading-normal md:leading-[35px] text-[#000000]">
                In the realm of digital productivity, the inception of Digital
                Bucket emerged amidst the bustling tech landscape in the early
                2023s. Conceived by a trio of zealous entrepreneurs - Shofikul
                islam parvez were relentless in they pursuit of simplifying task
                management, the idea for Digital Bucket was sparked during a
                brainstorming session in a cozy coffee shop tucked away in Mirpur
                Dhaka .
              </p>
              <p className="lg:text-[18px] mt-2 tracking-widest text-base font-normal leading-normal md:leading-[35px] text-[#000000] md:hidden lg:block block">
                Their journey began with an unwavering passion for optimizing time
                and boosting productivity. Drawing inspiration from the concept of
                a "bucket list" - a catalog of experiences one aspires to achieve
                in life - the founders envisioned a platform that would help
                individuals organize their tasks and aspirations, thereby turning
                ambitions into accomplishments.
              </p>
            </div>

            <div className="md:w-[50%] bg-[#F0F0F0] lg:p-10 p-5 ">
              <div className="lg:border-[10px] border-5 border-[#FFFF] lg:w-[90%]">
                <img src={Hisorty} alt="Our history image" />
              </div>
            </div>
          </div>

        </motion.div>

        {/* ---Esay-to-customize-- */}

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <div className="flex md:flex-row flex-col  gap-2 py-24">
            <div className="md:w-[50%] w-full relative">
              <div className="bg-[#635fc7] md:h-[92vh] h-[50vh] md:w-[70%] relative rounded-sm"></div>
              <img
                src={Customize}
                alt="Esay to customize"
                className="absolute w-[85%] top-0 left-0"
              />
            </div>

            <div className="md:w-[50%] w-full px-[2%]">
              <div className="space-y-4">
                <div className="section-title">
                  <h2 className="text-[#292929] font-bold lg:text-6xl text-4xl tracking-normal mb-5">
                    Easy To Customization
                  </h2>
                  <p className="text-[#707070] lg:text-xl text-base mr-5 tracking-widest">
                    This Digital Bucket is Esay to customize & Change your saves !
                    Will you know that our service is secure and long time store
                    system untill you delete your task .
                  </p>
                </div>
                <ul className="flex flex-col gap-3 pr-10">
                  <li>
                    <h3 className="text-[#292929] text-xl font-medium mb-3">
                      {" "}
                      <i className="fa-solid fa-check text-xl font-bold text-[#635fc7]"></i>{" "}
                      Drag &amp; Drop Feature
                    </h3>
                    <p className="text-[#5d5d5d] lg:text-base text-sm tracking-wide">
                      Project familler to Drag and drop the data , suppose you
                      need move data task to complete and on work then you drag
                      start the data and drop your needs columns .
                    </p>
                  </li>
                  <li>
                    <h3 className="text-[#292929] text-xl font-medium mb-3">
                      {" "}
                      <i className="fa-solid fa-check text-xl font-bold text-[#635fc7]"></i>{" "}
                      live editing
                    </h3>
                    <p className="text-[#5d5d5d] lg:text-base text-sm tracking-wide">
                      Live editing Method , every thing is here for your task !
                      Let's check your Dashboard.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-[#292929] text-xl font-medium mb-3">
                      {" "}
                      <i className="fa-solid fa-check lg:text-base text-sm font-bold text-[#635fc7]"></i>{" "}
                      24/7 support
                    </h3>
                    <p className="text-[#5d5d5d] tracking-wide">
                      24/7 service , you need any help and information call us and
                      send message on email. your Data is secure and safe in sha
                      allah .
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </motion.div>

        {/* ---Testimonials-section- */}
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

        {/* ---Add-Review-- */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <div className="flex md:flex-row flex-col md:gap-2 gap-10 py-24">
            <div className="md:w-[50%] relative">
              <div className="bg-[#635fc7] md:h-[92vh] h-[50vh] md:w-[90%] relative rounded-sm"></div>
              <img
                src={Review}
                alt="Esay to customize"
                className="absolute w-[85%] top-[50px] md:left-16 left-[27px] md:top-0 "
              />
            </div>

            <div className="md:w-[50%] px-[2%]">
              <div className="space-y-4">
                <div className="section-title">
                  <h2 className="text-[#292929] font-bold lg:text-6xl text-4xl tracking-normal mb-5">
                    Ratings & Reviews
                  </h2>
                  <p className="text-[#707070] lg:text-xl text-base mr-5 tracking-tight">
                    Digital Bucket has revolutionized how I manage tasks! Its
                    intuitive interface makes organizing my to-dos a breeze. The
                    diverse range of features, from customizable categories to
                    deadline reminders, keeps me on track and boosts my
                    productivity. The collaborative tools have transformed team
                    projects, ensuring seamless communication and progress
                    tracking. It's a game-changer for anyone seeking a
                    streamlined, efficient task management system.
                  </p>
                  <br />
                  <p className="text-[#707070] lg:text-xl text-base mr-5 tracking-tight">
                    {" "}
                    In summary, Digital Bucket is just a task management system;
                    it's a catalyst for enhanced efficiency and teamwork. I highly
                    recommend it to anyone seeking a versatile, user-friendly
                    solution for their task management needs.
                  </p>
                  <br />
                  <br />
                  <button className="text-[#635fc7] text-xl font-medium hover:border-b-2 ">
                    Learn More ...
                  </button>
                </div>
              </div>
            </div>
          </div>

        </motion.div>

        {/* -----Who-used-our-website-- */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <div className="md:px-[4%] px-[2%]">
            <h2 className="text-[#292929] font-bold lg:text-6xl text-4xl tracking-normal text-center">
              our service's For{" "}
            </h2>

            <br />
            <br />

            <div className="grid  lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5 ">
              {/* ----one-- */}
              <div className="flex md:flex-row flex-col border-[1px]  cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-10 ">
                <div className="p-6 flex gap-2 items-center">
                  <div className=" bg-[#dff5ff] p-4 rounded-md text-center text-xl font-medium">
                    <i className="fa-solid fa-building-columns text-[#21bcff] text-[35px] font-bold"></i>
                  </div>
                  <div>
                    <h1 className="text-[#292929] text-2xl font-semibold">
                      Banker's
                    </h1>
                    <p className="text-[#707070] text-sm tracking-widest font-normal ">
                      This website specially for Banker's , they have many todo
                      every day this web simple her life and every data and todos
                      are secure and safe !
                    </p>
                  </div>
                </div>
              </div>

              {/* ----two-- */}
              <div className="flex md:flex-row flex-col border-[1px]  cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-10 ">
                <div className="p-6 flex gap-2 items-center">
                  <div className=" bg-[#fff3eb] p-4 rounded-md text-center text-xl font-medium">
                    <i className="fa-solid  fa-briefcase text-[#f99c5e] text-[35px] font-bold"></i>
                  </div>
                  <div>
                    <h1 className="text-[#292929] text-2xl font-semibold">
                      Business man
                    </h1>
                    <p className="text-[#707070] text-sm tracking-widest font-normal ">
                      Business man work took here and they work hole day without
                      any mistake tension , business man are used this website and
                      save time.
                    </p>
                  </div>
                </div>
              </div>

              {/* ----three-- */}
              <div className="flex md:flex-row flex-col border-[1px]  cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-10 ">
                <div className="p-6 flex gap-2 items-center">
                  <div className=" bg-[#dffff6] p-4 rounded-md text-center text-xl font-medium">
                    <i className="fa-solid  fa-user-doctor text-[#2dcea5] text-[35px] font-bold"></i>
                  </div>
                  <div>
                    <h1 className="text-[#292929] text-2xl font-semibold">
                      Doctor
                    </h1>
                    <p className="text-[#707070] text-sm tracking-widest font-normal ">
                      Doctor have many work the day , so he can used for make shedule and save or remind her daily work ,
                      this website doctor can used for her daily work !
                    </p>
                  </div>
                </div>
              </div>

              {/* ----Four-- */}
              <div className="flex md:flex-row flex-col border-[1px]  cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-10 ">
                <div className="p-6 flex gap-2 items-center">
                  <div className=" bg-[#e9f3ff] p-4 rounded-md text-center text-xl font-medium">
                    <i className="fa-solid  fa-computer text-[#0472fa] text-[35px] font-bold"></i>
                  </div>
                  <div>
                    <h1 className="text-[#292929] text-2xl font-semibold">
                      Programmer & developer
                    </h1>
                    <p className="text-[#707070] text-sm tracking-widest font-normal ">
                      Programmer & Developer can used this website for her important task work in daily routine or monthly , yearly work , this website stroage is very secure and safe !
                    </p>
                  </div>
                </div>
              </div>




            </div>




          </div>

        </motion.div>

        {/* ----contact-section-- */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <div
            id="Contact"
            className="flex md:gap-2 gap-9 md:flex-row-reverse items-center flex-col w-full md:mt-20 my-10 px-[2%]"
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
              <iframe
                width="100%"
                height="500"
                frameBorder="0"
                src="https://maps.google.com/maps?width=300&amp;height=500&amp;hl=en&amp;q=Mirpur%20Dhaka%201216&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </motion.div>
      </div >
    </>
  );
}

export default Home;
