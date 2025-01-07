import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/LogoFolder/Logo.png";
import useAuth from "../CustomHooks/useAuth";
import { toast, ToastContainer } from "react-toastify";


function Navbar() {
    const [navbackground, setNavbackground] = useState(false);
    const { user, LogOut  } = useAuth();
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
                className={` flex bg-[#635fc7] items-center justify-between py-4 lg:px-[2%] md:px-[px-1%] px-[2%] w-full bg-${navbackground ? "[#635fc7]" : "inherit"}`}
            >
                <div className="flex items-center gap-1">
                    <img src={Logo} alt="Logo" className="w-[30px]" />
                    <h1 className="font-bold lg:text-xl md:text-base text-white tracking-widest uppercase">
                        DigitalBucket
                    </h1>
                </div>

                <div id="sidebar" className="md:flex duration-700 bg-[#635fc7] md:bg-inherit top-0 md:h-fit h-screen rounded-lg md:py-0 py-5 w-[200px]  left-[-200px] md:flex-row flex-col lg:w-[60%] md:w-[65%] md:static absolute items-center md:justify-between ">
                    <div>
                        <ul
                            id="navbar-link"
                            className="flex md:flex-row  md:pt-0 pt-[150px] text-sm lg:text-base  flex-col items-center gap-2 text-white font-medium tracking-widest "
                        >
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/About">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Dashboard">Dashboard</NavLink>
                            </li>
                        </ul>
                    </div>


                    <div className="md:mx-0 mx-auto w-fit mt-5 md:mt-0">
                        {user ? (
                            <div className="flex items-center gap-2 text-white">
                                {/* --LOG-out-BUTTON-- */}
                                <i className="fa-solid fa-right-from-bracket lg:text-2xl md:text-xl md:block hidden"></i>
                                <button
                                    onClick={HandleLogOut}
                                    className={`px-3 py-2 border-2 border-white rounded-md font-medium active:bg-black   `}
                                >
                                    sign out
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 text-white">
                                {/* --LOG-in-BUTTON-- */}
                                <i className="fa-solid fa-arrow-right-to-bracket lg:text-2xl md:text-xl md:block hidden"></i>
                                <button onClick={() => navigate("/Login")}
                                    className={`px-3 py-2 border-2 border-white rounded-md font-medium active:bg-black   `}
                                >
                                    sign in
                                </button>
                            </div>
                        )}
                    </div>

                </div>

                <div className="md:hidden block">
                    <button onClick={() => { HandleNav(), setMenu(!menu) }} className="text-white text-xl font-bold"> {menu ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}   </button>
                </div>
            </nav>


            <ToastContainer />
        </>
    );
}

export default Navbar;
