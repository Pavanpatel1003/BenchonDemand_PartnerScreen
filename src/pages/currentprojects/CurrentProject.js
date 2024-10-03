import React from "react";
import { useNavigate } from "react-router-dom";

const CurrentProject = () => {
  const navigate = useNavigate();

  const handleCurrentProject = (path) => {
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
                <th>Resource Name</th>
                <th>Total Contractual Employees</th>
                <th>Project Start date</th>
                <th>Project End date</th>
                <th>Shift Timings</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UI/UX Project</td>
                <td>0</td>
                <td>18 Jul 24</td>
                <td>31 Aug 24</td>
                <td>IND</td>
                <td>
                  <span class="status-hiring">● Hiring</span>
                </td>
                <td>
                  <span
                    class="view-details"
                    onClick={() => handleCurrentProject("/ProjectDetails")}
                  >
                    View Details
                  </span>
                </td>
              </tr>
              <tr>
                <td>UI/UX Project</td>
                <td>0</td>
                <td>18 Jul 24</td>
                <td>31 Aug 24</td>
                <td>IND</td>
                <td>
                  <span class="status-hiring">● Hiring</span>
                </td>
                <td>
                  <span
                    class="view-details"
                    onClick={() => handleCurrentProject("/ProjectDetails")}
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

export default CurrentProject;
