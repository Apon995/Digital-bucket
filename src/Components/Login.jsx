import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/LogoFolder/Logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../CustomHooks/useAuth';
import { motion } from "framer-motion"


function Login() {
    const navigate = useNavigate();
    const [eye, setEye] = useState(true);
    const { user, LoginWithGooglePopup, LoginWithEmail } = useAuth();

    const location = useLocation();



    const HandleLogin = (e) => {
        e.preventDefault();

        const from = new FormData(e.currentTarget);
        const email = from.get('email');
        const password = from.get('password');

        if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)) {

            return toast.warn("Please Type correct password !", {
                position: 'top-right',
                hideProgressBar: true,
                autoClose: 2000
            })
        }


        LoginWithEmail(email, password)
            .then(res => {

                if (res) {
                    toast.success("Sign in successfull !", {
                        position: "top-right",
                        hideProgressBar: true,
                        autoClose: 3000
                    })


                    setTimeout(() => {
                        navigate(location.state ? location.state : '/')
                    }, 1000);

                }

            })
            .catch(() => {
                if ("auth / invalid - credential") {
                    toast.warning("please check your Email or password !", {
                        position: "top-right",
                        hideProgressBar: true,
                        autoClose: false

                    })

                }
            })



    }


    const HandleGoogleLogin = () => {
        LoginWithGooglePopup()
            .then(res => {
                if (res) {

                    toast.success("Sign in successfull !", {
                        position: "top-right",
                        hideProgressBar: true,
                        autoClose: 3000
                    })


                    setTimeout(() => {
                        navigate(location.state ? location.state : '/')
                    }, 1000);

                }

            })
            .catch(error => {
                console.log(error)
            })

    }
    return (

        <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                >
                    {/* Header with logo */}
                    <div className="bg-gradient-to-r from-[#635fc7] to-[#817cf0] p-6 text-center">
                        <div className='flex flex-row gap-1 items-center justify-center'
                        >
                            <img src={Logo} alt="DigitalBucket Logo" className="w-10 h-10" />
                            <h1 className="font-bold text-2xl text-white tracking-widest uppercase">DigitalBucket</h1>
                        </div>
                        <p className="text-blue-100">Your secure task management solution</p>
                    </div>

                    <div className="p-6 space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 text-center">
                                Welcome back
                            </h2>
                            <p className="text-gray-600 text-center mt-1">
                                Sign in to continue your productivity journey
                            </p>
                        </div>

                        <form onSubmit={HandleLogin} className="space-y-5">
                            {/* Email Field */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fa-solid fa-envelope text-gray-400"></i>
                                </div>
                                <input
                                    autoComplete="email"
                                    required
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 focus:border-gray-600 rounded-md outline-none transition-all duration-700   bg-white text-gray-900"
                                />
                            </div>

                            {/* Password Field */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fa-solid fa-lock text-gray-400"></i>
                                </div>
                                <input
                                    autoComplete="current-password"
                                    required
                                    type={eye ? 'password' : 'text'}
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 focus:border-gray-600 rounded-md outline-none transition-all duration-700  bg-white text-gray-900"
                                />
                                <button
                                    type="button"
                                    onClick={() => setEye(!eye)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                >
                                    <i className={`fa-solid ${eye ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </button>
                            </div>

                            {/* Remember me & Forgot password */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        className="w-4 h-4 text-[#635fc7] bg-gray-100 rounded border-2 border-gray-200 focus:border-gray-600 outline-none transition-all duration-700  "
                                    />
                                    <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                                        Remember me
                                    </label>
                                </div>
                                <button
                                    type="button"
                                    className="text-sm text-[#635fc7] hover:underline"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            {/* Sign in button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#635fc7] to-[#817cf0] text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                Sign in
                            </motion.button>
                        </form>

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        {/* Google login button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={HandleGoogleLogin}
                            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <i className="fa-brands fa-google text-red-500"></i>
                            Sign in with Google
                        </motion.button>

                        {/* Sign up link */}
                        <p className="text-center text-sm text-gray-600">
                            Don't have an account yet?{" "}
                            <Link
                                to="/Register"
                                className="font-medium text-[#635fc7] hover:underline"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>

            <ToastContainer />
        </section>
    )
}

export default Login