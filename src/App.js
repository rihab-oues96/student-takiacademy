import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import Header from "./layout/header/Header";
import SideBar from "./layout/sidebar/SideBar";
import Home from "./pages/home/Home";
import Offres from "./pages/offres/Offres";
import Subjects from "./pages/subjects/Subjects";
import LiveSession from "./pages/liveSession/LiveSession";
import Forum from "./pages/forum/Forum";
import Exams from "./pages/exams/Exams";
import MyWallet from "./pages/myWallet/MyWallet";
import MyProfile from "./pages/myProfile/MyProfile";
import Assistance from "./pages/assistance/Assistance";
import SmallSideBar from "./layout/sidebar/SmallSideBar";
import Subject from "./pages/subject/Subject";
import Error from "./pages/error/Error";
import Exercices from "./pages/subject/components/exams/ExamsComponent";
import Registration from "./pages/subject/components/registration/Registration";
import Divers from "./pages/subject/components/divers/Divers";
import Chapters from "./pages/subject/components/chapters/Chapters";
import ChapterContent from "./pages/subject/components/chapterContent/ChapterContent";
import Lessons from "./pages/subject/components/chapterContent/components/lessons/Lessons";
import Exercicess from "./pages/subject/components/chapterContent/components/exercices/Exercices";
import Magazines from "./pages/subject/components/chapterContent/components/magazines/Magazines";
import Qcms from "./pages/subject/components/chapterContent/components/qcms/Qcms";
import APropos from "./pages/subject/components/chapterContent/components/apropos/Apropos";
import Comments from "./pages/subject/components/chapterContent/components/comments/Comments";
import Qa from "./pages/subject/components/chapterContent/components/q&a/Qa";
import Annonces from "./pages/subject/components/chapterContent/components/annonces/Annonces";

import { useSelector } from "react-redux";

function App() {
  const { isSidebarOpen } = useSelector((state) => state.sidebar);

  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        {isSidebarOpen && <SmallSideBar />}

        <div className="pages">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="offres" element={<Offres />} />
            <Route path="subjects" element={<Subjects />} />
            <Route path="subjects/:subjectId" element={<Subject />}>
              <Route index element={<Chapters />} />
              <Route path="examens" element={<Exercicess />} />
              <Route path="registration" element={<Registration />} />
              <Route path="divers" element={<Divers />} />
            </Route>
            <Route
              path="subjects/:subjectId/:chapterId"
              element={<ChapterContent />}
            >
              <Route path="" element={<Lessons />}>
                <Route path=":lessonName" element={""}>
                  <Route path=":videoName" element={""}>
                    <Route path="apropos" element={<APropos />} />
                    <Route path="commentaires" element={<Comments />}>
                      <Route path=":slug" element={""} />
                    </Route>
                    <Route path="Qa" element={<Qa />} />
                    <Route path="annonces" element={<Annonces />} />
                  </Route>
                </Route>
              </Route>
              <Route path="exercices" element={<Exercices />} />
              <Route path="magazines" element={<Magazines />} />
              <Route path="qcms" element={<Qcms />} />
            </Route>
            <Route path="live-session" element={<LiveSession />} />
            <Route path="forum" element={<Forum />} />
            <Route path="exams" element={<Exams />} />
            <Route path="my-wallet" element={<MyWallet />} />
            <Route path="my-profile" element={<MyProfile />} />
            <Route path="assistance" element={<Assistance />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
