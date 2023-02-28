import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = process.env.REACT_APP_base_url;

export const getOffreDetails = createAsyncThunk(
  "offres/getOffreDetails",
  async (id) => {
    const response = await axios.get(`${base_url}/offres/${id}`);
    return response.data.data;
  }
);

const initialState = {
  offreDetails: {},
  loading: false,
  error: "",
};

const offreDetailsSlice = createSlice({
  name: "offreDetails",
  initialState,
  reducers: {
    removeOffreDescription: (state) => {
      state.offreDetails = "";
    },
  },
  extraReducers: {
    [getOffreDetails.pending]: (state) => {
      state.loading = true;
      state.offreDetails = "";
    },

    [getOffreDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.offreDetails = payload;
    },

    [getOffreDetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { removeOffreDescription } = offreDetailsSlice.actions;
export default offreDetailsSlice.reducer;
