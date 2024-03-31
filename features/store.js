import { configureStore } from "@reduxjs/toolkit";
import coinReducer from './crypto/coinSlice'

const store = configureStore({
    reducer: {tradeCoins: coinReducer}
})

export default store;