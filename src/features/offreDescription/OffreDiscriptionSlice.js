import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offre: "",
};

const offreDescriptionSlice = createSlice({
  name: "offreDescription",
  initialState,
  reducers: {
    getOffre: (state, action) => {
      state.offre = action.payload;
    },
    
  },
});

export const { getOffre } = offreDescriptionSlice.actions;
export default offreDescriptionSlice.reducer;
