import { createReducer } from "@reduxjs/toolkit";
import { createShifts, deleteShift, fetchShifts } from "../actions/shiftActions";



const initialState = {

    shifts: [{
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
        services: [{
            id: "",
            name: "",
            price: 0,
            isActive: true,
            category: "",
        }],
        day: null,
        ShiftTime: " ",


    }],
    shiftCreated:[],
    status: 'idle', // Estado inicial de la solicitud
    loading: false,
    error: null,
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

        // .addCase(fetchShifts.fulfilled, (state, action) => {
        //     console.log(action.payload);
            
        //     const normalizedShifts = action.payload.map(shift => ({
        //         ...shift,
        //         services: shift.services || [] // Asegura que services nunca sea null
        //     }));
        //     return {
        //         ...state,
        //         status: "succeeded",
        //         loading: false,
        //         error: null,
        //         shifts: normalizedShifts,
        //     };
        // })

        .addCase(fetchShifts.fulfilled, (state, action) => {
            console.log("Payload recibido:", action.payload);
            
            // Verifica si action.payload es un array antes de mapear
            if (!Array.isArray(action.payload)) {
                console.error("Error: fetchShifts devolvió un valor no esperado:", action.payload);
                return {
                    ...state,
                    status: "failed",
                    loading: false,
                    error: "El payload recibido no es un array"
                };
            }
        
            // Normaliza los shifts asegurando que `services` nunca sea null
            const normalizedShifts = action.payload.map(shift => ({
                ...shift,
                services: Array.isArray(shift.services) ? shift.services : [] // Normaliza a array si es null
            }));
        
            console.log("Shifts normalizados:", normalizedShifts);
        
            return {
                ...state,
                status: "succeeded",
                loading: false,
                error: null,
                shifts: normalizedShifts,
            };
        })
        

        .addCase(createShifts.pending, (state)=>{
            return {
                ...state,
                loading: true,
                error: null,
            }
        })

        .addCase(createShifts.fulfilled,(state,action)=>{

            console.log("se crea el nuevo turno", action.payload);
            
            return {
                ...state,
                status: "succeeded",
                loading: false,
                // shiftCreated:[...state.shiftCreated,action.payload],
                shifts:[...state.shifts,action.payload]
                
            }

        })

        .addCase(deleteShift.pending,(state) =>{

            return{
                ...state,
                loading: true,
                error: null,
            }
        })

        .addCase(deleteShift.fulfilled,(state,action) =>{
                console.log("aca deberia mostrar que se elimino el shift",action.payload);
                console.log("aca deberia mostrar que se elimino el shift",action.payload.id);

                if (!action.payload?.id) return state; // Previene errores si id es undefined
                console.log(state);

                
                
                
            return {
                ...state,
                status:"succeeded",
                loading: false,
                shifts: state.shifts.filter(shift => String(shift.id) !== String(action.payload.id)),
                // shifts:action.payload,

                
            }
            
            
        })
})


export default shiftReducer;