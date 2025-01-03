import { registerUser } from "../actions/authActions";

const initialState = {
    isLoggedIn: !!localStorage.getItem('token'),
    token: localStorage.getItem('token') || null,
    email: null,
    name: [],
    status: 'idle', // Estado inicial de la solicitud
    loading: false,
    error: null,
    rol: {},
    isActive: false,
}

const authReducer = createReducer(initialState, (builder) => {
    builder

        .addCase(registerUser.pending, (state) => {

            return {
                ...state,
                loading: true,
                error: null,

            }

        })

        .addCase(registerUser.fulfilled, (state, action) => {

            return {
                ...state,
                isLoggedIn: false, // Aún no está logueado después del registro
                loading: false,
                error: null,
            };
        })

        .addCase(registerUser.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload || 'Error during registration',
            };
        })

        //Para autenticar al usuario (Es decir cuando se loguea )
        .addCase(authenticateUser.fulfilled, (state, action) => {
            console.log("Autenticación exitosa, token:", action.payload);
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload,
                status: "succeeded",
                loading: false,
            };
        })

        .addCase(authenticateUser.rejected, (state, action) => {
            console.log(action.payload)

            return {
                ...state,
                status: "failed",
                loading: false,

                error: action.error?.message || 'Error during authentication'
            };

        })

        // Para traer al usuario autenticado (current client) Estado cuando la solicitud es exitosa (fulfilled)
        .addCase(loadUser.fulfilled, (state, action) => {
            console.log("Usuario cargado:", action.payload);
            const newState = {
                ...state, // Mantenemos el estado anterior
                isLoggedIn: true,
                token: action.payload.token,  // Asignamos el nuevo token
                email: action.payload.email,  // Asignamos el email del usuario
                name: action.payload.name,    // Asignamos el nombre del usuario
                status: "succeeded",          // La solicitud fue exitosa
                loading: false,
                rol: action.payload.rol,
                isActive: action.payload.isActive
                // Ya no está cargando
            };

            console.log("Estado actualizado (fulfilled):", newState)

            return newState
        })

        // Estado de solicitud de cierre de sesión pendiente (pending)
        .addCase(logoutUser.pending, (state) => {
            return {
                ...state,
                status: "pending",
                loading: true,
                error: null,
            };
        })

        // Estado cuando el cierre de sesión es exitoso (fulfilled)
        .addCase(logoutUser.fulfilled, (state) => {
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                email: null,
                name: null,
                rol: {},
                status: "succeeded",
                loading: false,
            };
        })
        // Estado cuando el cierre de sesión falla (rejected)
        .addCase(logoutUser.rejected, (state, action) => {
            return {
                ...state,
                status: "failed",
                loading: false,
                error: action.payload || 'Error logging out',
            };
        });
})