import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = process.env.REACT_APP_base_url;

export const getOffres = createAsyncThunk("offres/getOffres", async () => {
  const response = await axios.get(`${base_url}/offres`);
  return response.data.data;
});

const initialState = {
  offres: [],
  loading: false,
};

const offresSlice = createSlice({
  name: "offres",
  initialState,
  reducers: {},
  extraReducers: {
    [getOffres.pending]: (state) => {
      state.loading = true;
    },

    [getOffres.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.offres = payload;
    },

    [getOffres.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const {} = offresSlice.actions;

export default offresSlice.reducer;
