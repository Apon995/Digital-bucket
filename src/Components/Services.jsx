
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Services() {
    const [isQuizOpen, setIsQuizOpen] = useState(false);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate();

    const quizQuestions = [
        {
            id: 1,
            question: "What's your primary role?",
            options: [
                { id: 'banker', label: 'Banking/Finance Professional', icon: '🏦' },
                { id: 'business', label: 'Business Owner/Manager', icon: '💼' },
                { id: 'developer', label: 'Developer/Programmer', icon: '💻' },
                { id: 'healthcare', label: 'Healthcare Professional', icon: '⚕️' },
                { id: 'student', label: 'Student', icon: '🎓' },
                { id: 'other', label: 'Other', icon: '🔍' }
            ]
        },
        {
            id: 2,
            question: "How many tasks do you typically manage daily?",
            options: [
                { id: '1-5', label: '1-5 tasks', icon: '📝' },
                { id: '5-10', label: '5-10 tasks', icon: '📋' },
                { id: '10-20', label: '10-20 tasks', icon: '📚' },
                { id: '20+', label: '20+ tasks', icon: '🗂️' }
            ]
        },
        {
            id: 3,
            question: "What's most important in a task management tool?",
            options: [
                { id: 'security', label: 'Security & Privacy', icon: '🔒' },
                { id: 'collaboration', label: 'Team Collaboration', icon: '👥' },
                { id: 'ease', label: 'Ease of Use', icon: '✨' },
                { id: 'customization', label: 'Customization', icon: '🎨' },
                { id: 'accessibility', label: 'Accessibility', icon: '🌐' }
            ]
        },
        {
            id: 4,
            question: "How do you primarily work?",
            options: [
                { id: 'solo', label: 'Individually', icon: '🙋' },
                { id: 'team', label: 'As part of a team', icon: '👥' },
                { id: 'both', label: 'Mix of both', icon: '🔄' }
            ]
        }
    ];

    const featureRecommendations = {
        banker: ['Secure data encryption', 'Priority task sorting', 'Compliance tracking'],
        business: ['Team collaboration', 'Project timelines', 'Client management'],
        developer: ['Code snippet storage', 'Project milestones', 'Bug tracking'],
        healthcare: ['Patient task management', 'Appointment scheduling', 'Secure records'],
        student: ['Study planning', 'Assignment tracking', 'Exam schedules'],
        '1-5': ['Simple task lists', 'Basic reminders', 'Minimalist interface'],
        '5-10': ['Categorization', 'Priority levels', 'Daily overview'],
        '10-20': ['Advanced filtering', 'Time blocking', 'Progress tracking'],
        '20+': ['Automated sorting', 'Batch operations', 'Advanced analytics'],
        security: ['End-to-end encryption', 'Two-factor authentication', 'Private workspaces'],
        collaboration: ['Shared boards', 'Real-time updates', 'Comment threads'],
        ease: ['Drag-and-drop', 'Intuitive design', 'Quick setup'],
        customization: ['Custom categories', 'Color coding', 'Flexible layouts'],
        accessibility: ['Mobile apps', 'Offline access', 'Cross-platform sync'],
        solo: ['Personal workspace', 'Custom notifications', 'Individual analytics'],
        team: ['Team workspaces', 'Assignment features', 'Collaboration tools'],
        both: ['Hybrid workspaces', 'Role-based permissions', 'Flexible sharing']
    };

    const handleAnswer = (questionId, answerId) => {
        setAnswers(prev => ({ ...prev, [questionId]: answerId }));

        if (currentStep < quizQuestions.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            setShowResults(true);
        }
    };

    const restartQuiz = () => {
        setCurrentStep(0);
        setAnswers({});
        setShowResults(false);
    };



    const getRecommendedFeatures = () => {
        const recommended = new Set();

        Object.values(answers).forEach(answer => {
            if (featureRecommendations[answer]) {
                featureRecommendations[answer].forEach(feature => recommended.add(feature));
            }
        });

        return Array.from(recommended);
    };


    const closeQuiz = () => {
        setIsQuizOpen(false);
        setTimeout(() => {
            setCurrentStep(0);
            setAnswers({});
            setShowResults(false);
        }, 300);
    };


    return (
        <>
            {/* ---=Our-services--- */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-50px" }}
                className="w-full bg-gradient-to-br from-white to-gray-50 py-16 px-4 md:px-8 lg:px-16"
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
                            Who Benefits Most
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
                            Our Services For
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            DigitalBucket is designed to help professionals across various industries stay organized and productive
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {/* Banker's Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 group-hover:border-[#21bcff] group-hover:-translate-y-2">
                                <div className="flex flex-col md:flex-row items-start gap-6">
                                    <div className="bg-[#dff5ff] p-5 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <i className="fa-solid fa-building-columns text-[#21bcff] text-3xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Bankers</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            This website is specially designed for bankers who have many tasks every day.
                                            DigitalBucket simplifies their workflow and keeps all data and todos secure and safe!
                                        </p>
                                        <div className="mt-4 flex items-center text-sm text-[#21bcff]">
                                            <span>Explore features</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Business Man Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 group-hover:border-[#f99c5e] group-hover:-translate-y-2">
                                <div className="flex flex-col md:flex-row items-start gap-6">
                                    <div className="bg-[#fff3eb] p-5 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <i className="fa-solid fa-briefcase text-[#f99c5e] text-3xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Business Professionals</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Business professionals can track their work here and operate all day without mistakes or tension.
                                            DigitalBucket helps business people save time and increase productivity.
                                        </p>
                                        <div className="mt-4 flex items-center text-sm text-[#f99c5e]">
                                            <span>Explore features</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Doctor Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 group-hover:border-[#2dcea5] group-hover:-translate-y-2">
                                <div className="flex flex-col md:flex-row items-start gap-6">
                                    <div className="bg-[#dffff6] p-5 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <i className="fa-solid fa-user-doctor text-[#2dcea5] text-3xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Doctors</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Doctors have many tasks throughout the day. They can use DigitalBucket to schedule
                                            and save or remind themselves of daily work. This website helps doctors manage their daily tasks efficiently!
                                        </p>
                                        <div className="mt-4 flex items-center text-sm text-[#2dcea5]">
                                            <span>Explore features</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Programmer & Developer Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 group-hover:border-[#0472fa] group-hover:-translate-y-2">
                                <div className="flex flex-col md:flex-row items-start gap-6">
                                    <div className="bg-[#e9f3ff] p-5 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <i className="fa-solid fa-computer text-[#0472fa] text-3xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Programmers & Developers</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Programmers & developers can use this website for their important task work in daily,
                                            monthly, or yearly routines. DigitalBucket's storage is very secure and safe for all your development needs!
                                        </p>
                                        <div className="mt-4 flex items-center text-sm text-[#0472fa]">
                                            <span>Explore features</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        className="text-center mt-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-600 mb-6">Not sure if DigitalBucket is right for you?</p>
                        <button onClick={() => setIsQuizOpen(!isQuizOpen)} className="bg-[#635fc7] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#514bbd] transition-colors duration-300 shadow-md hover:shadow-lg">
                            Take a Quick Quiz
                        </button>
                    </motion.div>
                </div>
            </motion.div>


            {/* -------Quick-Quiz----- */}
            <AnimatePresence>

                {
                    isQuizOpen &&


                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[999]"
                        onClick={closeQuiz}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[95vh] overflow-hidden "
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-[#635fc7] to-[#817cf0] p-6 text-white relative">
                                <button
                                    onClick={closeQuiz}
                                    className="absolute top-4 right-4 text-white hover:text-gray-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <h2 className="text-2xl font-bold mb-2">Find Your Perfect Setup</h2>
                                <p className="opacity-90">Quick quiz to personalize your DigitalBucket experience</p>

                                {/* Progress bar */}
                                {!showResults && (
                                    <div className="w-full bg-white bg-opacity-30 rounded-full h-2 mt-4">
                                        <motion.div
                                            className="bg-white h-2 rounded-full"
                                            initial={{ width: "00%" }}
                                            animate={{ width: `${((currentStep + 1) / quizQuestions.length) * 95}%` }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6 overflow-y-auto scroll-smooth max-h-[60vh]">
                                <AnimatePresence mode="wait">
                                    {!showResults ? (
                                        <motion.div
                                            key={currentStep}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <h3 className="text-xl font-semibold text-gray-800 mb-6">
                                                {quizQuestions[currentStep].question}
                                            </h3>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {quizQuestions[currentStep].options.map((option) => (
                                                    <motion.button
                                                        key={option.id}
                                                        whileHover={{ scale: 1.03 }}
                                                        whileTap={{ scale: 0.97 }}
                                                        className="p-4 border border-gray-200 rounded-xl text-left hover:border-[#635fc7] hover:bg-[#635fc7]/5 transition-colors duration-200"
                                                        onClick={() => handleAnswer(quizQuestions[currentStep].id, option.id)}
                                                    >
                                                        <div className="text-2xl mb-2">{option.icon}</div>
                                                        <div className="font-medium">{option.label}</div>
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <h3 className="text-xl font-semibold text-gray-800 mb-6">Your Personalized Recommendations</h3>

                                            <div className="bg-gradient-to-r from-[#635fc7]/10 to-[#817cf0]/10 p-6 rounded-xl mb-6">
                                                <h4 className="font-semibold text-[#635fc7] mb-4">Based on your answers, we recommend:</h4>

                                                <ul className="space-y-2">
                                                    {getRecommendedFeatures().map((feature, index) => (
                                                        <motion.li
                                                            key={index}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.1 }}
                                                            className="flex items-center"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#635fc7] mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            {feature}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <p className="text-gray-600 mb-6">
                                                DigitalBucket can be customized to fit your specific needs with these features and more.
                                                Ready to get started?
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-gray-200 flex justify-between">
                                {!showResults ? (
                                    <>
                                        <button
                                            onClick={() => currentStep > 0 && setCurrentStep(prev => prev - 1)}
                                            disabled={currentStep === 0}
                                            className={`px-4 py-2 rounded-lg ${currentStep === 0 ? 'opacity-0' : 'text-[#635fc7] opacity-100 hover:bg-[#635fc7]/10'}`}
                                        >
                                            Back
                                        </button>
                                        <div className="text-sm text-gray-500">
                                            {currentStep + 1} of {quizQuestions.length}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={restartQuiz}
                                            className="px-4 py-2 text-[#635fc7] hover:bg-[#635fc7]/10 rounded-lg"
                                        >
                                            Retake Quiz
                                        </button>
                                        <button
                                            onClick={()=> navigate("/Dashboard")}
                                            className="bg-[#635fc7] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#514bbd] transition-colors"
                                        >
                                            Get Started with DigitalBucket
                                        </button>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>


                }
            </AnimatePresence>


        </>
    )
}
