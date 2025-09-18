import Review from "../assets/BackgroundFolder/Review.png";
import { motion } from "framer-motion"

export default function Rating_n_Reviews() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-50px" }}
      className="w-full bg-gradient-to-br from-gray-50 to-white py-16 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Image/Visual Section */}
          <div className="lg:w-1/2 w-full relative">
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Main image container with modern design */}
              <div className="bg-gradient-to-br from-[#635fc7] to-[#817cf0] p-6 md:p-8 rounded-2xl shadow-2xl">
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={Review}
                    alt="DigitalBucket Ratings & Reviews"
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Rating badge */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#635fc7]">4.9/5</div>
                  <div className="flex justify-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 mt-1">2,500+ reviews</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#ffd166] rounded-full opacity-20 z-0 hidden md:block"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#2dcea5] rounded-full opacity-20 z-0 hidden md:block"></div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div>
                <span className="text-[#635fc7] font-semibold tracking-wider text-sm md:text-base uppercase">
                  User Feedback
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
                  Ratings & <span className="text-[#635fc7]">Reviews</span>
                </h2>

                <div className="space-y-5">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Digital Bucket has revolutionized how I manage tasks! Its intuitive interface makes organizing my to-dos a breeze. The diverse range of features, from customizable categories to deadline reminders, keeps me on track and boosts my productivity.
                  </p>

                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    The collaborative tools have transformed team projects, ensuring seamless communication and progress tracking. It's a game-changer for anyone seeking a streamlined, efficient task management system.
                  </p>

                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    In summary, Digital Bucket is not just a task management system; it's a catalyst for enhanced efficiency and teamwork. I highly recommend it to anyone seeking a versatile, user-friendly solution for their task management needs.
                  </p>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl md:text-3xl font-bold text-[#635fc7]">95%</div>
                  <div className="text-sm text-gray-600 mt-1">Satisfaction Rate</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl md:text-3xl font-bold text-[#635fc7]">4.9/5</div>
                  <div className="text-sm text-gray-600 mt-1">Average Rating</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl md:text-3xl font-bold text-[#635fc7]">2.5K+</div>
                  <div className="text-sm text-gray-600 mt-1">Reviews</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl md:text-3xl font-bold text-[#635fc7]">98%</div>
                  <div className="text-sm text-gray-600 mt-1">Would Recommend</div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.div
                className="mt-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <button className="group relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-[#635fc7] border-2 border-[#635fc7] rounded-full overflow-hidden transition-all duration-300 hover:text-white">
                  <span className="absolute inset-0 bg-[#635fc7] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                  <span className="relative z-10">Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 relative z-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
