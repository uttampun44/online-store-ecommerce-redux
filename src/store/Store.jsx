
import { configureStore } from "@reduxjs/toolkit";
import Counterslice from "./Counterslice";

// store configuration

export default configureStore({
   reducer:{
    cart: Counterslice
   }
})
