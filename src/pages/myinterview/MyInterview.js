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
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Candidate Name</th>
                <th>Project Name</th>
                <th>Requirement Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Primary Skills</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Anil</td>
                <td>Project 2 C1 Vinesh </td>
                <td>Lorem Ipsum</td>
                <td>24 March 24</td>
                <td>11:56</td>
                <td>React</td>
                <td>Node.js</td>
                <td>
                  <span
                    class="view-details"
                    onClick={() => handleInterviewDetails("/InterviewDetails")}
                  >
                    View Details
                  </span>
                </td>
              </tr>
              <tr>
                <td>Anil</td>
                <td>Project 2 C1 Vinesh </td>
                <td>Lorem Ipsum</td>
                <td>24 March 24</td>
                <td>11:56</td>
                <td>React</td>
                <td>Node.js</td>
                <td>
                  <span
                    class="view-details"
                    onClick={() =>
                      handleInterviewDetails("/InterviewSheduleEditDetails")
                    }
                  >
                    View Details
                  </span>
                </td>
              </tr>
              <tr>
                <td>Anil</td>
                <td>Project 2 C1 Vinesh </td>
                <td>Lorem Ipsum</td>
                <td>24 March 24</td>
                <td>11:56</td>
                <td>React</td>
                <td>Node.js</td>
                <td>
                  <span
                    class="view-details"
                    onClick={() =>
                      handleInterviewDetails("/InterviewSheduleDetails")
                    }
                  >
                    View Details
                  </span>
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
