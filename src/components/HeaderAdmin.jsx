import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png";
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { logoutUser } from '../Redux/actions/authActions';
function HeaderAdmin() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
        const location = useLocation();
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    const handleLogout = async () => {

        try {

            await dispatch(logoutUser());

            Swal.fire({
                title: 'Logged Out',
                text: 'You have been logged out successfully.',
                icon: 'success',
                confirmButtonText: 'OK',
            }).then(() => {
                navigate('/'); // Redirige al usuario al login después de cerrar sesión
            });
        } catch (error) {
            Swal.fire({
                title: 'Logout Failed',
                text: 'There was a problem logging out. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };
    return (
        <>
            <header className="bg-white w-full  dark:bg-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
                    <div className="flex h-16 items-center justify-between ">


                        <div className="flex-shrink-0 w-[20%]">
                            <Link className="block text-teal-600" to="/">
                                <img src={logo} alt="logo" className="w-[80px]" />
                            </Link>
                        </div>

                        <div className="hidden md:block">
                            <nav aria-label="Global">
                                <ul className="flex items-center gap-6 text-lg">
                                    <li className={`${location.pathname === '/myShifts' ? 'border-b-2 border-black' : 'text-[#000]'} transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75`}>
                                        <Link to="/createShift"
                                        // className="text-[#000] transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"

                                        >
                                            Create Shift
                                        </Link>
                                    </li>

                                    <li >
                                        <Link
                                            className="text-[#000] transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        >
                                            Create Services
                                        </Link>
                                    </li>

                                    <li className={`${location.pathname === '/services' ? 'border-b-2 border-black' : 'text-[#000]'} transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75`}>
                                        <Link to=""
                                        // className="text-[#000] transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"

                                        >
                                            Create BarberShop
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="hidden sm:flex sm:gap-4">
                                <button
                                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                                    type='button'
                                    onClick={handleLogout}
                                >
                                    Log out
                                </button>
                            </div>

                            <div className="block md:hidden">
                                <button
                                    onClick={toggleMenu}
                                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                            {isMenuOpen && (
                                <div className="md:hidden">
                                    <nav>
                                        <ul className="flex flex-col space-y-4">
                                            <li><a href="/about" className="hover:text-gray-600">About</a></li>
                                            <li><a href="/services" className="hover:text-gray-600">Services</a></li>
                                            <li><a href="/contact" className="hover:text-gray-600">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderAdmin