import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const Counterslice = createSlice({
    name: 'cart',
    initialState,
    
    reducers:{
        addtoCart: (state, action) =>{
             state.push(action.payload)
        },
        removefromCart : (state, action) =>{
               state = state.filter(item > item.id !== action.payload)
        }
    }
})

export const [addtoCart, removefromCart] = Counterslice.actions();
export default Counterslice.reducer;
