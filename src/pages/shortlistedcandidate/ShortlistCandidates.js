import React, { useEffect, useState } from "react";
import moment from 'moment';
import { get } from '../../services/API';
import { ThreeDots } from "react-loader-spinner";

const ShortlistCandidates = () => {
  const [shortlist, setShortlist] = useState([]);
  const [currentTime, setCurrentTime] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const rowsPerPage = 5;

  useEffect(() => {
    const fetchCandidates = async () => {
      setLoading(true); // Set loading to true before API call
      setError(null); // Reset error state
      try {
        const response = await get('/get/candidates');
        const candidatesList = response.data.data;
        setShortlist(candidatesList || []);
      } catch (error) {
        console.error("Error fetching candidates:", error);
        setError("Failed to load candidates. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();

    const timer = setInterval(() => {
      setCurrentTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const filteredCandidates = shortlist.filter((candidate) =>
    candidate.name.first_name.toLowerCase().includes(searchTerm) ||
    candidate.name.last_name.toLowerCase().includes(searchTerm)
  );

  const indexOfLastCandidate = currentPage * rowsPerPage;
  const indexOfFirstCandidate = indexOfLastCandidate - rowsPerPage;
  const currentCandidates = filteredCandidates.slice(indexOfFirstCandidate, indexOfLastCandidate);
  const totalPages = Math.ceil(filteredCandidates.length / rowsPerPage);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid table-format">
      <div className="table-heading">
        <h5>List Of Shortlisted Candidates</h5>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Project Name</th>
              <th>Client Name</th>
              <th>Primary Skills</th>
              <th>Secondary Skills</th>
              <th>YOE (Years of Experience)</th>
              <th>Start Date</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100px'
                }}>
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
                <td colSpan="7" style={{ textAlign: "center" }}>
                  {error}
                </td>
              </tr>
            ) : currentCandidates.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No shortlisted candidates found.
                </td>
              </tr>
            ) : (
              currentCandidates.map((candidate) => (
                <tr key={candidate.id}>
                  <td data-label="Name">{candidate.name.first_name || 'N/A'} {candidate.name.last_name || 'N/A'}</td>
                  <td data-label="Project Name">{candidate.project_name || 'N/A'}</td>
                  <td data-label="Client Name">{candidate.client_name || 'N/A'}</td>
                  <td data-label="Primary Skills">
                    {candidate.skills?.primary_skills?.map(skill => skill.skill).join(', ') || 'N/A'}
                  </td>
                  <td data-label="Secondary Skills">
                    {candidate.skills?.secondary_skills?.map(skill => skill.skill).join(', ') || 'N/A'}
                  </td>
                  <td data-label="YOE">{candidate.yoe || 'N/A'}</td>
                  <td data-label="Start Date">
                    {candidate.start_date && moment(Number(candidate.start_date)).isValid()
                      ? moment(Number(candidate.start_date)).format('DD MMM YYYY')
                      : 'Invalid Date'}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Conditional Pagination Controls */}
      {filteredCandidates.length > rowsPerPage && (
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
              className={currentPage === num + 1 ? 'active-page' : ''}
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

export default ShortlistCandidates;
