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
      const title = getTitleFromPath(currentPath);
      const breadcrumb = getBreadcrumbFromPath(currentPath);
      setPageTitle(title);
      setFolderStructure(breadcrumb);
    }
  }, [location.pathname]);

  const getTitleFromPath = (path) => {
    if (path.startsWith("/projectdetails")) return "Project Details";
    if (path.startsWith("/requirement")) return "My Resources";
    if (path.startsWith("/interviewdetails")) return "Interview Details"; // Lowercase check

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
    if (path.startsWith("/projectdetails")) return ["Home", "Projects", "Project Details"];
    if (path.startsWith("/requirement")) return ["Home", "My Resources", "Add Resources"];
    if (path.startsWith("/interviewdetails")) return ["Home", "My Interviews", "Details"]; // Adjusted breadcrumb

    switch (path) {
      case "/openposition":
        return ["Home", "Open Positions"];
      case "/currentbenchinfo":
        return ["Home", "Scheduled Interviews"];
      case "/partneronboarded":
        return ["Home", "Onboarded Candidates"];
      case "/partneronbench":
        return ["Home", "Candidates on Bench"];
      case "/myproject":
        return ["Home", "Projects"];
      case "/myresource":
        return ["Home", "My Resources"];
      case "/mailbox":
        return ["Home", "Mailbox"];
      case "/myinterview":
        return ["Home", "My Interviews"];
      case "/shortlistcandidates":
        return ["Home", "Shortlisted Candidates"];
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
      <div className={`main-content ${isSidebarOpen ? "sidebar-open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
