import React, { useState } from "react";
import letsiconsfilter from "../../assets/image/letsiconsfilter.png";

const Mailbox = () => {
  // State to track notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "A new candidate was added by BenchOnDemand LLP.",
      description:
        "Dear Akash BOD, a new candidate was added by BenchOnDemand LLP with skills React (6 years), Node.js (6 years).",
      date: "08 Jun 2024",
      isNew: true,
    },
    {
      id: 2,
      message: "A new candidate was added by BenchOnDemand LLP.",
      description:
        "Dear Akash BOD, a new candidate was added by BenchOnDemand LLP with skills React (6 years), Node.js (6 years).",
      date: "20 Jul 2024",
      isNew: true,
    },
    {
      id: 3,
      message: "A candidate was reviewed.",
      description: "Dear Akash BOD, a candidate has been reviewed.",
      date: "07 Aug 2024",
      isNew: false,
    },
    {
      id: 4,
      message: "A candidate was shortlisted.",
      description: "Dear Akash BOD, a candidate has been shortlisted.",
      date: "26 Sep 2024",
      isNew: false,
    },
  ]);

  // State to track filter status
  const [showNewOnly, setShowNewOnly] = useState(false);

  // Function to mark a notification as "seen"
  const handleCheckNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id
          ? { ...notification, isNew: false }
          : notification
      )
    );
  };

  // Function to toggle filter
  const toggleFilter = () => {
    setShowNewOnly((prev) => !prev);
  };

  // Filter notifications based on the filter status
  const filteredNotifications = showNewOnly
    ? notifications.filter((notification) => notification.isNew)
    : notifications;

  return (
    <div className="container-fluid table-format">
      <div className="date-btn-set">
        <button className="date-btn" onClick={toggleFilter}>
          <span className="me-2">{showNewOnly ? "New Date" : "Date"}</span>
          <span>
            <img src={letsiconsfilter} alt="Filter Icon" />
          </span>
        </button>
      </div>

      {filteredNotifications.map((notification) => (
        <div
          key={notification.id}
          className="notification-card"
          onClick={() => handleCheckNotification(notification.id)} // Mark notification as seen on click
        >
          <div className="desc-date">
            <div className="d-flex">
              <div
                className={`notification-icon ${notification.isNew ? "notification-icon-active" : ""
                  }`}
              >
                <i className="fa-regular fa-bell"></i>
              </div>
              <div
                className={`notification-card-details ${notification.isNew ? "new-notification-details" : ""
                  }`}
              >
                <h5>{notification.message}</h5>
                <p className="mb-0">{notification.description}</p>
              </div>
            </div>
            <div className="date-text">{notification.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mailbox;
