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
  ]);

  const [currentPage, setCurrentPage] = useState(1); // Current page
  const rowsPerPage = 5; // Set this to 3 to display 3 rows per page

  // Handle input change for search
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filtered positions based on the search term
  const filteredPositions = positions.filter((position) =>
    position.positionName.toLowerCase().includes(searchTerm)
  );

  // Pagination logic: Calculate the displayed rows based on current page
  const indexOfLastPosition = currentPage * rowsPerPage;
  const indexOfFirstPosition = indexOfLastPosition - rowsPerPage;
  const currentPositions = filteredPositions.slice(indexOfFirstPosition, indexOfLastPosition);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredPositions.length / rowsPerPage);

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
                style={{ borderRadius: "30px" }}
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
              {currentPositions.map((position, index) => (
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

        {/* Pagination controls */}
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num + 1}
              onClick={() => paginate(num + 1)}
              className={currentPage === num + 1 ? "active" : ""}
            >
              {num + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default OpenPosition;
