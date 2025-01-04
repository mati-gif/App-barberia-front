import { createReducer } from "@reduxjs/toolkit";
import { fetchShifts } from "../actions/shiftActions";



const initialState = {

    shifts: {
        user: {
            email: '',
            name: '',
            token: '',
            isLoggedIn: false,
            rol: '',
            isActive: false,
            password: '',
        },
        price: 0,
        isConfirme: false,
        isPayabled: false,
        clientId: null,
        barberId: null,
        barberShop: " ",
        barberShopId: null,
        services: {
            id: "",
            name: "",
            price: 0,
            isActive: true,
            category: "",
        },
        day: null,
        ShiftTime: " ",
        status: 'idle', // Estado inicial de la solicitud
        loading: false,
        error: null,

    }
}

const shiftReducer = createReducer(initialState, (builder) => {

    builder

        .addCase(fetchShifts.pending, (state) => {
            return {
                ...state,
                loading: true,
                error: null,
            }
        })

        .addCase(fetchShifts.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                error: null,
                shifts: action.payload,
            };
        })
})


export default shiftReducer;