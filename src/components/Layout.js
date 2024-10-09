import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("Dashboard");
  const [folderStructure, setFolderStructure] = useState([]);

  // Update title and folder structure based on the current path
  useEffect(() => {
    const currentPath = location.pathname.toLowerCase();

    if (currentPath === "/dashboard") {
      setPageTitle("Dashboard");
      setFolderStructure([]); // No folder structure for Dashboard
    } else {
      setPageTitle(getTitleFromPath(currentPath));
      setFolderStructure(getBreadcrumbFromPath(currentPath)); // Set breadcrumb based on path
    }
  }, [location.pathname]);

  const getTitleFromPath = (path) => {
    switch (path) {
      case "/openposition":
        return "Open Positions";
      case "/currentbenchinfo":
        return "Scheduled Interviews";
      case "/partneronboarded":
        return "Onboarded Candidates";
      case "/partneronbench":
        return "Candidates on Bench";
      case "/myproject":
        return "Projects";
      case "/myresource":
        return "My Resources";
      case "/mailbox":
        return "Mailbox";
      case "/myinterview":
        return "My Interviews";
      case "/shortlistcandidates":
        return "Shortlisted Candidates";
      default:
        return "Home";
    }
  };

  const getBreadcrumbFromPath = (path) => {
    switch (path) {
      case "/openposition":
        return ["Dashboard", "Open Positions"];
      case "/currentbenchinfo":
        return ["Dashboard", "Scheduled Interviews"];
      case "/partneronboarded":
        return ["Dashboard", "Onboarded Candidates"];
      case "/partneronbench":
        return ["Dashboard", "Candidates on Bench"];
      case "/myproject":
        return ["Dashboard", "Projects"];
      case "/myresource":
        return ["Dashboard", "My Resources"];
      case "/mailbox":
        return ["Dashboard", "Mailbox"];
      case "/myinterview":
        return ["Dashboard", "My Interviews"];
      case "/shortlistcandidates":
        return ["Dashboard", "Shortlisted Candidates"];
      default:
        return [];
    }
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Topbar
        onToggleSidebar={handleToggleSidebar}
        title={pageTitle}
        folderStructure={folderStructure} // Pass breadcrumb structure to Topbar
      />
      <Sidebar isOpen={isSidebarOpen} onToggle={handleToggleSidebar} />
      <div className="main-content">{children}</div>
    </div>
  );
};

export default Layout;