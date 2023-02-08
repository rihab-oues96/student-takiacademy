import { configureStore } from "@reduxjs/toolkit";

import SidebarReducer from "./sideBar/SidebarSlice";
import ModalReducer from "./modal/ModalSlice";
import OffreDescriptionReducer from "./offreDescription/OffreDiscriptionSlice";

export const store = configureStore({
  reducer: {
    sidebar: SidebarReducer,
    modal: ModalReducer,
    offreDescription: OffreDescriptionReducer,
  },
});
