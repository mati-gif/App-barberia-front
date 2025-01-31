import React, { useEffect, useState } from 'react'
import '../styles/fullCalendar.css'; // Archivo CSS personalizado
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { fetchClientByAdmin, loadUser } from '../Redux/actions/authActions';
import { deleteShift, fetchShifts } from '../Redux/actions/shiftActions';
import { fetchBarberShop } from '../Redux/actions/barberShopActions';
import Swal from 'sweetalert2';
// import { INITIAL_EVENTS, createEventId } from './event-utils'
function FullCalendarForGetShifts({ shiftss }) {
    const navigate = useNavigate(); // Declara useNavigate
    const dispatch = useDispatch();
    // const [email, setEmail] = useState('');

    const { status, isLoggedIn, error, token, name, role, loading, clients } = useSelector((state) => state.authenticateUser);
    const { shifts } = useSelector((state) => state.shiftReducer);
    console.log(shifts);
    console.log(loading);
    console.log(clients);


    const email = useSelector((state) => state.authenticateUser.email) || localStorage.getItem('email');

    // console.log(status, isLoggedIn, error, token, name);
    // console.log(email);
    // console.log(role);

    const { barberShops } = useSelector((state) => state.barberShopReducer)
    // console.log(barberShops);


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


    //--------------------------------↓↓↓↓↓↓↓↓↓----------------------------------------//

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
                    navigate('/login');
                });

        } else {
            navigate('/login');
        }
    }, [email, isLoggedIn, navigate, dispatch, token, role]);


    console.log("Shifts en el componente antes de mapear:", shifts);



    
    const events = shifts.map((shift) => {
        const services = Array.isArray(shift.services) ? shift.services : [];
        
        const totalPrice = services.reduce((total, service) => total + (service.price || 0), 0);
    
        return {
            id: shift.id,
            title: `${services.length > 0 ? services[0].name : 'Sin servicio'} - $${totalPrice}`,
            start: `${shift.day}T${shift.shiftTime}`,
            extendedProps: {
                clientID: shift.clientID,
                barberShopID: shift.barberShopID,
                confirmed: shift.confirmed,
            },
        };
    });
    
    

        console.log(shifts);
        

    const [weekendsVisible, setWeekendsVisible] = useState(true)
    const [currentEvents, setCurrentEvents] = useState([])

    let eventGuid = 0
    let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

    //     if (loading) {
    //   return <div>Loading...</div>;
    // }

    function createEventId() {
        return String(eventGuid++)
    }

    // const INITIAL_EVENTS = [
    //     {
    //         id: createEventId(),
    //         title: 'All-day event',
    //         start: todayStr
    //     },
    //     {
    //         id: createEventId(),
    //         title: 'Timed event',
    //         start: todayStr + 'T12:00:00'
    //     }
    // ]
    function handleWeekendsToggle() {
        setWeekendsVisible(!weekendsVisible)
    }

    // function handleDateSelect(selectInfo) {
    //     let title = prompt('Please enter a new title for your event')
    //     let calendarApi = selectInfo.view.calendar

    //     calendarApi.unselect() // clear date selection

    //     if (title) {
    //         calendarApi.addEvent({
    //             id: createEventId(),
    //             title,
    //             start: selectInfo.startStr,
    //             end: selectInfo.endStr,
    //             allDay: selectInfo.allDay
    //         })
    //     }
    // }

    function handleEventClick(eventInfo) {
        const eventId = eventInfo.event.id;
        console.log(eventId);

        dispatch(deleteShift(eventId))
            .unwrap()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'The shift was deleted successfully',
                    text: `The shift was deleted successfully.`,
                });

                // 🚀 Vuelve a cargar los shifts desde el backend
                dispatch(fetchShifts());

                console.log("shifts después de dispatch:", shifts);
            })
            .catch((error) => {
                console.error("Error deleting shift:", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error deleting shift',
                    text: error.message || "An error occurred while deleting the shift.",
                });
            });
    }





    console.log(shifts);

    function handleEvents(eventss) {

        // Verifica si los eventos actuales son diferentes antes de actualizar el estado
        setCurrentEvents((prevEvents) => {
            // Convierte los eventos a cadenas para comparar
            const prevIds = prevEvents.map((event) => event.id).join(',');
            const newIds = events.map((event) => event.id).join(',');

            if (JSON.stringify(prevIds) === JSON.stringify(newIds)) {
                return prevEvents; // No actualices si no hay cambios
            }

            return events;
        });
    }


    return (
        <div className='demo-app'>
            <Sidebar
                weekendsVisible={weekendsVisible}
                handleWeekendsToggle={handleWeekendsToggle}
                currentEvents={currentEvents}
            />
            <div className='demo-app-main'>
                <FullCalendar
                    dayCellClassNames={(arg) => {
                        const today = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD
                        if (arg.date.toISOString().split('T')[0] === today) {
                            return 'custom-today'; // Clase personalizada
                        }
                        return '';
                    }}
                    // eventColor="#007BFF"
                    // eventTextColor="#FFFFFF"
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}

                    initialView='dayGridMonth'
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={weekendsVisible}

                    // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                    events={events}
                    // select={handleDateSelect}
                    eventContent={renderEventContent} // custom render function
                    eventClick={(eventInfo) => { handleEventClick(eventInfo) }}
                    eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                /* you can update a remote database when these fire:
                eventAdd={function(){}}
                eventChange={function(){}}
                eventRemove={function(){}}
                */
                />
            </div>
        </div>
    )













    function renderEventContent(eventInfo) {
        const { clientID, barberShopID, confirmed } = eventInfo.event.extendedProps;

        let allBarberShops = barberShops.filter((id) => id.id === barberShopID)
        let premiseName = allBarberShops.find((item) => {
            return item
        })
        // console.log(allBarberShops);
        // console.log(premiseName.premiseName);

        let allClients = clients.filter((id) => id.id === clientID + 1)
        // console.log(clients.name);

        let fullName = allClients.find((item) => {

            return item
        })

        // console.log(premiseName?.premiseName || "No encontrado");
        // console.log(fullName ? `${fullName.firstName} ${fullName.lastName}` : "Cliente no encontrado");


        // console.log(allClients);

        return (
            <>
                <div>
                    {/* <b>{eventInfo.timeText}</b> */}
                    <b>{new Date(eventInfo.event.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</b>
                    <i>{eventInfo.event.title}</i>
                    {<div>Cliente: {clientID ? `${fullName.firstName + " " + fullName.lastName}` : "Not client confirm"}</div>}
                    <div>Email:{clientID ? `${fullName.email}` : "Not email found"}</div>
                    {barberShopID && <div>Barbería: {premiseName.premiseName}</div>}
                    <div>Estado: {confirmed ? 'Confirmado' : 'No confirmado'}</div>
                </div>
            </>
        )
    }

    function Sidebar({ weekendsVisible, handleWeekendsToggle, currentEvents }) {
        return (
            <div className='demo-app-sidebar'>
                <div className='demo-app-sidebar-section'>
                    <h2>Instructions</h2>
                    <ul>
                        <li>Select dates and you will be prompted to create a new event</li>
                        <li>Drag, drop, and resize events</li>
                        <li>Click an event to delete it</li>
                    </ul>
                </div>
                <div className='demo-app-sidebar-section'>
                    <label>
                        <input
                            type='checkbox'
                            checked={weekendsVisible}
                            onChange={handleWeekendsToggle}
                        ></input>
                        toggle weekends
                    </label>
                </div>
                <div className='demo-app-sidebar-section'>
                    <h2>All Events ({currentEvents.length})</h2>
                    <ul>
                        {currentEvents.map((event) => (
                            <SidebarEvent key={event.id} event={event} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

    function SidebarEvent({ event }) {
        return (
            <li key={event.id}>
                <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
                <i>{event.title}</i>
            </li>
        )
    }
}

export default FullCalendarForGetShifts