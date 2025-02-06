import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, logoutUser } from '../Redux/actions/authActions';
import Swal from 'sweetalert2';

function Header() {
    const role = useSelector((state) => state.authenticateUser.role)
    const isLoggedIn = useSelector((state) => state.authenticateUser)
    const email = useSelector((state) => state.authenticateUser.email)
    console.log(isLoggedIn);

    console.log(role);

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isLoading, setIsLoading] = useState(true); // Estado para manejar el estado de carga


    useEffect(() => {
        const localStorageEmail = localStorage.getItem('email');
        if (localStorageEmail) {
            dispatch(loadUser(localStorageEmail))
                .then(() => setIsLoading(false)) // Cambia a falso cuando la carga es exitosa
                .catch(() => setIsLoading(false)); // Cambia a falso incluso si hay un error
        } else {
            setIsLoading(false);
        }
    }, [dispatch]);
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

    const location = useLocation();

    if (isLoading) {
        // Renderiza un loader o un componente de carga mientras se espera que los datos del usuario estén disponibles
        return <div>Loading...</div>;
    }

    return (
        <>
            <header className="bg-white w-full dark:bg-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-shrink-0 w-[20%]">
                            <Link className="block text-teal-600" to="/">
                                <img src={logo} alt="logo" className="w-[80px]" />
                            </Link>
                        </div>

                        <div className="hidden md:block">
                            <nav aria-label="Global">
                                <ul className="flex items-center gap-6 text-lg">
                                    <li className={`${location.pathname === '/' ? 'border-b-2 border-black' : 'text-[#000]'} transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75`}>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <a
                                            className="text-[#000] transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            href="#contact"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                    <li className={`${location.pathname === '/services' ? 'border-b-2 border-black' : 'text-[#000]'} transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75`}>
                                        <Link to="/services">Services</Link>
                                    </li>
                                    <li className={`${location.pathname === '/barberShop' ? 'border-b-2 border-black' : 'text-[#000]'} transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75`}>
                                        <Link to="/barberShop">BarberShop</Link>
                                    </li>

                                    {role === "Admin" && (
                                        <>
                                            <li className={`${location.pathname === '/createShift' ? 'border-b-2 border-black' : 'text-[#000]'} transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75`}>
                                                <Link to="/createShift">Create Shift</Link>
                                            </li>
                                            <li className={`${location.pathname === '/createServices' ? 'border-b-2 border-black' : 'text-[#000]'} transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75`}>
                                                <Link to="/createServices">Create Services</Link>
                                            </li>
                                            <li className={`${location.pathname === '/createBarberShop' ? 'border-b-2 border-black' : 'text-[#000]'} transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75`}>
                                                <Link to="/createBarberShop">Create BarberShop</Link>
                                            </li>
                                        </>
                                    )}

                                    {role === "Client" && (
                                        <>
                                            <li className={`${location.pathname === '/myShifts' ? 'border-b-2 border-black' : 'text-[#000]'} transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75`}>
                                                <Link to="/myShifts">My Shifts</Link>
                                            </li>
                                            <li className={`${location.pathname === '/bookNow' ? 'border-b-2 border-black' : 'text-[#000]'} transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75`}>
                                                <Link to="/bookNow">Book Now</Link>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </nav>
                        </div>

                        <div className="flex items-center gap-4">
                            {isLoggedIn.isLoggedIn === true ? (
                                <div className="hidden sm:flex sm:gap-4">
                                    <button
                                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                                        type="button"
                                        onClick={handleLogout}
                                    >
                                        Log out
                                    </button>
                                </div>
                            ) : (
                                <div className="hidden sm:flex sm:gap-4">
                                    <Link
                                        to="/login"
                                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}

                            {/* Botón para abrir el menú en móviles */}
                            <div className="block md:hidden">
                                <button
                                    onClick={toggleMenu}
                                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Modal responsive para el menú en dispositivos móviles */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-gray-900 w-11/12 max-w-sm p-6 rounded-lg relative">
                        {/* Botón para cerrar el modal */}
                        <button
                            onClick={toggleMenu}
                            className="absolute top-2 right-2 text-gray-600 dark:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <nav>
                            <ul className="flex flex-col space-y-4 text-center">
                                <li>
                                    <Link
                                        to="/"
                                        onClick={toggleMenu}
                                        className={`${location.pathname === '/' ? 'font-bold' : 'font-normal'} hover:text-gray-500 dark:hover:text-gray-300`}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        onClick={toggleMenu}
                                        className="hover:text-gray-500 dark:hover:text-gray-300"
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        to="/services"
                                        onClick={toggleMenu}
                                        className={`${location.pathname === '/services' ? 'font-bold' : 'font-normal'} hover:text-gray-500 dark:hover:text-gray-300`}
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/barberShop"
                                        onClick={toggleMenu}
                                        className={`${location.pathname === '/barberShop' ? 'font-bold' : 'font-normal'} hover:text-gray-500 dark:hover:text-gray-300`}
                                    >
                                        BarberShop
                                    </Link>
                                </li>

                                {role === "Admin" && (
                                    <>
                                        <li>
                                            <Link
                                                to="/createShift"
                                                onClick={toggleMenu}
                                                className={`${location.pathname === '/createShift' ? 'font-bold' : 'font-normal'} hover:text-gray-500 dark:hover:text-gray-300`}
                                            >
                                                Create Shift
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/createServices"
                                                onClick={toggleMenu}
                                                className={`${location.pathname === '/createServices' ? 'font-bold' : 'font-normal'} hover:text-gray-500 dark:hover:text-gray-300`}
                                            >
                                                Create Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/createBarberShop"
                                                onClick={toggleMenu}
                                                className={`${location.pathname === '/createBarberShop' ? 'font-bold' : 'font-normal'} hover:text-gray-500 dark:hover:text-gray-300`}
                                            >
                                                Create BarberShop
                                            </Link>
                                        </li>
                                    </>
                                )}

                                {role === "Client" && (
                                    <>
                                        <li>
                                            <Link
                                                to="/myShifts"
                                                onClick={toggleMenu}
                                                className={`${location.pathname === '/myShifts' ? 'font-bold' : 'font-normal'} hover:text-gray-500 dark:hover:text-gray-300`}
                                            >
                                                My Shifts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/bookNow"
                                                onClick={toggleMenu}
                                                className={`${location.pathname === '/bookNow' ? 'font-bold' : 'font-normal'} hover:text-gray-500 dark:hover:text-gray-300`}
                                            >
                                                Book Now
                                            </Link>
                                        </li>
                                    </>
                                )}

                                {/* Opciones de Login/Register o Logout para móviles */}
                                {isLoggedIn.isLoggedIn === true ? (
                                    <li>
                                        <button
                                            onClick={() => {
                                                toggleMenu();
                                                handleLogout();
                                            }}
                                            className="w-full rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                                        >
                                            Log out
                                        </button>
                                    </li>
                                ) : (
                                    <>
                                        <li>
                                            <Link
                                                to="/login"
                                                onClick={toggleMenu}
                                                className="w-full block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                                            >
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/register"
                                                onClick={toggleMenu}
                                                className="w-full block rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                            >
                                                Register
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header