import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';

// Define the base URL for the API
const API_URL = 'https://shift-management-api-6ade.onrender.com';

// Register user action
export const registerUser = createAsyncThunk('registerUser', async (userData, { rejectWithValue }) => {
    try {
        console.log(userData);
        
        const response = await axios.post('https://shift-management-api-6ade.onrender.com/create-user', userData);
        console.log("Respuesta de registro:", response);
        console.log(response.data);
        
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response);
    }
}
);

// Authenticate user action( no tengo un endPoint que traiga al cliente autenticado)
export const authenticateUser = createAsyncThunk('authenticateUser', async (user, { rejectWithValue }) => {
    try {
        console.log(user);
        
        const response = await axios.post('/api/Authentication/authenticate', user);
        console.log("Respuesta de login:", response);
        console.log(user);

        const token = response.data;
        console.log("Token recibido:", token);

        localStorage.setItem('token', response.data);
        console.log("Token almacenado en localStorage:", localStorage.getItem('token'));  // Verifica que el token se almacena correctamente

        // Mostrar alerta de éxito directamente en la acción
        Swal.fire({
            title: 'Login Successful!',
            text: 'You have been logged in successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
        });

        // navigate("/")
        return token;

    } catch (error) {

        console.log("entro por el catch y este es el error del back", error);

        const errorBack = error.response.data
        console.log("este es el string del error del back", errorBack);
        return rejectWithValue(errorBack);
    }
}
);


// Load user action
export const loadUser = createAsyncThunk("loadUser", async (email, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem('token');

        if (token) {
            console.log("Token enviado en loadUser:", token);

            const url = `https://shift-management-api-6ade.onrender.com/email?email=${encodeURIComponent(email)}`;
            console.log("URL generada para loadUser:", url);
            const response = await axios.get( url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("Respuesta de loadUser:", response);
            const responseData = response.data;
            console.log("Datos del usuario:", responseData);
            // Creamos el objeto usuario a partir de la respuesta de la API
            let usuario = {
                email: responseData.email,
                name: `${responseData.firstName} ${responseData.lastName}`,
                token: token,  // Aquí el token viene del argumento `token`
                isLoggedIn: true,
                role:responseData.role,
                isActive:responseData.isActive,
                password: responseData.password,

            };
            console.log("Usuario cargado:", usuario);

            // Retornamos el objeto usuario para almacenarlo en el estado global
            return usuario;
        }
    } catch (error) {
        console.error("Error loading user:", error);

        Swal.fire({
            title: 'Error Loading User',
            text: error.response ? error.response.data.message : 'Error loading user',
            icon: 'error',
            confirmButtonText: 'Ok'
        });

          // Si el token es inválido o expirado, eliminamos el token de localStorage
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');  // Eliminamos el token
        }
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
}
);

// Logout user action
export const logoutUser = createAsyncThunk("logoutUser", async (_, { rejectWithValue }) => {
        try {
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            return ;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);