import React from "react";
import { useNavigate } from "react-router-dom";

const InterviewDetails = () => {
  const navigate = useNavigate();

  const handleSheduleviewDetails = (path) => {
    console.log(`Navigating to: ${path}`);
    navigate(path);
  };

  return (
    <>
      <div className="container-fluid table-format">
        <div className="table-heading">
          <h5>Interview Details</h5>
        </div>

        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-2 g-lg-3">
          <div class="col">
            <div class="summary-card">
              <h6>Project Name</h6>
              <p>Project 2 C1 Vinesh</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Interview Date</h6>
              <p>24 March 24</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Interview Time</h6>
              <p>15:40</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Work Location</h6>
              <p>IND Banglore</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Work Location</h6>
              <p>IND Banglore</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Interview Skills</h6>
              <p>Node.js</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Experience Required</h6>
              <p>9</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Partner Updated</h6>
              <p>Yes</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Candidate Items</h6>
              <p>Amit</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Experience Required</h6>
              <p>9</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Employee Location</h6>
              <p>IND, Banglore</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Resource Skills</h6>
              <p>Node.js</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Interview status</h6>
              <p className="badge-ind">Onboarded</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Meeting URL</h6>
              <p className="link-set">-</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>
                Interview status
                <span className="scheduled">
                  <i class="fa-solid fa-calendar"></i>
                </span>
              </h6>
              <p className="badge-scheduled">Scheduled</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Meeting URL</h6>
              <p className="link-set">https://www.notion.co/</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Interview status</h6>
              <p className="badge-ind">
                <select class="form-select" id="interviewStatus">
                  <option selected>Shortlisted</option>
                  <option value="1">Scheduled</option>
                  <option value="2">Completed</option>
                  <option value="3">Rejected</option>
                </select>
                <button
                  class="interview-details-update"
                  onClick={() =>
                    handleSheduleviewDetails("/InterviewDetails")
                  }
                >
                  Update Status
                </button>
              </p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Meeting URL</h6>
              <p className="link-set">https://www.notion.co/</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterviewDetails;
