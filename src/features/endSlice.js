//Va a manejar la fecha final
import { createSlice } from '@reduxjs/toolkit'; 
export const endSlice = createSlice({
  name: 'end',
  initialState: {
    value: new Date(2021, 1, 13).getTime(), //getTime retorna cuantos milisegundos 
                                             //han pasado desde media noche de 1979 hasta ahora
  },
  reducers: {
    setEnd: (state, action)=>{
        state.value = action.payload;
    },
  },
});

export const { setEnd } = endSlice.actions;

export const selectEnd = (state) => state.end.value;

export default endSlice.reducer;