import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import Notification from "../pages/notification/Notification"
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
import Openposition from "../pages/openPosition/OpenPosition";
import CurrentBenchinfo from "../pages/currentavailablebench/CurrentBenchinfo";
import UserDetails from "../pages/currentavailablebench/UserDetails";
import CurrentProject from "../pages/currentprojects/CurrentProject";
import Login from "../pages/login/Login"


const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Notification" element={<Notification />} />
            <Route path="/MyProject" element={<MyProject />} />
            <Route path="/ProjectDetails" element={<ProjectDetails />} />
            <Route path="/MyResource" element={<MyResource />} />
            <Route path="/Requirement" element={<Requirement />} />
            <Route path="/mailbox" element={<Mailbox />} />
            <Route path="/myinterview" element={<MyInterview />} />
            <Route path="/InterviewDetails" element={<InterviewDetails />} />
            <Route
              path="/shortlistCandidates"
              element={<ShortlistCandidates />}
            />
            <Route path="/PartnerOnboarded" element={<PartnerOnboarded />} />
            <Route path="/PartnerOnBench" element={<PartnerOnBench />} />
            <Route path="/Openposition" element={<Openposition />} />
            <Route path="/CurrentBenchinfo" element={<CurrentBenchinfo />} />
            <Route path="/UserDetails" element={<UserDetails />} />
            <Route path="/CurrentProject" element={<CurrentProject />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default AppRoutes;
