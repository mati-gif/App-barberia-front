
import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser, loadUser } from '../Redux/actions/authActions';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importa los iconos


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { status, isLoggedIn, error, token, name } = useSelector((state) => state.authenticateUser);
    console.log(status, isLoggedIn, error);
    console.log(name);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));

        if (name === 'email') setEmail(value.replace(/\s+/g, ''));    // Eliminar espacios en blanco en email
        if (name === 'password') setPassword(value.replace(/\s+/g, '')); // Eliminar espacios en blanco en password
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Lógica para manejar el envío del formulario
        try {

            console.log("entro al try");

            const resultAction = await dispatch(authenticateUser({ email, password })).unwrap();
            console.log("Resultado de login:", resultAction);


            // Si la autenticación es exitosa, cargamos el usuario
            await dispatch(loadUser(email)).unwrap();
            console.log(email);

            navigate('/myShifts');
        }

        catch (error) {
            console.log("entro en el catch del back en el loadUser", error);


            const newErrors = {};

            console.log("error en la variable newError", newErrors);

        }

    };

    return (

        <div
            className='bg-[url(https://studio-dbrickell.com/wp-content/uploads/2022/12/shutterstock_1128837791-scaled.jpg)] bg-cover bg-center bg-no-repeat  border-4 border-red-500  h-screen flex flex-col justify-center items-center'>
            <div
                className=" min-w-[25%] rounded-lg shadow-xl min-h-[60%] p-6 bg-white relative overflow-hidden"
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
                <form className="w-full mt-4 space-y-3">
                    <div>
                        <input
                            className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                            placeholder="Email"
                            id="Email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='relative'>
                        <input
                            className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                            placeholder="Password"
                            id="Password"
                            name="password"
                            type={passwordVisible ? 'text' : 'password'}
                            value={password}
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
                            onClick={() => setPasswordVisible(prev => !prev)} // Alternar visibilidad
                        >
                            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>
                    {/* <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    className="mr-2 w-4 h-4"
                                    id="remember"
                                    name="remember"
                                    type="checkbox"
                                />
                                <span className="text-slate-500">Remember me </span>
                            </div>
                            <a className="text-blue-500 font-medium hover:underline" href="#"
                            >Forgot Password</a
                            >
                        </div> */}
                    <button
                        className="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2"
                        id="login"
                        name="login"
                        type="button"
                        onClick={handleSubmit}
                    >
                        login
                    </button>
                    <p className="flex justify-center space-x-1">
                        <span className="text-slate-700"> Have not an account? </span>
                        <Link to="/register" className="text-blue-500 hover:underline" href="#">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>


    );
}
export default Login;