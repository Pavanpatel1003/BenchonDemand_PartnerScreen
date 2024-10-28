import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import Notification from "../pages/notification/Notification";
import MyProject from "../pages/myproject/MyProject";
import ProjectDetails from "../pages/myproject/ProjectDetails";
import MyResource from "../pages/myresources/MyResource";
import Requirement from "../pages/myresources/Requirement";
import Mailbox from "../pages/mailbox/Mailbox";
import MyInterview from "../pages/myinterview/MyInterview";
import InterviewDetails from "../pages/myinterview/InterviewDetails";
import ShortlistCandidates from "../pages/shortlistedcandidate/ShortlistCandidates";
import PartnerOnboarded from "../pages/partnerproject/PartnerOnboarded";
import PartnerOnBench from "../pages/partnerproject/PartnerOnBench";
import OpenPosition from "../pages/openPosition/OpenPosition";
import CurrentBenchInfo from "../pages/currentavailablebench/CurrentBenchinfo";
import UserDetails from "../pages/currentavailablebench/UserDetails";
// import Login from "../pages/login/Login";

const AppRoutes = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const handleLogin = () => {
  //   setIsAuthenticated(true);
  // };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/MyProject" element={<MyProject />} />
          <Route path="/ProjectDetails/:id" element={<ProjectDetails />} />
          <Route path="/MyResource" element={<MyResource />} />
          <Route path="/Requirement" element={<Requirement />} />
          <Route path="/mailbox" element={<Mailbox />} />
          <Route path="/myinterview" element={<MyInterview />} />
          <Route path="/InterviewDetails/:id" element={<InterviewDetails />} />
          <Route path="/shortlistCandidates" element={<ShortlistCandidates />} />
          <Route path="/PartnerOnboarded" element={<PartnerOnboarded />} />
          <Route path="/PartnerOnBench" element={<PartnerOnBench />} />
          <Route path="/OpenPosition" element={<OpenPosition />} />
          <Route path="/CurrentBenchinfo" element={<CurrentBenchInfo />} />
          <Route path="/UserDetails" element={<UserDetails />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
