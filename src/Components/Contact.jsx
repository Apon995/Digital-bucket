import { useState } from "react";
import contactimg from '../assets/BackgroundFolder/Contact-image-2.jpg';
import { motion } from "framer-motion"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    passion: "",
    email: "",
    phone: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      passion: "",
      email: "",
      phone: ""
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 md:px-8 lg:px-16 ">
      <div className="max-w-6xl mx-auto ">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 "
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-[#635fc7]">Touch</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Assalamualaikum, welcome to Digital Bucket! We're here to help you with all your task management needs.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mt-8">
            {[
              { icon: "facebook", color: "text-blue-600", hover: "hover:text-blue-700" },
              { icon: "twitter", color: "text-blue-400", hover: "hover:text-blue-500" },
              { icon: "instagram", color: "text-pink-600", hover: "hover:text-pink-700" },
              { icon: "linkedin", color: "text-blue-700", hover: "hover:text-blue-800" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                className={`bg-white p-3 rounded-full shadow-md ${social.color} ${social.hover} transition-colors duration-300`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={`fa-brands fa-${social.icon} text-xl`}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: "fa-location-dot",
              title: "Our Location",
              content: "Mirpur Dhaka 1216\nNear by Mirpur shopping center",
              color: "text-[#635fc7]",
              bgColor: "bg-[#635fc7]/10"
            },
            {
              icon: "fa-phone",
              title: "Call us",
              content: "01344433353\n01244545335",
              color: "text-[#2dcea5]",
              bgColor: "bg-[#2dcea5]/10"
            },
            {
              icon: "fa-envelope",
              title: "Email address",
              content: "Digitalbucket2023@gmail.com",
              color: "text-[#f99c5e]",
              bgColor: "bg-[#f99c5e]/10"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              whileHover={{ y: -10 }}
            >
              <div className={`${item.bgColor} w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <i className={`fa-solid ${item.icon} ${item.color} text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center whitespace-pre-line">{item.content}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form & Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-10 mb-16"
        >
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {

                  [
                    { name: "name", type: "text", placeholder: "Enter your Name", icon: "user" },
                    { name: "passion", type: "text", placeholder: "Enter your Profession", icon: "briefcase" },
                    { name: "email", type: "email", placeholder: "Enter your Email", icon: "envelope" },
                    { name: "phone", type: "tel", placeholder: "Enter your Contact Number", icon: "phone" }
                  ].map((field, index) => (
                    <div key={index} className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className={`fa-solid fa-${field.icon} text-gray-400`}></i>
                      </div>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        id="contact"
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 focus:border-gray-600 rounded-lg outline-none transition-all duration-700 "
                        required
                      />
                    </div>
                  ))

                }


                <motion.button
                  type="submit"
                  className="w-full bg-[#635fc7] text-white py-3 rounded-lg font-medium hover:bg-[#514bbd] transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </motion.button>
              </form>
            </div>
          </div>

          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#635fc7] to-[#817cf0] p-2 rounded-2xl shadow-xl">
                <img
                  src={contactimg}
                  alt="Contact us"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-comments text-white text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Our Location</h2>
              <p className="text-gray-600">Find us easily at our office location</p>
            </div>
            <div className="h-96 w-full">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Mirpur%20Dhaka%201216+(Digital%20Bucket)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                className="rounded-b-2xl"
              >
              </iframe>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}

export default Contact;