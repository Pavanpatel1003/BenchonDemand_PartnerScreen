import React from "react";

const EligibleBenchCandidates = () => {
  return (
    <>
      <div class="container-fluid table-format">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>YOE</th>
                <th>Skills</th>
                <th>Resume</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Anil</td>
                <td>9</td>
                <td>React, Node js</td>
                <td>
                  <span class="view-details">View</span>
                </td>
                <td>
                  <span class="view-details">Schedule</span>
                </td>
              </tr>
              <tr>
                <td>Anil</td>
                <td>9</td>
                <td>React, Node js</td>
                <td>
                  <span class="view-details">View</span>
                </td>
                <td>
                  <span class="view-details">Schedule</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EligibleBenchCandidates;
