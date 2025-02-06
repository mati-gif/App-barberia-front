import React, { useEffect } from 'react'
import { useState } from "react"
import { format, addDays, startOfDay } from "date-fns"
import { es } from "date-fns/locale"
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../Redux/actions/authActions'
import { fetchShifts } from '../Redux/actions/shiftActions'
import { useNavigate } from 'react-router-dom'
import { fetchBarberShop } from '../Redux/actions/barberShopActions'
function DateTimeSelection({ onSelectDateTime, onNext, onPrev }) {
    const [selectedShift, setSelectedShift] = useState(null)



    const { shifts } = useSelector((state) => state.shiftReducer)

    console.log(shifts);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { status, isLoggedIn, error, token, name, role, loading, clients } = useSelector((state) => state.authenticateUser);
    console.log(loading);
    console.log(clients);


    const email = useSelector((state) => state.authenticateUser.email) || localStorage.getItem('email');

    useEffect(() => {
        console.log("ENTRO EN ESTE USEEFFECT");

        if (isLoggedIn && token && email && shifts) {
            console.log("entro al if de isLoggedIn y token");

            dispatch(loadUser(email))
                .unwrap().then((user) => {
                    console.log("entro al then de loadUser");
                    dispatch(fetchShifts())
                }).catch((error) => {
                    console.error('Error loading user:', error);
                    navigate('/myShifts');
                });

        } else {
            navigate('/myShifts');
        }
    }, [email, isLoggedIn, navigate, dispatch, token, role]);

    //---------Traer los BarberShops ↓↓↓↓↓↓↓↓ -------------//

    const { barberShops } = useSelector((state) => state.barberShopReducer)
    console.log(barberShops);

    useEffect(() => {

        if (isLoggedIn && token) {
            dispatch(fetchBarberShop()).catch((error) => {
                console.error('Error loading user:', error);
                navigate('/myShifts');
            });

        } else {

            // Redirigir al usuario si no está autenticado
            navigate('/login'); // Cambia '/login' por la ruta de tu página de login
        }
    }, [isLoggedIn, dispatch, navigate])


    const handleShiftSelect = (shift) => {
        setSelectedShift(shift)
        // setSelectedTime(null)
        console.log("Turno seleccionado:", shift);
    
            onSelectDateTime(shift)


    }



    return (
        <>
            <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Elige fecha y hora</h3>
                <div className="mb-4">
                    <button>
                    <div
                        className="flex justify-center flex-wrap items-center gap-4 px-4" >

                        {shifts.map((item) => {

                            const resultado = barberShops.find((id) => id.id === item.barberShopID)


                            return (
                                <div key={item.id}
                                    onClick={() => handleShiftSelect(item)}
                                    className={`cursor-pointer transition-all duration-500 hover:translate-y-2 w-44 h-28 rounded-lg shadow-xl
                                        ${selectedShift === item ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}
                                        `}
                                >

                                    <span className="font-bold">Day: {item.day}</span>
                                    <p className='font-bold'>Time: {item.shiftTime} HS</p>
                                    <p className="line-clamp-3 font-bold">
                                        BarberShop : { resultado ? resultado.premiseName : "sin nombre"}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                    </button>
                </div>
                <div className="mt-6 flex justify-between">
                    <button
                        className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                        onClick={onPrev}
                    >
                        Atrás
                    </button>
                    <button
                        className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                        onClick={onNext}
                        disabled={!selectedShift}
                    >
                        Continuar
                    </button>
                </div>
            </div>
        </>
    )
}

export default DateTimeSelection