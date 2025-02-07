import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';


// Define the base URL for the API
const API_URL = 'https://shift-management-api-6ade.onrender.com';

export const fetchShifts = createAsyncThunk('fetchShifts', async (_, { rejectWithValue }) => {

    const token = localStorage.getItem('token');
    // console.log(token);

    if (!token) {
        return rejectWithValue("No token found");
    }

    try {


        const response = await axios.get(`${API_URL}/api/Shift`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data);

        console.log(response);

        return response.data; // Devuelve la lista de cuentas
    }
    catch (error) {

        return rejectWithValue(error.response ? error.response.data : error.message);

    }
})

export const createShifts = createAsyncThunk("createShifts", async (shiftData, { rejectWithValue }) => {


    // console.log(shiftData);

    const token = localStorage.getItem("token")

    if (!token) {
        console.log("token not found");
    }

    try {

        console.log(shiftData);

        const response = await axios.post(`${API_URL}/api/Shift`, shiftData, {

            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        console.log("respuesta de crear un turno", response);
        Swal.fire({
            icon: 'success',
            title: 'shift created successfully',
            text: `Your shift has been created successfully.`,
        });

        console.log(response.data);

        return response.data;

    } catch (error) {


        console.log("entro por el catch y este es el error del back para la solicitud de shift", error);

        const errorBack = error.response.data
        console.log("este es el string del error del back para la solicitud de shift", errorBack);



        Swal.fire({
            icon: 'error',
            title: 'Error en la solicitud de shifts',
            text: error.response.data,
        });
        return rejectWithValue(errorBack);
    }
})

export const deleteShift = createAsyncThunk("deleteShift", async (id, { rejectWithValue }) => {

    try {

        const token = localStorage.getItem("token")
        const url = `https://shift-management-api-6ade.onrender.com/api/Shift/${id}`
        console.log("URL generada para updatePrice:", url);

        const response = await axios.delete(url, {

            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        console.log(response);

        Swal.fire({
            icon: 'success',
            title: 'The Shifts was delete sussesfully',
            text: `The Shifts was delete to .`,
        });

        // Retorna el id del turno eliminado como payload
        console.log(id);

        return { id };  // Esto será lo que llega al reducer

        // const responseData = response.data;
        // console.log(responseData);

        // return responseData
    }
    catch (error) {


        Swal.fire({
            icon: 'error',
            title: 'Error to delete services',
            text: error.response.data,
        });
        return rejectWithValue(error.response.data);
    }
})

export const getShiftsByUser = createAsyncThunk("getShiftsByUser", async (_, { rejectWithValue }) => {

    const token = localStorage.getItem("token")

    if (!token) {
        console.log("token not found");

    }

    try {

        const url = `https://shift-management-api-6ade.onrender.com/api/Shift/get-shifts-by-user`
        console.log("URL generada para updatePrice:", url);
        const response = await axios.get("https://shift-management-api-6ade.onrender.com/api/Shift/get-shifts-by-user", {

            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        console.log(response);
        const responseData = response.data
        console.log(responseData);

        return responseData
    }
    catch (error) {


        console.log("entro por el catch y este es el error del back para la solicitud de los shifts del cliente", error);

        const errorBack = error.response.data
        console.log("este es el string del error del back para la solicitud de los shifts del cliente", errorBack);



        Swal.fire({
            icon: 'error',
            title: 'Error en la solicitud para traer los shifts del cliente shifts',
            text: error.response.data,
        });
        return rejectWithValue(errorBack);
    }
})

export const confirmShiftToClient =
    createAsyncThunk("confirmShift",
        async ({ shiftId, clientId, servicesId }, { rejectWithValue }) => {

            const token = localStorage.getItem('token');
            if (!token) {
                console.log("Token no encontrado");

            }

            try {
                // Construir la URL con los params requeridos
                const url = `${API_URL}/api/Shift/confirm?shiftId=${shiftId}&clientId=${clientId}&payshift=true`;

                const response = await axios.post(url,
                    [servicesId],
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                )
                console.log(response);

                Swal.fire({
                    icon: 'success',
                    title: 'Turno confirmado',
                    text: 'Tu turno ha sido confirmado exitosamente.',
                });
                console.log(response.data);

                return response.data;
            }
            catch (error) {

                const errorMsg = error.response ? error.response.data : error.message;
                Swal.fire({
                    icon: 'error',
                    title: 'Error al confirmar turno',
                    text: errorMsg,
                });
                return rejectWithValue(errorMsg);
            }
        })

export const cancelShiftOfUser = createAsyncThunk("cancelShiftOfUser", async (id, { rejectWithValue }) => {

    try {
        const token = localStorage.getItem("token");
        console.log(token);
        const url = `https://shift-management-api-6ade.onrender.com/api/Shift/cancel-shift?shiftId=${id}`
        const response = await axios.put(url,null, {

            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        console.log(response);
        Swal.fire({
            icon: 'success',
            title: 'The cancel was delete sussesfully',
            text: `The cancel was delete to sussesfully.`,
        });
        const responseData = response.data;
        console.log(responseData);

        return responseData
    }
    catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error al cancelar el turno',
            text: error.response.data,
        });
        return rejectWithValue(error.response.data);
    }
})