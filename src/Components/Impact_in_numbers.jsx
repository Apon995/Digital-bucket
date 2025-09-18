
import { motion } from "framer-motion"

export default function Impact_in_numbers() {
    return (
        <div className="w-full py-16 px-4 md:px-8 bg-gradient-to-br from-[#635fc7]/10 to-[#817cf0]/10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#635fc7] mb-4">Our Impact in Numbers</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        DigitalBucket is trusted by thousands of users worldwide to organize their tasks and boost productivity
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex justify-center"
                    >
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-[250px] group border border-[#dffff6] hover:border-[#2dcea5]">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#dffff6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#2dcea5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-[#2dcea5] text-4xl font-bold mb-2">4.9K</h3>
                                <p className="text-gray-700 font-medium tracking-wide">Satisfaction</p>
                            </div>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex justify-center"
                    >
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-[250px] group border border-[#ffe6f2] hover:border-[#ff4d94]">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#ffe6f2] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ff4d94]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <h3 className="text-[#ff4d94] text-4xl font-bold mb-2">15K</h3>
                                <p className="text-gray-700 font-medium tracking-wide">Projects</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex justify-center"
                    >
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-[250px] group border border-[#fff3eb] hover:border-[#f99c5e]">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#fff3eb] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f99c5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-[#f99c5e] text-4xl font-bold mb-2">10K</h3>
                                <p className="text-gray-700 font-medium tracking-wide">Visitor</p>
                            </div>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex justify-center"
                    >
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-[250px] group border border-[#dff5ff] hover:border-[#21bcff]">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#dff5ff] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#21bcff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-[#21bcff] text-4xl font-bold mb-2">5K+</h3>
                                <p className="text-gray-700 font-medium tracking-wide">Active Users</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex justify-center"
                    >
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-[250px] group border border-[#e9f3ff] hover:border-[#0472fa]">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#e9f3ff] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0472fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-[#0472fa] text-4xl font-bold mb-2">0.1</h3>
                                <p className="text-gray-700 font-medium tracking-wide">Version</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

