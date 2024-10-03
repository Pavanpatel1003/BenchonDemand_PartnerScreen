import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("Dashboard");
  const [ifDashboard, setDashboard] = useState(false)

  // Update title based on the current path
  useEffect(() => {
    const currentPath = location.pathname.toLowerCase();

    if (currentPath === "/dashboard") {
      setPageTitle("Dashboard");
    } else {
      setPageTitle(getTitleFromPath(currentPath));
    }
  }, [location.pathname]);


  const getTitleFromPath = (path) => {
    switch (path) {
      case "/dashboard":
        setDashboard(false)
        return "dashboard";
      case "/project":
        setDashboard(true)
        return "Project";
      case "/mypartner":
        setDashboard(true)
        return "My Partner";
      case "/mailbox":
        setDashboard(true)
        return "Mailbox";
      case "/myinterview":
        setDashboard(true)
        return "My Interview";
      case "/shortlistcandidates":
        setDashboard(true)
        return "Shortlist Candidates";
      default:
        setDashboard(false)
        return "Home";
    }
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Topbar onToggleSidebar={handleToggleSidebar} title={pageTitle} ifdashboard={ifDashboard} />
      <Sidebar isOpen={isSidebarOpen} onToggle={handleToggleSidebar} />
      <div className="main-content">{children}</div>
    </div>
  );
};

export default Layout;
