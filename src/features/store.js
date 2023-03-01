import { configureStore } from "@reduxjs/toolkit";

import SidebarReducer from "./sideBar/SidebarSlice";
import ModalReducer from "./modal/ModalSlice";
import OffresReducer from "./offres/offresSlice";
import OffreDetailsReducer from "./offres/offreDetailsSlice";
import SubjectsReducer from "./subjects/subjectSlice";
import SubjectContentReducer from "./subjects/subjectContentSlice";

export const store = configureStore({
  reducer: {
    sidebar: SidebarReducer,
    modal: ModalReducer,
    offres: OffresReducer,
    offreDetails: OffreDetailsReducer,
    subjects: SubjectsReducer,
    subjectContent: SubjectContentReducer,
  },
});
