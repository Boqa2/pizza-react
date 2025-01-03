import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './slice';
import { pizzaApi } from './servisec/api';

export const store = configureStore({
  reducer: {
    function: reducer, // Ваш редьюсер
    [pizzaApi.reducerPath]: pizzaApi.reducer, // Добавляем редьюсер для RTK Query API
  },
  // Добавляем middleware для RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzaApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
