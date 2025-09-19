import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import member1 from "../assets/OurTeamMember/member1.png"
import member2 from "../assets/OurTeamMember/member2.png"
import member3 from "../assets/OurTeamMember/member3.png"
import member4 from "../assets/OurTeamMember/member4.png"
import aboutSlide1 from "../assets/BackgroundFolder/about-slide.png";
import Hisorty from "../assets/BackgroundFolder/Our-history.webp";
import { motion } from "framer-motion"
import { Navigate, useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const Team = [
    {
      img: "https://i.pinimg.com/736x/85/22/34/8522346c05525356198706df30c7ebe0.jpg",
      name: "Shofikul islam Parvez",
      role: "Front end developer",
      bio: "Crafts intuitive interfaces that make task management effortless",
      skills: ["React js", "Javscript", "Tailwind css"]
    },
    {
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      name: "Ashiqul islam Ayon",
      role: "Full Stack Developer",
      bio: "Builds robust systems that keep your data secure and accessible",
      skills: ["Python", "Database Architecture"]
    },
    {
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      name: "David warner",
      role: "Product Manager",
      bio: "Translates user needs into features that enhance productivity",
      skills: ["Agile", "Product Strategy", "User Stories"]
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/USAFA_Hosts_Elon_Musk_%28Image_1_of_17%29_%28cropped%29.jpg",
      name: "Elonk musk",
      role: "Chief Engineer",
      bio: "Ensures DigitalBucket runs smoothly and scales with your needs",
      skills: ["physics ", " engineering"]
    }
  ]
  return (
    <section className="min-h-screen px-4 md:px-8 lg:px-16 py-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          About <span className="text-[#635fc7]">DigitalBucket</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the story behind our mission to revolutionize task management and productivity
        </p>
      </motion.div>

      {/* About Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16 mb-28"
      >
        <div className="lg:w-1/2">
          <div className="bg-gradient-to-br from-[#635fc7] to-[#817cf0] p-1 rounded-2xl shadow-xl">
            <img
              src={Hisorty}
              alt="DigitalBucket history"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="mb-2">
            <span className="text-[#635fc7] font-semibold tracking-wider text-sm uppercase">
              Our Story
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Empowering Productivity Through Innovation
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              At Digital Bucket, we believe in the transformative power of organization and purposeful task management.
              Born from a passion for efficiency and fueled by the relentless pursuit of productivity, we've crafted a
              platform designed to turn aspirations into accomplishments.
            </p>

            <p>
              Our mission is simple yet profound: to empower individuals in maximizing their potential by providing a
              seamless and intuitive task management experience. We're dedicated to helping you prioritize tasks, set
              achievable goals, and ultimately transform your ambitions into tangible successes.
            </p>

            <p>
              At Digital Bucket, we're committed to continuous innovation. We listen to our users, evolving and improving
              our platform to meet the evolving demands of the modern world. Your productivity is our priority, and we
              strive to be the catalyst for your success, every step of the way.
            </p>
          </div>

          <button className="mt-8 bg-[#635fc7] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#514bbd] transition-colors duration-300">
            Learn More About Our Journey
          </button>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
      >
        {[
          { number: "10K+", label: "Active Users" },
          { number: "95%", label: "Satisfaction Rate" },
          { number: "24/7", label: "Support Available" },
          { number: "2023", label: "Established" }
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#635fc7] mb-2">{stat.number}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Team Section */}
      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#635fc7] font-semibold tracking-wider text-sm uppercase">
              Innovative Minds
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Meet Our Visionary Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to revolutionizing your productivity experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {

              Team?.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="text-white">
                        <p className="text-sm mb-2">{member.bio}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {member.skills.map((skill, i) => (
                            <span key={i} className="bg-[#635fc7]/80 text-xs px-2 py-1 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-[#635fc7] font-medium mb-3">{member.role}</p>

                    <div className="flex justify-center space-x-3 mt-4">
                      {["facebook", "twitter", "linkedin"].map((platform) => (
                        <a
                          key={platform}
                          href="#"
                          className="bg-gray-100 rounded-full p-2 hover:bg-[#635fc7] hover:text-white transition-colors duration-300"
                        >
                          <i className={`fa-brands fa-${platform}`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 mb-6">Want to join our innovative team?</p>
            <button className="bg-[#635fc7] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#514bbd] transition-colors duration-300">
              View Open Positions
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <span className="text-[#635fc7] font-semibold tracking-wider text-sm uppercase">
            What Our Users Say
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of users trust DigitalBucket to manage their tasks
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="testimonialSwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
          }}
        >
          {[
            {
              name: "Sarah M",
              role: "Freelance Graphic Designer",
              text: "As a freelancer juggling multiple projects, DigitalBucket has become my go-to task management system. The interface is sleek and easy to navigate, allowing me to create detailed task lists for each project effortlessly.",
              img: aboutSlide1
            },
            {
              name: "Chris T",
              role: "Team Lead at TechCo",
              text: "DigitalBucket has transformed how our team operates. With numerous projects on our plate, this platform's collaborative tools have revolutionized our productivity.",
              img: aboutSlide1
            },
            {
              name: "Chris Yan",
              role: "Small Business Owner",
              text: "DigitalBucket has been a game-changer for my small business. With a myriad of responsibilities, keeping track of tasks was overwhelming.",
              img: aboutSlide1
            },
            {
              name: "Shofikul Islam",
              role: "Student & Part-time Writer",
              text: "Being a student and a writer means juggling assignments and personal projects. DigitalBucket has been a lifesaver.",
              img: aboutSlide1
            }
          ].map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-2/5 p-6 md:p-8 flex flex-col items-center justify-center bg-gradient-to-br from-[#635fc7] to-[#817cf0]">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-blue-100 mt-1">{testimonial.role}</p>
                  <div className="flex justify-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#635fc7] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#635fc7] to-[#817cf0] rounded-2xl p-8 md:p-12 text-center text-white"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Boost Your Productivity?</h2>
        <p className="mb-6 max-w-2xl mx-auto opacity-90">
          Join thousands of users who are already transforming their workflow with DigitalBucket
        </p>
        <button onClick={() => navigate('/Dashboard')} className="bg-white text-[#635fc7] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
          Get Started Free
        </button>
      </motion.div>
    </section>
  )
}

export default About;