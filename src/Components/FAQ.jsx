import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, we prioritize and aim to respond within 4-6 hours."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support via email and live chat for all our users. Our dedicated support team is always ready to assist you with any questions or issues."
    },
    {
      question: "Can I schedule a demo of DigitalBucket?",
      answer: "Absolutely! Contact us to schedule a personalized demo at your convenience. We'll walk you through all the features and show you how DigitalBucket can transform your workflow."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to get started and explore everything DigitalBucket has to offer."
    },
    {
      question: "How secure is my data with DigitalBucket?",
      answer: "We take security seriously. All data is encrypted in transit and at rest. We use industry-standard security practices and regularly undergo security audits to ensure your information is safe."
    },
    {
      question: "Can I use DigitalBucket on mobile devices?",
      answer: "Yes, DigitalBucket is fully responsive and works seamlessly on all devices. We also have dedicated mobile apps for iOS and Android for an optimized experience on the go."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 md:p-8 lg:p-10"
    >
      <div className="text-center mb-10">
        <span className="text-[#635fc7] font-semibold tracking-wider text-sm md:text-base uppercase">
          Need Help?
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find quick answers to common questions about DigitalBucket
        </p>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqData.map((faq, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button 
              className="flex justify-between items-center w-full p-5 text-left font-semibold text-gray-900 focus:outline-none"
              onClick={() => toggleFAQ(index)}
              whileTap={{ scale: 0.98 }}
            >
              <span className="pr-4">{faq.question}</span>
              <motion.span
                className="text-[#635fc7]"
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.span>
            </motion.button>
            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div 
                  className="px-5 pb-5 text-gray-600 overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

    
    </motion.div>
  );
};

export default FAQ;