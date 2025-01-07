import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Ingridients, PizzaCard } from '../../types/type';
import supabase from '../../utils/supabase';
const url = import.meta.env.VITE_SUPABASE_URL;

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }), // Укажите базовый URL, если требуется
  endpoints: (builder) => ({
    getPizza: builder.query<PizzaCard[], { str: string; type:string, value?: string }>({
      queryFn: async ({ str, value, type }) => {
        try {
          const query = supabase.from(str).select("*").eq(type, value);
          

          const { data, error } = await query;

          if (error) {
            return {
              error: {
                status: parseInt(error.code) || 500, // Преобразуем код ошибки в число
                statusText: error.message || 'Unknown Error',
                data: error.details || 'An error occurred while fetching pizzas',
              },
            };
          }

          return { data: data };
        } catch (err) {
          return {
            error: {
              status: 500,
              statusText: 'Internal Server Error',
              data: String(err),
            },
          };
        }
      },
    }),
    getDobavki: builder.query<Ingridients[], void>({
      queryFn: async () => {
        try {
          const { data, error } = await supabase.from('forOrders').select("*");

          if (error) {
            return {
              error: {
                status: parseInt(error.code) || 500, // Преобразуем код ошибки в число
                statusText: error.message || 'Unknown Error',
                data: error.details || 'An error occurred while fetching pizzas',
              },
            };
          }

          return { data: data };
        } catch (err) {
          return {
            error: {
              status: 500,
              statusText: 'Internal Server Error',
              data: String(err),
            },
          };
        }
      },
    }),
  }),
});

export const { useGetPizzaQuery, useGetDobavkiQuery } = pizzaApi;
