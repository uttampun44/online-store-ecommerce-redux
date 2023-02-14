import { createSlice } from '@reduxjs/toolkit'

const initialState = [];



const Counterslice = createSlice({
    name: 'cart',
    initialState,
    
    reducers:{
    
        addcart(state, action){
             state.push(action.payload)
             console.log(action.payload)
        },
        removecart(state, action){
               state = state.filter(item > item.id !== action.payload)
        }
    }
})
console.log(Counterslice.actions)
export default Counterslice.reducer
export const {addcart, removecart} = Counterslice.actions
