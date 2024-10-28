import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { get } from "../../services/API";
import { ThreeDots } from "react-loader-spinner";

const MyInterview = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [interview, setInterview] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const rowsPerPage = 5;

  const handleInterviewDetails = (id) => {
    navigate(`/InterviewDetails/${id}`);
  };

  useEffect(() => {
    const fetchInterviews = async () => {
      setLoading(true); // Set loading to true before API call
      setError(null); // Reset error state

      try {
        const response = await get("/get/Interviews");
        const interviewData = response.data.data;
        setInterview(interviewData || []);
      } catch (error) {
        console.error("Error fetching interviews:", error);
        setError("Failed to fetch interviews.");
      } finally {
        setLoading(false); // Set loading to false after API call
      }
    };

    fetchInterviews();

    const timer = setInterval(() => {
      setCurrentTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const filteredCandidates = interview.filter((interviewdata) =>
    interviewdata?.candidate?.project_name
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const indexOfLastCandidate = currentPage * rowsPerPage;
  const indexOfFirstCandidate = indexOfLastCandidate - rowsPerPage;
  const currentCandidates = filteredCandidates.slice(indexOfFirstCandidate, indexOfLastCandidate);
  const totalPages = Math.ceil(filteredCandidates.length / rowsPerPage);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container-fluid table-format">
        <div className="table-heading">
          <h5>Interview Details</h5>
        </div>

        <div className="table-responsive">
          <table className="table">
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
              {loading ? (
                <tr>
                  <td colSpan="6" style={{
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
                  <td colSpan="6" style={{ textAlign: "center" }}>
                    {error}
                  </td>
                </tr>
              ) : currentCandidates.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>
                    No interviews found.
                  </td>
                </tr>
              ) : (
                currentCandidates.map((interviewdata, index) => (
                  <tr key={index}>
                    <td data-label="Project Name">{interviewdata?.candidate?.project_name}</td>
                    <td data-label="Requirement Name">{interviewdata?.candidate?.name?.first_name}</td>
                    <td data-label="Date">
                      {interviewdata.date && moment(Number(interviewdata.date)).isValid()
                        ? moment(Number(interviewdata.date)).format('DD MMM YYYY')
                        : 'Invalid Date'}
                    </td>
                    <td data-label="Time">
                      {moment(interviewdata?.time, "HH:mm").format("h:mm A")}
                    </td>
                    <td data-label="Interview Status">
                      {interviewdata?.interview_status || "N/A"}
                    </td>
                    <td data-label="Action">
                      <span
                        className="view-details"
                        onClick={() => handleInterviewDetails(interviewdata.id)}
                      >
                        View Details
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
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
                style={currentPage === num + 1 ? { color: "#89609e" } : {}}
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

      <div className="container-fluid table-format">
        <div className="table-heading">
          <h5>Past Candidate Interviews</h5>
        </div>
        <div className="table-responsive">
          <table className="table">
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
              {interview.map((candidate) => (
                <tr key={candidate.id}>
                  <td data-label="Candidate Name">{candidate.candidate.name.first_name}</td>
                  <td data-label="Project Name">{candidate.candidate.project_name}</td>
                  <td data-label="Position Name">{'N/A'}</td>
                  <td data-label="Interview Outcome">Onboarded</td>
                  <td data-label="Date">
                    {candidate?.date && moment(Number(candidate?.date)).isValid()
                      ? moment(Number(candidate?.date)).format('DD MMM YYYY')
                      : 'Invalid Date'}
                  </td>
                  <td data-label="Time">
                    {moment(candidate?.time, "HH:mm").format("h:mm A") || "N/A"}
                  </td>
                  <td data-label="Action">
                    <span className="view-details">View Details</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
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
                style={currentPage === num + 1 ? { color: "#89609e" } : {}}
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
    </>
  );
};

export default MyInterview;
