import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
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
import Login from "../pages/login/Login";
import PrivateRoute from "../privateRoute/privateRoute";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route: Login */}
        <Route path="/login" element={<Login />} />

        {/* Redirect to Login if trying to access root */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Protected Routes wrapped in Layout */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/myProject"
          element={
            <PrivateRoute>
              <Layout>
                <MyProject />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/projectDetails/:id"
          element={
            <PrivateRoute>
              <Layout>
                <ProjectDetails />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/myResource"
          element={
            <PrivateRoute>
              <Layout>
                <MyResource />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/requirement"
          element={
            <PrivateRoute>
              <Layout>
                <Requirement />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/mailbox"
          element={
            <PrivateRoute>
              <Layout>
                <Mailbox />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/myinterview"
          element={
            <PrivateRoute>
              <Layout>
                <MyInterview />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/interviewDetails/:id"
          element={
            <PrivateRoute>
              <Layout>
                <InterviewDetails />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/shortlistCandidates"
          element={
            <PrivateRoute>
              <Layout>
                <ShortlistCandidates />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/partnerOnboarded"
          element={
            <PrivateRoute>
              <Layout>
                <PartnerOnboarded />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/partnerOnBench"
          element={
            <PrivateRoute>
              <Layout>
                <PartnerOnBench />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/openPosition"
          element={
            <PrivateRoute>
              <Layout>
                <OpenPosition />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/currentBenchinfo"
          element={
            <PrivateRoute>
              <Layout>
                <CurrentBenchInfo />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/userDetails"
          element={
            <PrivateRoute>
              <Layout>
                <UserDetails />
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
