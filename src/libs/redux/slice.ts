import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PizzaCard } from '../types/type';


export interface FunctionState {
  addToLocal: PizzaCard[]
}

const initialState: FunctionState = {
  addToLocal: [],
};

const functionSlice = createSlice({
  name: 'function',
  initialState,
  reducers: {
    addToLocalStorage: (state, action: PayloadAction<PizzaCard>) => {
      // Добавляем элемент в состояние
      state.addToLocal.push(action.payload);
      // Сохраняем обновленный массив в localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.addToLocal));
    },
    getLocalStorage: (state) => {
      const storedItems = localStorage.getItem('items');
      if (storedItems) {
        state.addToLocal = JSON.parse(storedItems);
      }
    },
  },
});

export const { addToLocalStorage, getLocalStorage  } = functionSlice.actions;

export const reducer = functionSlice.reducer;
