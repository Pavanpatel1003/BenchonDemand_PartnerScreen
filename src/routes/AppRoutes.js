import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import Openposition from "../pages/openPosition/OpenPosition";
import CurrentBenchinfo from "../pages/currentavailablebench/CurrentBenchinfo";
import UserDetails from "../pages/currentavailablebench/UserDetails";
import CurrentProject from "../pages/currentprojects/CurrentProject";
import CurrentProjectDetails from "../pages/currentprojects/ProjectDetails";
import ProjectDetails from "../pages/currentprojects/ProjectDetails";
import AddRequirement from "../pages/currentprojects/AddRequirement";
import Project from "../pages/Project";
import MyPartner from "../pages/mypartner/MyPartner";
import Create from "../pages/mypartner/Create";
import Mailbox from "../pages/Mailbox";
import MyInterview from "../pages/myinterview/MyInterview";
import InterviewDetails from "../pages/myinterview/InterviewDetails";
import InterviewSheduleEditDetails from "../pages/myinterview/InterviewSheduleEditDetails";
import InterviewSheduleDetails from "../pages/myinterview/InterviewSheduleDetails"
import ShortlistCandidates from "../pages/ShortlistCandidates";
import Notification from "../pages/Notification"
import ClientProject from "../pages/clientProject/ClientProject";
import ClientProjectDetails from "../pages/clientProject/ClientProjectDetails";
import ClientResource from "../pages/clientProject/ClientResource";
import ClientRequirement from "../pages/clientProject/ClientRequirement";
import ClientOpenPosition from "../pages/clientProject/ClientOpenPosition";
import ClientInterviewDetails from "../pages/clientProject/ClientInterviewDetails";
import ClientInterview from "../pages/clientProject/ClientInterview";
import ClientOnboarded from "../pages/clientProject/ClientOnboarded";
import ClientOnBench from "../pages/clientProject/ClientOnBench";
import Login from "../pages/login/Login"

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Openposition" element={<Openposition />} />
            <Route path="/CurrentBenchinfo" element={<CurrentBenchinfo />} />
            <Route path="/UserDetails" element={<UserDetails />} />
            <Route path="/CurrentProject" element={<CurrentProject />} />
            <Route
              path="/CurrentProjectDetails"
              element={<CurrentProjectDetails />}
            />
            <Route path="/ProjectDetails" element={<ProjectDetails />} />
            <Route path="/AddRequirement" element={<AddRequirement />} />
            <Route path="/project" element={<Project />} />
            <Route path="/myPartner" element={<MyPartner />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/mailbox" element={<Mailbox />} />
            <Route path="/myinterview" element={<MyInterview />} />
            <Route path="/InterviewDetails" element={<InterviewDetails />} />
            <Route path="/InterviewSheduleEditDetails" element={<InterviewSheduleEditDetails />} />
            <Route path="/InterviewSheduleDetails" element={<InterviewSheduleDetails />} />
            <Route
              path="/shortlistCandidates"
              element={<ShortlistCandidates />}
            />
            <Route path="/Notification" element={<Notification />} />

            <Route path="/ClientProject" element={<ClientProject />} />
            <Route path="/ClientProjectDetails" element={<ClientProjectDetails />} />
            <Route path="/ClientResource" element={<ClientResource />} />
            <Route path="/ClientRequirement" element={<ClientRequirement />} />
            <Route path="/ClientOpenPosition" element={<ClientOpenPosition />} />
            <Route path="/ClientInterviewDetails" element={<ClientInterviewDetails />} />
            <Route path="/ClientInterview" element={<ClientInterview />} />
            <Route path="/ClientOnboarded" element={<ClientOnboarded />} />
            <Route path="/ClientOnBench" element={<ClientOnBench />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default AppRoutes;
