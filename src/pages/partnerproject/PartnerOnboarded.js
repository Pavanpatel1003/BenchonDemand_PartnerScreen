import React, { useState, useEffect } from 'react';
import { get } from '../../services/API';
import { ThreeDots } from "react-loader-spinner";
import moment from 'moment';

const PartnerOnboarded = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5; // Number of rows per page
    const [onboardedCandidate, setOnboardedCandidate] = useState([]); // State for project list
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllOnBoardedList();
    }, []); // Only run once on component mount

    const getAllOnBoardedList = () => {
        setLoading(true);
        setError(null);
        get('/get/candidates')
            .then((response) => {
                const projectList = response.data.data;
                console.log('myProjectList', projectList);
                setOnboardedCandidate(projectList || []);
                setCurrentPage(1); // Reset to first page on new fetch
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
                setError("Error fetching data.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // Pagination calculations
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentData = onboardedCandidate.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(onboardedCandidate.length / rowsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className="container-fluid table-format">
                <div className="table-heading">
                    <h5>List of Candidates on Bench</h5>
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
                                <th>Yoe</th>
                                <th>Start Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="7">
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
                            ) : onboardedCandidate.length === 0 ? (
                                <tr>
                                    <td colSpan="7" style={{ textAlign: "center" }}>
                                        No candidates found.
                                    </td>
                                </tr>
                            ) : (
                                onboardedCandidate.map((row, index) => (
                                    <tr key={index}>
                                        <td data-label="Name">{row.name.first_name || 'N/A'}</td>
                                        <td data-label="Project Name">{row.project_name || 'N/A'}</td>
                                        <td data-label="Client Name">{row.client_name || 'N/A'}</td>
                                        <td data-label="Primary Skills">
                                            {row.skills.primary_skills.map((data) => (data.skill)) || 'N/A'}
                                        </td>
                                        <td data-label="Secondary Skills">
                                            {row.skills.secondary_skills.map((data) => (data.skill)) || 'N/A'}
                                        </td>
                                        <td data-label="Yoe">{row.yoe || 'N/A'}</td>
                                        <td data-label="Start Date">
                                            {moment(Number(row.start_date)).isValid()
                                                ? moment(Number(row.start_date)).format('DD MMM YYYY')
                                                : 'Invalid Date' || 'N/A'}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination controls */}
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
        </>
    );
}

export default PartnerOnboarded;
