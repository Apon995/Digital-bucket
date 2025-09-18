import aboutSlide1 from "../assets/BackgroundFolder/about-slide.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion"

export default function Testmonials() {

    const testimonials = [
        {
            name: "Sarah M",
            role: "Freelance Graphic Designer",
            text: "As a freelancer juggling multiple projects, DigitalBucket has become my go-to task management system. The interface is sleek and easy to navigate, allowing me to create detailed task lists for each project effortlessly.",
            image: aboutSlide1,
            date: "2 days ago",
            tags: ["Design", "Freelance", "Productivity"]
        },
        {
            name: "Chris T",
            role: "Team Lead at TechCo",
            text: "DigitalBucket has transformed how our team operates. With numerous projects on our plate, this platform's collaborative tools have revolutionized our productivity. Setting up tasks and tracking progress has never been simpler.",
            image: aboutSlide1,
            date: "1 week ago",
            tags: ["Team", "Collaboration", "Management"]
        },
        {
            name: "Alex R",
            role: "Software Engineer",
            text: "I've tried countless task management tools, but DigitalBucket stands out with its intuitive interface and powerful features. It's helped me stay organized and meet all my project deadlines without stress.",
            image: aboutSlide1,
            date: "3 days ago",
            tags: ["Development", "Coding", "Deadlines"]
        },
        {
            name: "Jessica K",
            role: "Marketing Director",
            text: "Our marketing team has seen a 40% increase in productivity since implementing DigitalBucket. The ability to visualize our campaigns and track progress in real-time has been a game-changer for our department.",
            image: aboutSlide1,
            date: "5 days ago",
            tags: ["Marketing", "Campaigns", "Analytics"]
        },
        {
            name: "Michael B",
            role: "Project Manager",
            text: "The drag-and-drop functionality and customizable workflows make DigitalBucket perfect for complex projects. I can easily reassign tasks and adjust timelines as priorities change throughout the project lifecycle.",
            image: aboutSlide1,
            date: "1 week ago",
            tags: ["Projects", "Workflow", "Management"]
        },
        {
            name: "Emily L",
            role: "Content Creator",
            text: "As a content creator, I'm managing dozens of pieces of content simultaneously. DigitalBucket helps me keep track of everything from ideation to publication, ensuring nothing falls through the cracks.",
            image: aboutSlide1,
            date: "4 days ago",
            tags: ["Content", "Creation", "Organization"]
        },
        {
            name: "David W",
            role: "Startup Founder",
            text: "For any startup founder overwhelmed with countless tasks, DigitalBucket is a lifesaver. It's helped me prioritize what's important and delegate effectively to my growing team.",
            image: aboutSlide1,
            date: "2 weeks ago",
            tags: ["Startup", "Entrepreneur", "Delegation"]
        },
        {
            name: "Sophia C",
            role: "UX Researcher",
            text: "DigitalBucket's flexible structure adapts perfectly to my research workflow. I can organize user feedback, schedule tests, and track insights all in one place, making my research process much more efficient.",
            image: aboutSlide1,
            date: "6 days ago",
            tags: ["Research", "UX", "Insights"]
        }
    ];


    return (
 
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full bg-gradient-to-br from-gray-50 to-white py-16 px-4 md:px-8 lg:px-16"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#635fc7] font-semibold tracking-wider text-sm md:text-base uppercase">
                        Voices of Success
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
                        What Our Users Say
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover why thousands of professionals trust DigitalBucket to transform their productivity
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                            <div className="text-sm text-gray-500 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {testimonial.date}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials Swiper */}
                <div className="relative">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        navigation={{
                            nextEl: '.testimonial-swiper-button-next',
                            prevEl: '.testimonial-swiper-button-prev',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.testimonial-pagination',
                            renderBullet: function (index, className) {
                                return '<span class="' + className + '">'  + '</span>';
                            },
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="testimonialSwiper"
                        breakpoints={{
                            320: {
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
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                                    <div className="md:w-2/5 p-6 md:p-8 flex flex-col items-center justify-center bg-gradient-to-br from-[#635fc7] to-[#817cf0]">
                                        <div className="relative mb-6">
                                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md">
                                                <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
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
                                        <div className="flex items-center mt-auto">
                                            <div className="flex space-x-1">
                                                {testimonial.tags.map((tag, i) => (
                                                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="ml-auto text-sm text-gray-500">{testimonial.date}</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="testimonial-swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 -ml-4 bg-white rounded-full p-3 shadow-md cursor-pointer hidden md:flex items-center justify-center hover:bg-[#635fc7] hover:text-white transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#635fc7] hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div className="testimonial-swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 -mr-4 bg-white rounded-full p-3 shadow-md cursor-pointer hidden md:flex items-center justify-center hover:bg-[#635fc7] hover:text-white transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#635fc7] hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>

                    {/* Pagination */}
                    <div className="testimonial-pagination flex justify-center mt-8 space-x-2"></div>
                </div>
            </div>
        </motion.div>
    )
}
