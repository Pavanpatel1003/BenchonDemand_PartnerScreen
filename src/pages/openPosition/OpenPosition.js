import React, { useState } from "react";

const OpenPosition = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const [positions, setPositions] = useState([
    {
      positionName: "UI Designer",
      projectName: "UI/UX Project",
      startDate: "18 Jul 24",
      openPositions: 2,
      location: "IND",
      primarySkill: "React",
      secondarySkills: "React Native",
    },
    {
      positionName: "Frontend Developer",
      projectName: "E-Commerce Project",
      startDate: "12 Aug 24",
      openPositions: 3,
      location: "USA",
      primarySkill: "Angular",
      secondarySkills: "Node.js",
    },
  ]); // Example data

  // Handle input change for search
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filtered positions based on the search term
  const filteredPositions = positions.filter((position) =>
    position.positionName.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <div className="container-fluid table-format">
        <div className="row">
          <div className="col-12 col-md-2">
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

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Position Name</th>
                <th>Project Name</th>
                <th>Start Date</th>
                <th>Open Positions</th>
                <th>Location</th>
                <th>Primary Skill</th>
                <th>Secondary Skills</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredPositions.map((position, index) => (
                <tr key={index}>
                  <td data-label="Position Name">{position.positionName}</td>
                  <td data-label="Project Name">{position.projectName}</td>
                  <td data-label="Start Date">{position.startDate}</td>
                  <td data-label="Open Positions">{position.openPositions}</td>
                  <td data-label="Location">
                    <span className="status-hiring">{position.location}</span>
                  </td>
                  <td data-label="Primary Skill">{position.primarySkill}</td>
                  <td data-label="Secondary Skills">{position.secondarySkills}</td>
                  <td data-label="Action">
                    <span className="view-details">View JD</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OpenPosition;
