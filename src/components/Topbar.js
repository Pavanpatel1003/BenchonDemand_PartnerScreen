import React, { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import dashboard from "../assets/image/dashboard.svg";
import tabler_arrow_back from "../assets/image/tabler_arrow_back.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { get } from '../services/API';

const Topbar = ({ onToggleSidebar, title, ifdashboard }) => {
  const currentDate = format(new Date(), "dd MMM yyyy");
  const navigate = useNavigate();
  const location = useLocation();

  // State to store notification count
  const [notificationCount, setNotificationCount] = useState(0);

  const handleNotificationClick = () => {
    navigate("/Notification");
  };

  const renderLeftIcon = () => {
    if (location.pathname === "/dashboard") {
      return (
        <img
          src={dashboard}
          alt="Home"
          className="me-2 dashboard-icon"
          style={{ width: "60px", height: "60px" }}
        />
      );
    } else {
      return (
        <button className="back-light me-2" onClick={() => navigate(-1)}>
          <img
            src={tabler_arrow_back}
            alt="Back"
            style={{ width: "24px", height: "24px" }}
          />
        </button>
      );
    }
  };

  useEffect(() => {
    get(
      '/get/partners', { partner_id: 'f71050d7-3bbb-40ac-bbea-7fb0adf5cbde' }).then((response) => {
        const notificationInfo = response.data;
        console.log('notificationinfo', notificationInfo);
        setNotificationCount(notificationInfo.count || 0)
      })
  }, [])

  return (
    <>
      <nav className="topbar">
        <div className="topbar-wrap">
          <button
            className="btn btn-dark toggle-btn"
            type="button"
            onClick={onToggleSidebar}
          >
            ☰
          </button>
          <div className="topbar-left">
            {renderLeftIcon()}
            <span className="navbar-brand">{title}</span>
          </div>
          <div className="topbar-right">
            <button className="btn btn-light">
              <FontAwesomeIcon icon={faCalendarDays} />
              <span className="calendar-date ms-2">{currentDate}</span>
            </button>
            <button className="btn btn-light" onClick={handleNotificationClick}>
              <Badge badgeContent={notificationCount} color="primary">
                <NotificationsIcon />
              </Badge>
            </button>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle topbar-right-dropdown"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="profile-avatar">AP</div>
                <div className="me-2">
                  <div className="person-top">Akash BOD</div>
                  <div className="person-top-down">Super_Admin</div>
                </div>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/settings">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/logout">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conditionally render breadcrumb (folder section) */}
        {location.pathname !== "/dashboard" && ifdashboard === true && (
          <div className="folder-set">
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <span className="me-2">
                    <i className="fa-regular fa-folder"></i>
                  </span>
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <span className="mx-2">
                    <i className="fa-regular fa-folder"></i>
                  </span>
                  <span>{title}</span>
                </li>
              </ol>
            </nav>
          </div>
        )}
      </nav>
    </>
  );
};

export default Topbar;
