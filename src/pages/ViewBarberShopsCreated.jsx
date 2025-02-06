import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBarberShop } from '../Redux/actions/barberShopActions';
import { useNavigate } from 'react-router-dom';
import CardBarberShop from '../components/CardBarberShop';

function ViewBarberShopsCreated() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { premiseName, city, address, status, error, loading } = useSelector((state) => state.barberShopReducer)
    console.log(premiseName);
    console.log(city);
    console.log(address);
    console.log(status);
    console.log(error);
    console.log(loading);

    const {barberShops} =  useSelector((state) => state.barberShopReducer)
    console.log(barberShops);


    const { isLoggedIn, token } = useSelector((state) => state.authenticateUser);
        console.log( isLoggedIn);
        console.log(token);

    useEffect(() =>{

        if (isLoggedIn && token) {
            dispatch(fetchBarberShop()).catch((error) => {
                    console.error('Error loading user:', error);
                    navigate('/created-barberShops');
                });

        } else {

            // Redirigir al usuario si no está autenticado
            navigate('/login'); // Cambia '/login' por la ruta de tu página de login
        }
    }, [isLoggedIn, dispatch, navigate, token])

    return (
        <div className='bg-[#e8e8e8]  min-h-[100vh] '>
            <h2 className="text-3xl font-bold text-center mb-8">All BarberShops</h2>
            <div className="flex justify-center items-center min-h-screen flex-wrap">
            {
                
                barberShops.map((item)=>(
                    <>
                    <div className='w-[45%]  flex m-[10px] h-[40%] justify-center items-center '>
                    <CardBarberShop key={item.id} premiseName={item.premiseName} address={item.address} city={item.city}/>
                    </div>
                    </>
                ))
            
            }
            </div>
        </div>
    )
}

export default ViewBarberShopsCreated