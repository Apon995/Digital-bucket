import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/LogoFolder/Logo.png";
import useAuth from "../CustomHooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion"


function Navbar() {
    const [navbackground, setNavbackground] = useState(false);
    const { user, LogOut } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [menu, setMenu] = useState(false)





    const handleNavbackgound = () => {
        if (window.scrollY > 90) {
            setNavbackground(true);
        } else {
            setNavbackground(false);
        }
    };

    useEffect(() => {

        if (location.pathname == '/Register' || location.pathname == '/Login') {
            setNavbackground(true)
        }
        else {
            window.addEventListener("scroll", handleNavbackgound);

        }


    }, [location.pathname]);


    const HandleLogOut = () => {

        LogOut()
        toast.success("sign out succesfull ! ", {
            position: "top-center",
            hideProgressBar: true,
            autoClose: 3000
        })



    }

    const HandleNav = () => {
        if (!menu) {

            document.getElementById('sidebar').classList.remove('left-[-200px]')
            document.getElementById('sidebar').classList.add('left-0')

        }
        else {
            document.getElementById('sidebar').classList.remove('left-0')
            document.getElementById('sidebar').classList.add('left-[-200px]')
        }
    }


    useEffect(() => {
        if (menu) {
            HandleNav()
            setMenu(!menu)

        }
    }, [location.pathname])

    return (

        <>
      
            <nav
                className={`fixed top-0 left-0 w-full bg-[#635fc7] z-50 transition-all duration-300 ${navbackground ? "bg-[#635fc7] shadow-md" : "bg-transparent"}`}
            >
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex flex-row gap-1">
                            <img src={Logo} alt="DigitalBucket Logo" className="w-8 h-8" />
                            <h1 className="font-bold text-xl text-white tracking-widest uppercase">
                                DigitalBucket
                            </h1>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <div className="flex items-center space-x-6">
                                {[
                                    { path: "/", label: "Home" },
                                    { path: "/About", label: "About" },
                                    { path: "/Contact", label: "Contact" },
                                    { path: "/Dashboard", label: "Dashboard" }
                                ].map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `text-white font-medium tracking-wide transition-all duration-300 hover:text-blue-100 ${isActive ? "text-blue-100 border-b-2 border-blue-100" : ""
                                            }`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>

                            {/* Auth Buttons */}
                            <div className="flex items-center">
                                {user ? (
                                    <motion.div
                                        className="flex items-center gap-3"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <i className="fa-solid fa-right-from-bracket text-white text-lg"></i>
                                        <button
                                            onClick={HandleLogOut}
                                            className="px-4 py-2 bg-white text-[#635fc7] rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
                                        >
                                            Sign Out
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        className="flex items-center gap-3"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <i className="fa-solid fa-arrow-right-to-bracket text-white text-lg"></i>
                                        <button
                                            onClick={() => navigate("/Login")}
                                            className="px-4 py-2 bg-white text-[#635fc7] rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
                                        >
                                            Sign In
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => { HandleNav(); setMenu(!menu); }}
                                className="text-white p-2 rounded-md focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                {menu ? (
                                    <i className="fa-solid fa-xmark text-2xl"></i>
                                ) : (
                                    <i className="fa-solid fa-bars text-2xl"></i>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <motion.div
                        id="sidebar"
                        className={`md:hidden fixed top-16 left-0 w-full h-screen bg-[#635fc7] transform transition-all duration-500 ease-in-out ${menu ? "translate-x-0" : "-translate-x-full"
                            }`}
                        initial={{ x: "-100%" }}
                        animate={{ x: menu ? 0 : "-100%" }}
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-10">
                            <ul className="flex flex-col items-center space-y-8 text-white font-medium tracking-widest">
                                {[
                                    { path: "/", label: "Home" },
                                    { path: "/About", label: "About" },
                                    { path: "/Contact", label: "Contact" },
                                    { path: "/Dashboard", label: "Dashboard" }
                                ].map((item) => (
                                    <motion.li
                                        key={item.path}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <NavLink
                                            to={item.path}
                                            className={({ isActive }) =>
                                                `text-xl ${isActive ? "text-blue-100 border-b-2 border-blue-100" : ""}`
                                            }
                                            onClick={() => setMenu(false)}
                                        >
                                            {item.label}
                                        </NavLink>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="mt-8">
                                {user ? (
                                    <motion.div
                                        className="flex flex-col items-center space-y-4"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <i className="fa-solid fa-right-from-bracket text-white text-2xl"></i>
                                        <button
                                            onClick={() => { HandleLogOut(); setMenu(false); }}
                                            className="px-6 py-3 bg-white text-[#635fc7] rounded-md font-medium text-lg"
                                        >
                                            Sign Out
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        className="flex flex-col items-center space-y-4"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <i className="fa-solid fa-arrow-right-to-bracket text-white text-2xl"></i>
                                        <button
                                            onClick={() => { navigate("/Login"); setMenu(false); }}
                                            className="px-6 py-3 bg-white text-[#635fc7] rounded-md font-medium text-lg"
                                        >
                                            Sign In
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>


            <ToastContainer />
        </>
    );
}

export default Navbar;
