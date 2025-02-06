import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadUser } from '../Redux/actions/authActions';
import { use } from 'react';
import { cancelShiftOfUser, fetchShifts, getShiftsByUser } from '../Redux/actions/shiftActions';
import ShiftsCard from '../components/ShiftsCard';



import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Swal from 'sweetalert2';
import { fetchBarberShop } from '../Redux/actions/barberShopActions';

function MyShifts() {

    const navigate = useNavigate(); // Declara useNavigate
    const dispatch = useDispatch();
    // const [email, setEmail] = useState('');

    const { status, isLoggedIn, error, token, name, role } = useSelector((state) => state.authenticateUser);
    const { getAllShiftsOfUser } = useSelector((state) => state.shiftReducer);
    console.log(getAllShiftsOfUser);
    const email = useSelector((state) => state.authenticateUser.email) || localStorage.getItem('email');

    console.log(status, isLoggedIn, error, token, name, role);
    console.log(email);



    // useEffect(() => {
    //     if (isLoggedIn && token && email) {
    //         console.log("entro al if de isLoggedIn y token");

    //         dispatch(loadUser(email))
    //             .unwrap().then((user) => {
    //                 console.log("entro al then de loadUser");
    //                 dispatch(getShiftsByUser())
    //             }).catch((error) => {
    //                 console.error('Error loading user:', error);
    //                 navigate('/login');
    //             });

    //     } else {
    //         navigate('/login');
    //     }
    // }, [email, isLoggedIn, navigate, dispatch, token, role]);




    // useEffect(() => {

    //     // if (isLoggedIn && token ) {

    //     //             dispatch(fetchShifts())


    //     // } else {

    //     //     // Redirigir al usuario si no está autenticado
    //     //     navigate('/login');

    //     // }

    // }),[name];

    const { barberShops } = useSelector((state) => state.barberShopReducer)
    console.log(barberShops);


    useEffect(() => {

        if (isLoggedIn && token) {
            dispatch(fetchBarberShop()).catch((error) => {
                console.error('Error loading user:', error);
                navigate('/created-barberShops');
            });

        } else {

            // Redirigir al usuario si no está autenticado
            navigate('/login'); // Cambia '/login' por la ruta de tu página de login
        }
    }, [isLoggedIn, dispatch, navigate])


    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }


    });


    // Estado para manejar el turno seleccionado al hacer click
    const [selectedShift, setSelectedShift] = useState(null)

    useEffect(() => {
        if (isLoggedIn && token && email) {
            dispatch(loadUser(email))
                .unwrap()
                .then(() => {
                    dispatch(getShiftsByUser())
                })
                .catch((error) => {
                    console.error('Error loading user:', error)
                    navigate('/login')
                })
        } else {
            navigate('/login')
        }
    }, [email, isLoggedIn, navigate, dispatch, token, role])



    const events = (getAllShiftsOfUser || []).map((shift) => {
        const services = Array.isArray(shift.services) ? shift.services : [];

        const totalPrice = services.reduce((total, service) => total + (service.price || 0), 0);

        // Busca la barbería en el arreglo barberShops, si existe
        const foundBarberShop = barberShops?.find((bs) => bs.id === shift.barberShopID);
        const barberShopName = foundBarberShop ? foundBarberShop.premiseName : 'Barbería desconocida';
        console.log(barberShopName);

        console.log(shift.isPayabled);
        
        return {
            id: shift.id,
            title: `${services.length > 0 ? services[0].name : 'Sin servicio'}`,
            start: `${shift.day}T${shift.shiftTime}`,
            extendedProps: {
                clientID: shift.clientID,
                barberShopID: shift.barberShopID,
                barberShopName,
                // confirmed: shift.confirmed,
                price: `${totalPrice}`,
                isPayabled: shift.isPayabled, // Por ejemplo, si es pagable o no
            },
            servicess: shift.services,
            time: shift.shiftTime
        };
    });

    console.log(events);
    
    // Callback cuando se hace click sobre un evento en el calendario
    const handleEventClick = (clickInfo) => {
        // Almacena la información del turno seleccionado en el estado
        const shiftData = {
            id: clickInfo.event.id,
            title: clickInfo.event.title,
            start: clickInfo.event.start,
            // Suponiendo que se agregaron propiedades extendidas con más info
            ...clickInfo.event.extendedProps
        }
        setSelectedShift(shiftData)
    }

    console.log(selectedShift);






    // Función para cancelar el turno seleccionado
    const handleCancelShift = () => {
        if (!selectedShift) return

        // Puedes agregar un window.confirm o un modal de confirmación
        if (window.confirm('¿Estás seguro que deseas cancelar este turno?')) {
            // Despacha la acción para cancelar el turno
            dispatch(cancelShiftOfUser(selectedShift.id))
                .unwrap()
                .then(() => {
                    // Actualiza la lista de turnos
                    dispatch(getShiftsByUser())
                    setSelectedShift(null)
                })
                .catch((err) => {
                    console.error('Error cancelando turno:', err)
                })
        }
    }

    // Mapeamos los turnos a un formato que entienda FullCalendar
    // const events = getAllShiftsOfUser
    //     ? getAllShiftsOfUser.map((shift) => ({
    //         id: shift.id,
    //         title: `${services.length > 0 ? services[0].name : 'Sin servicio'}`,
    //         start: shift.day, // Asegúrate que sea una fecha válida (ISO string)
    //         // Puedes combinar la hora si es necesario: `${shift.day}T${shift.time}`
    //         backgroundColor: '#3b82f6', // Color para los días con turno
    //         extendedProps: {
    //             time: shift.time,
    //             price: shift.price
    //         }
    //     }))
    //     : []

    return (
        <>
            <div className="min-h-screen p-4">
                <h1 className="text-3xl font-bold text-center mb-8">Bienvenido, {name}!</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Calendario */}
                    <div className="w-full lg:w-2/3">
                        <FullCalendar
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            initialView="dayGridMonth"
                            headerToolbar={{
                                left: 'prev,next today',
                                center: 'title',
                                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                            }}
                            events={events}
                            eventClick={handleEventClick}
                            height="auto"
                            // Opcional: para hacer los días con turno destacados
                            dayCellDidMount={(info) => {
                                // Si el día tiene algún evento, se puede marcar el fondo
                                const dateStr = info.date.toISOString().split('T')[0]
                                const hasEvent = events.some((event) => {
                                    // Se asume que event.start es un string o Date
                                    const eventDate = new Date(event.start).toISOString().split('T')[0]
                                    return eventDate === dateStr
                                })
                                if (hasEvent) {
                                    info.el.style.backgroundColor = '#e0f2fe'
                                }
                            }}
                        />
                    </div>

                    {/* Lista de turnos */}
                    <div className="w-full lg:w-1/3">
                        <h2 className="text-2xl font-bold mb-4">Tus Turnos</h2>
                        <div className="space-y-4">
                            {getAllShiftsOfUser && getAllShiftsOfUser.length > 0 ? (
                                getAllShiftsOfUser.map((shift) => {
                                    // Busca la barbería correspondiente
                                    const barberShopForShift = barberShops?.find((bs) => bs.id === shift.barberShopID);
                                    const barberShopName = barberShopForShift ? barberShopForShift.premiseName : 'Barbería desconocida';

                                    return (
                                        <div key={shift.id} className="border p-4 rounded shadow hover:shadow-lg transition">
                                            <p className="font-semibold">
                                                Servicio: {shift.services.map((item) => item.name).join(', ')}
                                            </p>
                                            <p>
                                                <span className="font-medium">Fecha:</span> {shift.day}
                                            </p>
                                            <p>
                                                <span className="font-medium">Hora:</span> {shift.shiftTime}
                                            </p>
                                            <p>
                                                <span className="font-medium">Precio:</span> ${shift.price}
                                            </p>
                                            <p>
                                                <span className="font-medium">Barbería:</span> {barberShopName}
                                            </p>
                                            <p>
                                                <span className="font-medium">¿Pagada?:</span> {shift.isPayabled ? "Si" : "No"}
                                            </p>
                                            <button
                                                onClick={() => {
                                                    setSelectedShift({
                                                        id: shift.id,
                                                        title: shift.services.map((item) => item.name).join(', '),
                                                        start: shift.day,
                                                        time: shift.shiftTime,
                                                        price: shift.price,
                                                        extendedProps: {
                                                            barberShopName,
                                                            isPayabled: shift.isPayabled,
                                                        },
                                                    });
                                                }}
                                                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                            >
                                                Cancelar turno
                                            </button>
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="text-red-600 font-semibold">No tienes turnos asignados.</p>
                            )}
                        </div>
                    </div>

                </div>

                {/* Sección emergente para mostrar detalles del turno (si se seleccionó uno) */}
                {selectedShift && (

                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
                        <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/3">
                            <h3 className="text-xl font-bold mb-4">Detalle del turno</h3>
                            <p>
                                <span className="font-medium">Servicio:</span> {selectedShift.title}
                            </p>
                            <p>
                                <span className="font-medium">Fecha:</span>{' '}
                                {new Date(selectedShift.start).toLocaleDateString()}
                            </p>
                            <p>
                                <span className="font-medium">Hora:</span> {selectedShift.time}
                            </p>
                            <p>
                                <span className="font-medium">Precio:</span> ${selectedShift.price}
                            </p>
                            <p>
                                <span className="font-medium">Barbería:</span> {selectedShift.barberShopName }
                            </p>
                            <p>
                                <span className="font-medium">¿Pagada?</span>{' '}
                                {selectedShift.isPayabled ? 'Sí' : 'No'}
                            </p>
                            <div className="flex justify-end mt-4 gap-4">
                                <button
                                    onClick={() => setSelectedShift(null)}
                                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                >
                                    Cerrar
                                </button>
                                <button
                                    onClick={handleCancelShift}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Cancelar turno
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default MyShifts