import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCoins } from "./cryptoService";

const initialState = {
    coins : [], 
    isLoading : false,
    isError : false,
    isSuccess : false,
}

const coinSlice = createSlice({
    name: "tradeCoins",
    initialState, 
    reducers : {},
    extraReducers: (builder) => {
      
    builder
    .addCase(getCoins.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getCoins.fulfilled, (state, action) => {
      state.isLoading = false
      state.coins = action.payload
      state.isSuccess = true
    })
    .addCase(getCoins.rejected, (state) => {
      state.isError = true
      state.isSuccess = false
    })
    }
})

export default coinSlice.reducer;

// Coin API fetch//

export const getCoins = createAsyncThunk("TRENDING/COINS", async() => {
  try {
    return await fetchCoins()
  } catch (error) {
    console.log(error)
    
  }
})
