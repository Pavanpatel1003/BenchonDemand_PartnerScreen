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
                <td data-label="Project Name">Anil</td>
                <td data-label="Requirement Name">Project 2 C1 Vinesh </td>
                <td data-label="Date">24 March 24</td>
                <td data-label="Time">17:01</td>
                <td data-label="Interview Status">Scheduled</td>
                <td data-label="Action">
                  <span class="view-details" onClick={() => handleInterviewDetails("/InterviewDetails")}>View Details</span>
                </td>
              </tr>
              <tr>
                <td data-label="Project Name">Anil</td>
                <td data-label="Requirement Name">Project 2 C1 Vinesh </td>
                <td data-label="Date">24 March 24</td>
                <td data-label="Time">17:01</td>
                <td data-label="Interview Status">Scheduled</td>
                <td data-label="Action">
                  <span class="view-details" onClick={() => handleInterviewDetails("/InterviewDetails")}>View Details</span>
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
                <td data-label="Candidate Name">Anil</td>
                <td data-label="Project Name">Project 2 C1 Vinesh </td>
                <td data-label="Position Name">Full Stack</td>
                <td data-label="Interview Outcome">Onboarded</td>
                <td data-label="Date">24 March 24</td>
                <td data-label="Time">17:01</td>
                <td data-label="Action">
                  <span class="view-details">View Details</span>
                </td>
              </tr>
              <tr>
                <td data-label="Candidate Name">Anil</td>
                <td data-label="Project Name">Project 2 C1 Vinesh </td>
                <td data-label="Position Name">Full Stack</td>
                <td data-label="Interview Outcome">Onboarded</td>
                <td data-label="Date">24 March 24</td>
                <td data-label="Time">17:01</td>
                <td data-label="Action">
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
