
import { configureStore } from "@reduxjs/toolkit";
import Counterslice from "./Counterslice";

// store configuration

const Store =  configureStore({
   reducer:{
    cart: Counterslice
   }
})

export default Store;