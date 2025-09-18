import { motion } from "framer-motion"
import Hisorty from "../assets/BackgroundFolder/Our-history.webp";

export default function Our_History() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full bg-gradient-to-br from-white to-gray-50 py-16 px-4 md:px-8 lg:px-16"
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Text Content */}
                    <div className="lg:w-1/2 w-full">
                        <div className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-lg">
                            <div className="mb-2">
                                <span className="text-[#635fc7] font-semibold tracking-wider text-sm md:text-base uppercase">
                                    Our Story
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Our <br />
                                <span className="text-[#635fc7]">History</span>
                            </h1>

                            <div className="space-y-4">
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose">
                                    In the realm of digital productivity, the inception of Digital Bucket emerged amidst the bustling tech landscape in the early 2023s. Conceived by a trio of zealous entrepreneurs - Shofikul islam parvez were relentless in their pursuit of simplifying task management, the idea for Digital Bucket was sparked during a brainstorming session in a cozy coffee shop tucked away in Mirpur Dhaka.
                                </p>

                                <p className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose">
                                    Their journey began with an unwavering passion for optimizing time and boosting productivity. Drawing inspiration from the concept of a "bucket list" - a catalog of experiences one aspires to achieve in life - the founders envisioned a platform that would help individuals organize their tasks and aspirations, thereby turning ambitions into accomplishments.
                                </p>
                            </div>

                            <div className="mt-8 flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#635fc7] rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Founded in</p>
                                    <p className="font-bold text-[#635fc7]">2023</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="lg:w-1/2 w-full">
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gradient-to-br from-[#635fc7] to-[#817cf0] p-4 md:p-6 rounded-2xl shadow-xl">
                                <div className="relative overflow-hidden rounded-xl shadow-lg">
                                    <img
                                        src={Hisorty}
                                        alt="DigitalBucket founding team at a coffee shop"
                                        className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <div className="mt-4 flex items-center justify-center space-x-2">
                                    {[1, 2, 3, 4].map((dot) => (
                                        <div key={dot} className="w-2 h-2 bg-white/60 rounded-full"></div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#ffd166] rounded-full opacity-20 z-0"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#2dcea5] rounded-full opacity-20 z-0"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
