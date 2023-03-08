import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = process.env.REACT_APP_base_url;

export const getchapterContent = createAsyncThunk(
  "chapter/getchapterContent",
  async (id) => {
    const response = await axios.get(`${base_url}/chapters/${id}`);
    return response.data.data;
  }
);

const initialState = {
  chapterLessons: {},
  loading: false,
  error: "",
};

const chapterContentSlice = createSlice({
  name: "ChapterContent",
  initialState,
  reducers: {},
  extraReducers: {
    [getchapterContent.pending]: (state) => {
      state.loading = true;
      state.chapterLessons = "";
    },

    [getchapterContent.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.chapterLessons = payload;
    },

    [getchapterContent.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log(state.error);
    },
  },
});

export const {} = chapterContentSlice.actions;
export default chapterContentSlice.reducer;
