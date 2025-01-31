import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchClientByAdmin, loadUser } from '../Redux/actions/authActions';
import { fetchShifts } from '../Redux/actions/shiftActions';
import FullCalendarForGetShifts from '../components/FullCalendarForGetShifts';

function ViewShiftsCreated() {
    const navigate = useNavigate(); // Declara useNavigate
    const dispatch = useDispatch();
    // const [email, setEmail] = useState('');

    const { status, isLoggedIn, error, token, name,role, loading,clients } = useSelector((state) => state.authenticateUser);
    const { shifts } = useSelector((state) => state.shiftReducer);
    
    console.log(shifts);
    console.log( loading);
    console.log(clients);
    
    const email = useSelector((state) => state.authenticateUser.email) || localStorage.getItem('email');

    // console.log(status, isLoggedIn, error, token, name);
    // console.log(email);
    // console.log(role);

        useEffect(() => {
            console.log("HOLAAA ENTRO EN EL USEEFECT");
            
            if (isLoggedIn && token && email && shifts  ) {
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
        }, [email, isLoggedIn, navigate, dispatch, token,role]);



        useEffect(() => {
            console.log("HOLAAA ENTRO EN EL USEEFECT");
            
            if (isLoggedIn && token  && clients  ) {
                console.log("entro al if de isLoggedIn y token");
                dispatch(fetchClientByAdmin())
                // dispatch(loadUser(email))
                    .unwrap().then((user) => {
                        console.log("entro al then de loadUser");
                    }).catch((error) => {
                        console.error('Error loading user:', error);
                        navigate('/login');
                    });
        
            } else {
                navigate('/login');
            }
        }, [email, isLoggedIn, navigate, dispatch, token,role]);
  return (
    <div className='bg-[#fff] border-4 border-blue-500  min-h-[100vh] '>
    <h2 className="text-3xl font-bold text-center mb-8">All Shifts from all Clients</h2>
    <div className="flex justify-center items-center min-h-screen flex-wrap">

    <FullCalendarForGetShifts  shifts={shifts || []} />
    </div>
</div>
  )
}

export default ViewShiftsCreated