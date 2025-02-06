import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import HeaderClient from '../components/HeaderClient';
import HeaderAdmin from '../components/HeaderAdmin';
import { loadUser } from '../Redux/actions/authActions';

function MainLayout() {
    const { status, isLoggedIn, error, token, name, role,email } = useSelector((state) => state.authenticateUser);
    console.log(status, isLoggedIn, error);
    console.log(name);
    console.log(role);
    let headerComponent;

//     const dispatch = useDispatch()


// useEffect(()=>{
// dispatch(loadUser(email))
// console.log("entro en el useEffect");

// })
        
        // if (isLoggedIn) {
        //     if (role === 'Client') {
        //         headerComponent = <HeaderClient />;
    
        //     } else if( role === "Admin"){
        //         headerComponent = <HeaderAdmin />;
        //     }
        // }
console.log(headerComponent);



    return (

        <>
            <div className="flex flex-col min-h-screen bg-body">
                {/* si viene de una forma muestra un header , si no muestra otro */}
                {/* {
                    role === "Client" && <HeaderClient />
                }
                {
                    role === "Admin" && <HeaderAdmin />
                } 
                {
                    role === "Client" && <HeaderClient />
                } */}
                <Header />
                {
                    headerComponent
                }
                <main className="flex-grow ">
                    <Outlet />
                </main>
                <Footer />
            </div>

        </>
    )
}

export default MainLayout