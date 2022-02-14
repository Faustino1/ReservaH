//Para seleccionar las fechas
import { createSlice } from '@reduxjs/toolkit'; 
export const startSlice = createSlice({
  name: 'start',
  initialState: {
    value: new Date(2021, 1, 13).getTime(), //getTime retorna cuantos milisegundos 
                                             //han pasado desde media noche de 1979 hasta ahora
  },
  reducers: {
    setStart: (state, action)=>{
        state.value = action.payload;
    },
  },
});

export const { setStart } = startSlice.actions;

export const selectStart = (state) => state.start.value;

export default startSlice.reducer;