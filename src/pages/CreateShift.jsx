import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loadUser } from '../Redux/actions/authActions';
import { fetchShifts } from '../Redux/actions/shiftActions';

function CreateShift() {
    const navigate = useNavigate(); // Declara useNavigate
    const dispatch = useDispatch();
    // const [email, setEmail] = useState('');

    const { status, isLoggedIn, error, token, name,role } = useSelector((state) => state.authenticateUser);
    const { shifts } = useSelector((state) => state.shiftReducer);
    console.log(shifts);
    const email = useSelector((state) => state.authenticateUser.email) || localStorage.getItem('email');

    console.log(status, isLoggedIn, error, token, name);
    console.log(email);
    console.log(role);

    // useEffect(()=>{
    //     if(role == null || role == undefined || role === "Client"){
    //         navigate("/myShifts")
    //     }
    // },[role])

    useEffect(() => {
        if (isLoggedIn && token && email) {
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
    
    
    
    
        // useEffect(() => {
    
        //     // if (isLoggedIn && token ) {
    
        //     //             dispatch(fetchShifts())
    
    
        //     // } else {
    
        //     //     // Redirigir al usuario si no está autenticado
        //     //     navigate('/login');
    
        //     // }
    
        // }),[name];
    
    
        useEffect(() => {
            if (!isLoggedIn) {
                navigate('/login');
            }
    
    
        });
  return (

    <>
    <div className='border-4 border-yellow-500  min-h-[100vh] '>
        <div className='border-2 border-[#e78] h-[100px] flex justify-end items-start'>
                <Link to="/created-shifts">
                <button className='p-2 bg-[#48e] rounded-lg mt-[5px] border-2 border-[#48e] text-white hover:bg-[#49e]'>
                    Shifts Created
                </button>
                </Link>
            </div>
        <h1 className="text-3xl font-bold text-center mb-8">Welcome, {name}!</h1>

        {/* <div className="flex justify-center flex-wrap gap-10">
            {shifts && shifts.length > 0 ? (
                shifts.map((shift) => (

                 <ShiftsCard day={shift.day} time={shift.time} service={shift.service} price={shift.price} />   

                ))
            ) : (
                <p className="text-lg font-bold text-center text-red-600">Do not have Shifts yet.</p>
            )}
        </div> */}
    </div>
</>
  )
}

export default CreateShift