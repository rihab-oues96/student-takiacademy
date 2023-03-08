import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = process.env.REACT_APP_base_url;

export const getSubjectContent = createAsyncThunk(
  "subjects/getSubjectContent",
  async (id) => {
    const response = await axios.get(`${base_url}/subjects/${id}`);
    return response.data.data;
  }
);

const initialState = {
  subjectContent: {},
  loading: false,
  error: "",
  subjectTitle: "",
};

const subjectContentSlice = createSlice({
  name: "SubjectContent",
  initialState,
  reducers: {
    getSubjectTitle: (state, action) => {
      getSubjectContent(action.payload);
      state.subjectTitle = action.payload;
    },
  },
  extraReducers: {
    [getSubjectContent.pending]: (state) => {
      state.loading = true;
      state.subjectContent = "";
    },

    [getSubjectContent.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.subjectContent = payload;
    },

    [getSubjectContent.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log(state.error);
    },
  },
});

export const { getSubjectTitle } = subjectContentSlice.actions;
export default subjectContentSlice.reducer;
