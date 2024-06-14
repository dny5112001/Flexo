import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Members from "./pages/Members";
import Updates from "./pages/Updates";
import Achievements from "./pages/Achievements";
import Login from "./pages/Login";
import Categorypage from "./pages/Categorypage";
import UserProfile from "./pages/UserProfile";
import UserInfo from "./components/UserInfo/UserInfo";
import Group from "./components/Groups/Group";
import Notification from "./components/Notification/Notification";
import ViewProfile from "./components/ViewProfile/ViewProfile";
import MemberProfile from "./components/MemberProfile/MemberProfile";

const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/members" element={<Members />} />
          <Route path="/member-profile" element={<MemberProfile />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/login" element={<Login />} />


          <Route path="/myprofile/" element={<UserProfile />}>
              <Route path="userinfo" element={<UserInfo />} />
              <Route path="group" element={<Group />} />
              <Route path="notification" element={<Notification />} />
              <Route path="viewprofile" element={<ViewProfile />} />
          </Route> 



          <Route path="/web" element={<Categorypage />} />
          <Route path="/android" element={<Categorypage />} />
          <Route path="/data" element={<Categorypage />} />
          <Route path="/blockChain" element={<Categorypage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
