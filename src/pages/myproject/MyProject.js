import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { ThreeDots } from "react-loader-spinner";

const MyProject = () => {
    const navigate = useNavigate();
    const [partnerListails, setpartnerListails] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const rowsPerPage = 5;

    const handleCurrentProject = (id) => {
        navigate(`/projectDetails/${id}`);
    };

    useEffect(() => {
        setLoading(true);
        setError(null);
        try {
            const partnerData = localStorage.getItem("partnerData");
            if (partnerData) {
                const parsedData = JSON.parse(partnerData);
                setpartnerListails(parsedData.projects || []);
            }
        } catch (err) {
            setError("Failed to load data");
        } finally {
            setLoading(false);
        }
    }, []);

    // Filter projects based on search term
    const filteredProjects = partnerListails.filter((project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate pagination values
    const indexOfLastPosition = currentPage * rowsPerPage;
    const indexOfFirstPosition = indexOfLastPosition - rowsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstPosition, indexOfLastPosition);
    const totalPages = Math.ceil(filteredProjects.length / rowsPerPage);

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page when searching
    };

    // Handle page change for pagination
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container-fluid table-format">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Total Contractual Employees</th>
                            <th>Project Start Date</th>
                            <th>Project End Date</th>
                            <th>Shift Timings</th>
                            <th>Hiring Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="7" style={{ textAlign: "center" }}>
                                    <ThreeDots height="50" width="50" color="#89609e" ariaLabel="loading" />
                                </td>
                            </tr>
                        ) : error ? (
                            <tr>
                                <td colSpan="7" style={{ textAlign: "center" }}>{error}</td>
                            </tr>
                        ) : currentProjects.length === 0 ? (
                            <tr>
                                <td colSpan="7" style={{ textAlign: "center" }}>No data available.</td>
                            </tr>
                        ) : (
                            currentProjects.map((project, index) => (
                                <tr key={index}>
                                    <td>{project.name}</td>
                                    <td>{project.total_candidates || 'N/A'}</td>
                                    <td>{project.start_date && moment(Number(project.start_date)).isValid()
                                        ? moment(Number(project.start_date)).format('DD MMM YYYY')
                                        : 'Invalid Date'}
                                    </td>
                                    <td>{project.end_date && moment(Number(project.end_date)).isValid()
                                        ? moment(Number(project.end_date)).format('DD MMM YYYY')
                                        : 'Invalid Date'}
                                    </td>
                                    <td>{project.shift_timings || 'N/A'}</td>
                                    <td>
                                        <span className="status-hiring">● {project.hiring_status ? "Hiring" : "Not Hiring"}</span>
                                    </td>
                                    <td>
                                        <span className="view-details" onClick={() => handleCurrentProject(project.id)}>
                                            View Details
                                        </span>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination controls */}
            {filteredProjects.length > rowsPerPage && (
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

export default MyProject;
