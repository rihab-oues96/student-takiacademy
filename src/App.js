import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import { useSelector } from "react-redux";
import "./App.scss";

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
            <Route path="/offres" element={<Offres />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/live-session" element={<LiveSession />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/my-wallet" element={<MyWallet />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/assistance" element={<Assistance />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
