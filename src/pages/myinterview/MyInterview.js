import React from "react";
import { useNavigate } from "react-router-dom";

const MyInterview = () => {
  const navigate = useNavigate();

  const handleInterviewDetails = (path) => {
    console.log(`Navigating to: ${path}`);
    navigate(path);
  };

  return (
    <>
      <div class="container-fluid table-format">
        <div className="table-heading">
          <h5>Interview Details</h5>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Requirement Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Interview Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Anil</td>
                <td>Project 2 C1 Vinesh </td>
                <td>24 March 24</td>
                <td>17:01</td>
                <td>Scheduled</td>
                <td>
                  <span class="view-details" onClick={() => handleInterviewDetails("/InterviewDetails")}>View Details</span>
                </td>
              </tr>
              <tr>
                <td>Anil</td>
                <td>Project 2 C1 Vinesh </td>
                <td>24 March 24</td>
                <td>17:01</td>
                <td>Scheduled</td>
                <td>
                  <span class="view-details">View Details</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="container-fluid table-format">
        <div className="table-heading">
          <h5>Past Candidate Interviews</h5>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Candidate Name</th>
                <th>Project Name</th>
                <th>Position Name</th>
                <th>Interview Outcome</th>
                <th>Date</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Anil</td>
                <td>Project 2 C1 Vinesh </td>
                <td>Full Stack</td>
                <td>Onboarded</td>
                <td>24 March 24</td>
                <td>17:01</td>
                <td>
                  <span class="view-details">View Details</span>
                </td>
              </tr>
              <tr>
                <td>Anil</td>
                <td>Project 2 C1 Vinesh </td>
                <td>Full Stack</td>
                <td>Onboarded</td>
                <td>24 March 24</td>
                <td>17:01</td>
                <td>
                  <span class="view-details">View Details</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyInterview;
