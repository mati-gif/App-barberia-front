import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchServices } from '../Redux/actions/servicesActions';

function ViewServicesCreated() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { premiseName, city, address, status, error, loading } = useSelector((state) => state.servicesReducer)
    console.log(premiseName);
    console.log(city);
    console.log(address);
    console.log(status);
    console.log(error);
    console.log(loading);

    const {barberShops} =  useSelector((state) => state.servicesReducer)
    console.log(barberShops);


    const { isLoggedIn, token } = useSelector((state) => state.authenticateUser);
        console.log( isLoggedIn);
        console.log(token);

    useEffect(() =>{

        if (isLoggedIn && token) {
            dispatch(fetchServices()).catch((error) => {
                    console.error('Error loading user:', error);
                    navigate('/created-barberShops');
                });

        } else {

            // Redirigir al usuario si no está autenticado
            navigate('/login'); // Cambia '/login' por la ruta de tu página de login
        }
    }, [isLoggedIn, dispatch, navigate, token])
    return (

        <div className='bg-[#e8e8e8] border-4 border-blue-500  min-h-[100vh] '>
            <h2 className="text-3xl font-bold text-center mb-8">All Services</h2>
            <div className="flex justify-center items-center min-h-screen">
                {



                }
            </div>
        </div>

    )
}

export default ViewServicesCreated