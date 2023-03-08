import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = process.env.REACT_APP_base_url;

export const getLessonContent = createAsyncThunk(
  "lesson/getLessonContent",
  async (id) => {
    const response = await axios.get(`${base_url}/lessons/${id}`);
    return response.data.data;
  }
);

const initialState = {
  lessonsVideo: {},
  loading: false,
  error: "",
  videoTitle: "",
};

const lessonContentSlice = createSlice({
  name: "lessonContent",
  initialState,
  reducers: {
    getVideoTitle: (state, action) => {
      state.videoTitle = action.payload;
    },
  },
  extraReducers: {
    [getLessonContent.pending]: (state) => {
      state.loading = true;
      state.lessonsVideo = "";
    },

    [getLessonContent.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.lessonsVideo = payload;
    },

    [getLessonContent.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log(state.error);
    },
  },
});

export const { getVideoTitle } = lessonContentSlice.actions;
export default lessonContentSlice.reducer;
