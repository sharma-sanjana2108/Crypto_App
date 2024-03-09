import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cryptoService from "./cryptoService";

const userExist = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: userExist ? userExist : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      //*****User Register****//
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false,
          state.isSuccess = true,
          state.user = action.payload;
      })

      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false,
        state.isSuccess = false,
          state.isError = true,
          state.message = action.payload;
      })

      //*****User Login****//
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.message = ""),
          (state.user = action.payload);
      })

      .addCase(loginUser.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.message = action.payload);
      })

      //*****User Logout****//
      .addCase(logoutUser.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = false),
          (state.user = null);
      });
  },
});

export default cryptoSlice.reducer;

//********Register User*******//

export const registerUser = createAsyncThunk(
  "REGISTER/USER",
  async (formData, thunkAPI) => {
    try {
      return await cryptoService.register(formData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//********Logout User******//

export const logoutUser = createAsyncThunk("LOGOUT/USER", async () => {
  localStorage.removeItem("user");
});

//*********Login User*******//

export const loginUser = createAsyncThunk(
  "LOGIN/USER",
  async (formData, thunkAPI) => {
    try {
      return await cryptoService.login(formData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
