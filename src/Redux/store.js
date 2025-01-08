import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import shiftReducer from './reducers/shiftReducer';
import barberShopReducer from './reducers/barberShopReducer';

const store = configureStore({
    reducer: {
        authenticateUser: authReducer,
        shiftReducer: shiftReducer,
        barberShopReducer:barberShopReducer,
    },
});

export default store;