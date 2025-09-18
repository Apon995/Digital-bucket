import { motion } from "framer-motion" ; 
import Customize from "../assets/BackgroundFolder/Esay-Customize.png";

export default function Customized_section() {
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
                        <div className="relative z-10">
                            {/* Main image with modern frame */}
                            <div className="bg-gradient-to-br from-[#635fc7] to-[#817cf0] p-5 md:p-7 rounded-2xl shadow-2xl">
                                <div className="overflow-hidden rounded-xl shadow-lg">
                                    <img
                                        src={Customize}
                                        alt="Easy to customize DigitalBucket interface"
                                        className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#ffd166] rounded-full opacity-20 z-0 hidden md:block"></div>
                            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#2dcea5] rounded-full opacity-20 z-0 hidden md:block"></div>
                        </div>

                        {/* Floating feature indicators */}
                        <div className="absolute -top-4 right-4 md:right-10 bg-white p-3 rounded-lg shadow-lg z-20 hidden md:block">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-gray-700">Live Editing</span>
                            </div>
                        </div>

                        <div className="absolute bottom-10 -left-4 bg-white p-3 rounded-lg shadow-lg z-20 hidden md:block">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-gray-700">Drag & Drop</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 w-full">
                        <div className="space-y-6 md:space-y-8">
                            <div>
                                <span className="text-[#635fc7] font-semibold tracking-wider text-sm md:text-base uppercase">
                                    Features
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4 leading-tight">
                                    Easy To <span className="text-[#635fc7]">Customize</span>
                                </h2>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    Digital Bucket is designed for effortless customization. Change and organize your tasks with intuitive tools that make productivity simple and enjoyable. Your data remains secure with our long-term storage system until you decide to delete it.
                                </p>
                            </div>

                            <div className="space-y-5 md:space-y-6">
                                {/* Feature 1 */}
                                <motion.div
                                    className="bg-white p-4 md:p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#635fc7] p-2 rounded-full flex-shrink-0 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                                                Drag & Drop Feature
                                            </h3>
                                            <p className="text-gray-600 text-sm md:text-base">
                                                Easily move tasks between columns with intuitive drag and drop functionality. Organize your workflow by simply dragging tasks to "Complete", "In Progress", or any custom column you create.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Feature 2 */}
                                <motion.div
                                    className="bg-white p-4 md:p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2, delay: 0.1 }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#635fc7] p-2 rounded-full flex-shrink-0 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                                                Live Editing
                                            </h3>
                                            <p className="text-gray-600 text-sm md:text-base">
                                                Make changes in real-time with our live editing capabilities. See your updates instantly without refreshing the page, making task management faster and more efficient.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Feature 3 */}
                                <motion.div
                                    className="bg-white p-4 md:p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2, delay: 0.2 }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#635fc7] p-2 rounded-full flex-shrink-0 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                                                24/7 Support
                                            </h3>
                                            <p className="text-gray-600 text-sm md:text-base">
                                                Get help whenever you need it with our round-the-clock support team. Contact us via phone or email for assistance with any questions or issues. Your data is securely stored and protected.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
