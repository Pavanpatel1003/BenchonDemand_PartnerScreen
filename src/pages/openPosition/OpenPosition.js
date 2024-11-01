import React, { useState, useEffect } from "react";
import moment from 'moment';
import { ThreeDots } from "react-loader-spinner";

const OpenPosition = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const rowsPerPage = 5;

  useEffect(() => {

    setLoading(true);
    setError(null);

    const partnerList = localStorage.getItem("partnerData");

    if (partnerList) {
      const partnerDatas = JSON.parse(partnerList);
      setPositions(partnerDatas.open_positions);
      // console.log("partner2", positions)
      setLoading(false);
    }
  }, []);

  // Filter interviews based on search term
  const filteredPositions = positions.filter((position) =>
    position.name.toLowerCase().includes(searchTerm)
  );

  // Pagination for current interviews
  const indexOfLastPosition = currentPage * rowsPerPage;
  const indexOfFirstPosition = indexOfLastPosition - rowsPerPage;
  const currentPositions = filteredPositions.slice(indexOfFirstPosition, indexOfLastPosition);
  const totalPages = Math.ceil(filteredPositions.length / rowsPerPage);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid table-format">
      <div className="row">
        <div className="col-12 col-md-2">
          <div className="position-relative">
            <i className="fas fa-search position-absolute search-btn"></i>
            <input
              type="text"
              className="form-control ps-5"
              placeholder="Search"
              style={{ borderRadius: "30px" }}
              value={searchTerm}
              onChange={handleSearchChange}
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
            {loading ? (
              <tr>
                <td colSpan="8">
                  <ThreeDots
                    visible={true}
                    height="50"
                    width="50"
                    color="#89609e"
                    radius="9"
                    ariaLabel="three-dots-loading"
                  />
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>
                  {error}
                </td>
              </tr>
            ) : currentPositions.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>
                  No projects found.
                </td>
              </tr>
            ) : (
              currentPositions.map((position) => (
                <tr>
                  <td data-label="Position Name">{position.name || 'N/A'}</td>
                  <td data-label="Project Name">{position.projectName || 'N/A'}</td>
                  <td data-label="Start Date">
                    {moment(Number(position.start_date)).isValid()
                      ? moment(Number(position.start_date)).format('DD MMM YYYY')
                      : 'N/A'}
                  </td>
                  <td data-label="Open Positions">{position.headcount_required}</td>
                  <td data-label="Location">
                    <span className="status-hiring">
                      {position.location.country || 'N/A'}
                    </span>
                  </td>
                  <td data-label="Primary Skill">
                    {position.primary_skills?.map((skill) => skill.skill).join(', ') || 'N/A'}
                  </td>
                  <td data-label="Secondary Skills">
                    {position.secondary_skills?.map((skill) => skill.skill).join(', ') || 'N/A'}
                  </td>
                  <td data-label="Action">
                    <span className="view-details">View JD</span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      {filteredPositions.length > rowsPerPage && (
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
              className={currentPage === num + 1 ? "active-page" : ""}
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
      )}
    </div>
  );
};

export default OpenPosition;
