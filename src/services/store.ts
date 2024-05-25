import { configureStore } from '@reduxjs/toolkit';
import currentUser from './slices/currentuser';


export const store = configureStore({
    reducer: {
        current: currentUser,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
