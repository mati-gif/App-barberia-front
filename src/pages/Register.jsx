import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png";
import { X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

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

  return (
    <>
                <div className='bg-[url(https://studio-dbrickell.com/wp-content/uploads/2022/12/shutterstock_1128837791-scaled.jpg)] bg-cover bg-center bg-no-repeat  border-4 border-red-500  h-screen flex flex-col justify-center items-center'>
                <div
                    class=" min-w-[30%] rounded-lg shadow-xl h-[75%] p-6 bg-white relative overflow-hidden"
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
                                class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                                placeholder="First Name"
                                id="FirstName"
                                name="FirstName"
                                type="text"
                            />
                        </div>
                        <div>
                            <input
                                class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                                placeholder="Last Name"
                                id="LastName"
                                name="LastName"
                                type="text"
                            />
                        </div>
                        <div>
                            <input
                                class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                                placeholder="Email"
                                id="Email"
                                name="Email"
                                type="email"
                            />
                        </div>
                        <div>
                            <input
                                class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                                placeholder="Password"
                                id="password"
                                name="password"
                                type="password"
                            />
                        </div>

                        <button
                            class="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2"
                            id="Register"
                            name="Register"
                            type="button"
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