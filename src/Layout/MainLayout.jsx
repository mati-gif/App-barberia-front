import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import HeaderClient from '../components/HeaderClient';
import HeaderAdmin from '../components/HeaderAdmin';

function MainLayout() {
    const { status, isLoggedIn, error, token , name,role} = useSelector((state) => state.authenticateUser);
    console.log(status, isLoggedIn, error);
    console.log(name);
    console.log(role);
    
    let headerComponent;
    if(isLoggedIn){
        if(role === 'Client'){
            headerComponent = <HeaderClient/>;

        } else{
            headerComponent = <HeaderAdmin/>; 
        }
    } else {
        headerComponent = <Header />;
    }
    return (

        <>
            <div className="flex flex-col min-h-screen bg-body">
                {/* si viene de una forma muestra un header , si no muestra otro */}
                {headerComponent}
                <main className="flex-grow ">
                    <Outlet />
                </main>
                <Footer />
            </div>

        </>
    )
}

export default MainLayout