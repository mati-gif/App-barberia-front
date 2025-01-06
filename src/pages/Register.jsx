import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png";
import { X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { registerUser } from '../Redux/actions/authActions';
import Swal from 'sweetalert2';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const errorMessage = useSelector((state) => state.authenticateUser);

    console.log(errorMessage);




    const handleChange = (e) => {
        const { name, value } = e.target;
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));

        switch (name) {
            case 'FirstName':
                setFirstName(value); // Permitir espacios
                break;
            case 'LastName':
                setLastName(value); // Permitir espacios
                break;
            case 'Email':
                setEmail(value.replace(/\s+/g, '')); // Eliminar espacios en el email
                break;
            case 'password':
                setPassword(value.replace(/\s+/g, '')); // Eliminar espacios en la contraseña
                break;
            default:
                break;
        }
    };

    const handleSubmit = async () => {
        const sanitizedFirstName = firstName;
        const sanitizedLastName = lastName;
        const sanitizedEmail = email;
        const sanitizedPassword = password;


        console.log("Submit clicked!");
        const newErrors = {};

        console.log(newErrors);


        //       Validación de campos
        if (!sanitizedFirstName) {
            newErrors.firstName = 'First name cannot be empty.';
            console.log('First name validation error:', newErrors.firstName);  // Agrega este log
        }
        if (!sanitizedLastName) {
            newErrors.lastName = 'Last name cannot be empty.';
            console.log('Last name validation error:', newErrors.lastName);  // Agrega este log
        }
        if (!sanitizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitizedEmail)) {
            newErrors.email = 'A valid email is required  ';
            console.log("email validation error", newErrors.email);

        }
        if (!sanitizedPassword || sanitizedPassword.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long and cannot contain spaces.';
            console.log("password validation error", newErrors.password);

        }
        console.log("Validation errors: ", newErrors);

        if (Object.keys(newErrors).length > 0) {
            console.log("Validation errors: ", newErrors);
            setErrors(newErrors);
            return;
        }

        console.log("Form valid, sending data...");

        setErrors({}); // Limpiar errores antes de enviar

        try {
            const userData = {
                firstName: sanitizedFirstName,
                lastName: sanitizedLastName,
                email: sanitizedEmail,
                password: sanitizedPassword
            };
            console.log("Sending userData: ", userData);
            // Intentar realizar el registro
            const result = await dispatch(registerUser(userData)).unwrap();
            console.log("Register result: ", result);  // Agregar este log para ver el resultado exitoso


            Swal.fire({
                title: 'Registration Successful',
                text: 'Registered successfully! Redirecting to login...',
                icon: 'success',
                timer: 1000,
                showConfirmButton: false,
            });

            setTimeout(() => navigate('/login'), 1000);
        } catch (error) {


            console.error("Registration error: ", error);
            console.log("Error details:", error);
            console.log("Backend response data:", error?.response?.data);
            const newErrors = {};
            console.log(newErrors);

            // Verifica si el error es un string o viene en el formato esperado del backend
            const backendErrorMessage = error?.response?.data?.message || error?.message || error || error?.response?.data || error?.response;

            console.log("Backend error message: ", backendErrorMessage)


            // Manejo de errores desde el backend
            if (typeof backendErrorMessage === 'string') {

                // if (error.includes('The name field must not be empty')) {
                //     newErrors.firstName = 'First name is required';
                // }

                // if (error.includes('last name field must not be empty')) {
                //     newErrors.lastName = 'Last name is required';
                // }

                // if (error.includes('email field must not be empty') || error.includes('Email is already in use')) {
                //     newErrors.email = error.includes('already in use') ? 'Email is already in use' : 'Email is required';
                // }
                // if (error.includes('password field must not be empty') || error.includes('Password must be at least 8 characters long')) {
                //     newErrors.password = error.includes('at least 8 characters') ? 'Password must be at least 8 characters' : 'Password is required';
                // }


                setErrors(newErrors);

                console.log(newErrors);

            } else if (errorMessage) {
                Swal.fire({
                    title: 'Registration Failed',
                    text: errorMessage,
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        }
    };
    return (
        <>
            <div className='bg-[url(https://studio-dbrickell.com/wp-content/uploads/2022/12/shutterstock_1128837791-scaled.jpg)] bg-cover bg-center bg-no-repeat  border-4 border-red-500  h-screen flex flex-col justify-center items-center'>
                <div
                    class=" min-w-[35%] rounded-lg shadow-xl min-h-[65%] p-6 bg-white relative overflow-hidden"
                >
                    {/* <div class="flex flex-col justify-center items-center space-y-2">
                    <h2 class="text-2xl font-medium text-slate-700">Login</h2>
                    <p class="text-slate-500">Enter details below.</p>
                </div> */}
                    <Link to="/">
                        <X size={24} />
                    </Link>
                    <div className="flex-shrink-0 w-[100%] flex justify-center ">
                        <Link className="block text-teal-600" to="/">
                            <img src={logo} alt="logo" className="w-[100px]" />
                        </Link>
                    </div>
                    <form class="w-full mt-4 space-y-3 border-2 border-red-500">
                        <div>
                            <input

                                placeholder="First Name"
                                id="FirstName"
                                name="FirstName"
                                type="text"
                                value={firstName}
                                onChange={handleChange}
                                className={`outline-none rounded-md px-2 py-1 text-slate-500 w-full border-2   focus:border-blue-300 `}
                            />
                            {errors.firstName && <p className="text-red-500 text-sm font-bold">{errors.firstName}</p>}
                        </div>
                        <div>
                            <input
                                placeholder="Last Name"
                                id="LastName"
                                name="LastName"
                                type="text"
                                value={lastName}
                                onChange={handleChange}
                                className={`outline-none rounded-md px-2 py-1 text-slate-500 w-full border-2   focus:border-blue-300 `}
                            />
                            {errors.firstName && <p className="text-red-500 text-sm font-bold">{errors.firstName}</p>}

                        </div>
                        <div>
                            <input
                                placeholder="Email"
                                id="Email"
                                name="Email"
                                type="email"
                                value={email}
                                onChange={handleChange}
                                className={`outline-none rounded-md px-2 py-1 text-slate-500 w-full border-2   focus:border-blue-300 `}
                            />
                            {errors.email && <p className="text-red-500 font-bold text-sm">{errors.email}</p>}
                        </div>
                        <div className="relative">
                            <input
                                placeholder="Password"
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={handleChange}
                                className={`outline-none rounded-md px-2 py-1 text-slate-500 w-full border-2   focus:border-blue-300 `}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 font-bold text-sm">{errors.password}</p>}
                        <button
                            class="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2"
                            id="Register"
                            name="Register"
                            type="button"
                            onClick={handleSubmit}

                        >
                            Register
                        </button>
                        <p class="flex justify-center space-x-1">
                            <span class="text-slate-700"> Have an account? </span>
                            <Link to="/login" class="text-blue-500 hover:underline" href="#">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register