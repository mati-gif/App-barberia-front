import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchServices } from '../Redux/actions/servicesActions';
import CardServices from '../components/CardServices';

function ViewServicesCreated() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const { premiseName, city, address, status, error, loading } = useSelector((state) => state.servicesReducer)
    // console.log(premiseName);
    // console.log(city);
    // console.log(address);
    // console.log(status);
    // console.log(error);
    // console.log(loading);

    const { services,loading } = useSelector((state) => state.servicesReducer)
    console.log(services);


    const { isLoggedIn, token } = useSelector((state) => state.authenticateUser);
    // console.log(isLoggedIn);
    // console.log(token);

    useEffect(() => {

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


      // Mostrar un indicador de carga mientras se obtienen los datos
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading services...</p>
      </div>
    );
  }
    return (

        <div className='bg-[#e8e8e8]   min-h-[100vh] '>
            <h2 className="text-3xl font-bold text-center mb-8">All Services</h2>
            <div className="flex justify-center items-center min-h-screen flex-wrap">
                {Array.isArray(services) && services.length > 0 ? (
                    services.map((item) => (
                        <div
                            key={item.id}
                            className="w-[25%]  flex m-[10px] flex-wrap h-[40%] justify-center items-center"
                        >
                            <CardServices id={item.id} name={item.name} price={item.price} category={item.category} />
                        </div>
                    ))
                ) : (
                    <p>No services available., Please refresh the page</p>
                )}
            </div>
        </div>

    )
}

export default ViewServicesCreated