import { createReducer } from "@reduxjs/toolkit"
import { createBarberShop } from "../actions/barberShopActions";


const initialState = {
    // address:"",
    // premiseName:"",
    // city:"",
    status: 'idle', // Estado inicial de la solicitud
    loading: false,
    error: null,
    barberShops:[]
}

const barberShopReducer = createReducer(initialState, (builder) =>{

    builder
        .addCase(createBarberShop.pending, (state) => {
            return {
                ...state,
                status: "pending",
                loading: true,
                error: null,
            };
        })

        .addCase(createBarberShop.fulfilled, (state, action) => {
            console.log("Cuenta creada:", action.payload);

            // const newState = {
            //     ...state, // Mantenemos el estado anterior
            //     address: action.payload.address,  // Asignamos el email del usuario
            //     premiseName: action.payload.premiseName,    // Asignamos el nombre del usuario
            //     status: "succeeded",          // La solicitud fue exitosa
            //     loading: false,
            //     city: action.payload.city
            //     // Ya no está cargando
            // };

            // // Guarda el email en el almacenamiento local
            // localStorage.setItem('email', action.payload.email);

            // console.log("Estado actualizado (fulfilled):", newState)

            // return newState
            return {
                ...state,
                status: "succeeded",
                loading: false,
                barberShops:   [...state. barberShops, action.payload],  // Añade la nueva cuenta a la lista

                
            };
        })

        .addCase(createBarberShop.rejected, (state, action) => {
            return {
                ...state,
                status: "failed",
                loading: false,
                error: action.payload || 'Error creating account',
            };
        })
})


export default  barberShopReducer