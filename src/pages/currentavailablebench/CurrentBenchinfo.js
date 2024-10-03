import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CurrentBenchinfo = () => {
  const navigate = useNavigate();

  const handlePersonDetails = (path) => {
    console.log(`Navigating to: ${path}`);
    navigate(path);
  };

  const [searchTerm, setSearchTerm] = useState(""); // Search term state

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <>
      <div class="container-fluid table-format">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="position-relative">
              <i className="fas fa-search position-absolute search-btn"></i>
              <input
                type="text"
                className="form-control ps-5"
                placeholder="Enter search term"
                style={{
                  borderRadius: "30px",
                }}
                value={searchTerm}
                onChange={handleSearchChange} // Trigger search function on input change
              />
            </div>
          </div>
        </div>

        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Resource Name</th>
                <th>Designation</th>
                <th>Primary Skills</th>
                <th>Secondary Skills</th>
                <th>YOE</th>
                <th>Availability</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="currentbench-person">
                    <span class="avatar RN">RN</span>
                    <span class="ml-2 ms-3">Renu</span>
                  </div>
                </td>
                <td>Sr. Consultant Data bricks</td>
                <td>React</td>
                <td>AI, Machine Learning</td>
                <td>11</td>
                <td>Immediate</td>
                <td>
                  <span
                    class="view-details"
                    onClick={() => handlePersonDetails("/UserDetails")}
                  >
                    View Details
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="currentbench-person">
                    <span class="avatar AN">AN</span>
                    <span class="ml-2 ms-3">Aenu</span>
                  </div>
                </td>
                <td>Sr. Consultant Data bricks</td>
                <td>React</td>
                <td>AI, Machine Learning</td>
                <td>11</td>
                <td>Immediate</td>
                <td>
                  <span
                    class="view-details"
                    onClick={() => handlePersonDetails("/UserDetails")}
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

export default CurrentBenchinfo;
