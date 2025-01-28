import React, { useEffect, useState } from 'react'
import '../styles/fullCalendar.css'; // Archivo CSS personalizado
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {  fetchClientByAdmin, loadUser } from '../Redux/actions/authActions';
import { fetchShifts } from '../Redux/actions/shiftActions';
import { fetchBarberShop } from '../Redux/actions/barberShopActions';
// import { INITIAL_EVENTS, createEventId } from './event-utils'
function FullCalendarForGetShifts({ shiftss }) {
    const navigate = useNavigate(); // Declara useNavigate
    const dispatch = useDispatch();
    // const [email, setEmail] = useState('');

    const { status, isLoggedIn, error, token, name, role,loading,clients } = useSelector((state) => state.authenticateUser);
    const { shifts } = useSelector((state) => state.shiftReducer);
    console.log(shifts);
    console.log(loading);
    console.log(clients);
    

    const email = useSelector((state) => state.authenticateUser.email) || localStorage.getItem('email');

    console.log(status, isLoggedIn, error, token, name);
    console.log(email);
    console.log(role);

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

    // Transformar los turnos en eventos para el calendario
    // const events = shifts.map((shift) => ({
    //     id: shift.id,
    //     title: `${shift.services[0].name} - $${shift.price}`,
    //     start: `${shift.day}T${shift.shiftTime}`,
    // }));


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





    const events = shifts
        // .filter((shift) => shift.confirmed) // Solo shifts confirmados
        .map((shift) => ({
            id: shift.id,
            title: `${shift.services.length > 0 ? shift.services[0].name : 'Sin servicio'} - $${shift.price}`,
            start: `${shift.day}T${shift.shiftTime}`, // Formato ISO
            extendedProps: {
                clientID: shift.clientID,
                barberShopID: shift.barberShopID,
                confirmed: shift.confirmed,
            },
        }));

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

    function handleDateSelect(selectInfo) {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar

        calendarApi.unselect() // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            })
        }
    }

    function handleEventClick(clickInfo) {
        if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove()
        }
    }

    function handleEvents(eventss) {

        // Verifica si los eventos actuales son diferentes antes de actualizar el estado
        setCurrentEvents((prevEvents) => {
            // Convierte los eventos a cadenas para comparar
            const prevIds = prevEvents.map((event) => event.id).join(',');
            const newIds = events.map((event) => event.id).join(',');

            if (prevIds === newIds) {
                return prevEvents; // No actualices si no hay cambios
            }

            return events;
        });
    }

    // useEffect(() => {
    //     console.log("ENTRO POR EL USEEFFECT PERRI");


    //     if (status == 'succeeded' && loading) {
    //         console.log("ENTRO POR EL USEEFFECT PERRI");
    //     // dispatch(fetchClientByAdmin());
            
    //     }
    //   }, [dispatch, loading, status]);


    return (
        // <div>
        //     <FullCalendar
        //         plugins={[dayGridPlugin]}
        //         initialView="dayGridMonth"
        //         // events={events} // Pasar los eventos al calendario
        //         headerToolbar={{
        //             left: 'prev,next today',
        //             center: 'title',
        //             right: 'dayGridMonth',
        //         }}
        //         eventColor="#007BFF" // Color de los eventos
        //         eventTextColor="#FFFFFF" // Texto blanco para mejor contraste
        //     />

        // </div>

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
                    eventColor="#007BFF"
                    eventTextColor="#FFFFFF"
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
                    select={handleDateSelect}
                    eventContent={renderEventContent} // custom render function
                    eventClick={handleEventClick}
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
        console.log(allBarberShops);
        console.log(premiseName.premiseName);

        let allClients = clients.filter((id) => id.id    === clientID + 1 )
        // console.log(clients.name);
        
        let fullName = allClients.find((item) => {

            return item
        })

        console.log(`${fullName.firstName + " " + fullName.lastName}`);
        
        console.log(allClients);
        
        return (
            <>
                <div>
                    {/* <b>{eventInfo.timeText}</b> */}
                    <b>{new Date(eventInfo.event.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</b>
                    <i>{eventInfo.event.title}</i>
                    <div>Cliente: {clientID ?  `${fullName.firstName + " " + fullName.lastName}` : "Not client confirm"}</div>
                    <div>Email:{ clientID ? `${fullName.email}` : "Not email found"}</div>
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