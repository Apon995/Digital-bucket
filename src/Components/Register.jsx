import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/LogoFolder/Logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../CustomHooks/useAuth'

function Register() {
    const [eye, setEye] = useState(true);
    const { RegisterWithEmail, LoginWithGooglePopup } = useAuth();
    const navigate = useNavigate();

    const HandleRegister = (e) => {
        e.preventDefault();

        const from = new FormData(e.currentTarget);
        const email = from.get('email');
        const password = from.get('password');

        if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)) {

            return toast.warn("Please Type strong password!", {
                position: 'top-center',
                hideProgressBar: true,
                autoClose: 2000
            })
        }




        RegisterWithEmail(email, password)
            .then(res => {
                if (res) {
                    e.target.reset();
                    toast.success("Succesfully create an account ! please signin now .", {
                        position: "top-center",
                        hideProgressBar: true,
                        autoClose: 3000
                    })



                }

            })
            .catch(() => {
                toast.warning("Something worng try again !", {
                    position: "top-right",
                    hideProgressBar: true,
                    autoClose: 1500
                })
            })



    }

    const HandleGoogleLogin = () => {
        LoginWithGooglePopup()
            .then(res => {
                if (res) {

                    toast.success("sign in successfull !", {
                        position: "top-center",
                        hideProgressBar: true,
                        autoClose: 3000
                    })


                    setTimeout(() => {
                        navigate(location.state ? location.state : '/')
                    }, 2000);

                }

            })
            .catch(error => {
                console.log(error)
            })

    }


    return (
        <>
            <section className="bg-gray-50 dark:bg-white min-h-screen mt-28">
                <br />
                <br />
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white z-50 shadow-xl rounded-lg  md:mt-0 sm:max-w-md xl:p-0 dark:bg-white text-black ">

                        <div className='flex items-center gap-1 mx-auto text-center justify-center'>
                            <img src={Logo} alt="Logo" className='w-[30px]' />
                            <h1 className='font-bold text-xl text-black tracking-widest uppercase'>DigitalBucket</h1>

                        </div>

                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                                Create your account
                            </h1>
                            <form onSubmit={HandleRegister} className="space-y-4 md:space-y-6" >
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your Name</label>
                                    <input autoComplete='true' type="name" name="name" id="name" className="  sm:text-sm rounded-lg border-2 focus:border-[#635fc7] outline-none duration-300 block w-full p-2.5 dark:bg-white text-black dark:placeholder-gray-400 dark:text-black  " placeholder="Enter your Name " required />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                                    <input autoComplete='true' type="email" name="email" required id="email" className="  sm:text-sm rounded-lg border-2 focus:border-[#635fc7] outline-none duration-300 block w-full p-2.5 dark:bg-white text-black dark:placeholder-gray-400 dark:text-black  " placeholder="Enter your email " />
                                </div>

                                <div className='relative'>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Create Password</label>
                                    <input autoComplete='true' type={`${eye ? 'password' : 'text'}`} name="password" id="password" placeholder="Create your password" className=" text-black border-2 focus:border-[#635fc7] outline-none duration-300 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-white  dark:placeholder-gray-400 dark:text-black  bg-white " required />
                                    <button onClick={() => setEye(!eye)} className='absolute top-[39px] md:left-[350px] left-[265px]'><i className={`fa-solid ${eye ? 'fa-eye-slash' : 'fa-eye'} `}></i></button>
                                </div>



                                <button className="w-full text-white bg-[#635fc7]  font-medium rounded-lg text-base px-5 py-2.5 text-center active:bg-black  dark:bg-[#635fc7] dark:text-white ">Create new</button>
                            </form>


                            <p className='or-span text-black text-xl tracking-widest text-center hidden md:block'>--------------&&---------------</p>
                            <p className='or-span text-black text-xl tracking-widest text-center md:hidden'>---------&----------</p>
                            <div className='social-icons'>
                                <button onClick={HandleGoogleLogin}><i className="fa-brands fa-google"></i></button>
                                <button><i className="fa-brands fa-facebook"></i></button>
                                <button><i className="fa-brands fa-linkedin"></i></button>
                            </div>
                            <p className="text-sm font-normal text-[#adadad] dark:text-black">
                                Already you have account? <Link to='/Login' className="font-medium text-primary-600 hover:underline dark:text-black">Sign in</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </section>


















        </>
    )
}

export default Register