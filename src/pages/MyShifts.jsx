import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadUser } from '../Redux/actions/authActions';
import { use } from 'react';
import { fetchShifts } from '../Redux/actions/shiftActions';

function MyShifts() {

    const navigate = useNavigate(); // Declara useNavigate
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    const { status, isLoggedIn, error, token, name } = useSelector((state) => state.authenticateUser);
    // const { shifts } = useSelector((state) => state.shiftReducer);
    // console.log(shifts);
    
    console.log(status, isLoggedIn, error, token, name);


    // useEffect(() => {


    //     if (isLoggedIn && token || name == null) {

    //         dispatch(loadUser(email))
    //             .unwrap().then((user) => {
    //                 dispatch(fetchShifts())
    //             }).catch((error) => {
    //                 console.error('Error loading user:', error);
    //                 navigate('/login');
    //             });

    //     } else {

    //         // Redirigir al usuario si no está autenticado
    //         navigate('/login');

    //     }

    // });



    
    useEffect(() => {

        if (isLoggedIn && token || name == null) {

                    // dispatch(fetchShifts())


        } else {

            // Redirigir al usuario si no está autenticado
            navigate('/login');

        }

    });


    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }


    });

    return (
        <>
            <div className='border-4 border-red-500  min-h-[100vh] '>
                <h1 className="text-3xl font-bold text-center mb-8">Welcome, {name}!</h1>
                <div className="flex justify-center flex-wrap gap-10">
                    {/* {accounts && accounts.length > 0 ? (
                        accounts.map((account) => (
                            <Link key={account.id} to={`/accounts/${account.id}`}>

                            </Link>
                        ))
                    ) : (
                        <p className="text-lg font-bold text-center text-red-600">No accounts found.</p>
                    )} */}
                </div>
            </div>
        </>
    )
}

export default MyShifts