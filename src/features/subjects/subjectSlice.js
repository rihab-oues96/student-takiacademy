import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import offresSlice from "../offres/offresSlice";

const base_url = process.env.REACT_APP_base_url;

export const getSubjects = createAsyncThunk(
  "subjects/getSubjects",
  async () => {
    const response = await axios.get(`${base_url}/subjects`);
    return response.data.data;
  }
);

const initialState = {
  subjects: [],
  loading: false,
};

const subjectsSlice = createSlice({
  name: "subjects",
  initialState,
  reducers: {},
  extraReducers: {
    [getSubjects.pending]: (state) => {
      state.loading = true;
    },

    [getSubjects.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.subjects = payload;
    },
    [getSubjects.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const {} = subjectsSlice.actions;

export default subjectsSlice.reducer;
