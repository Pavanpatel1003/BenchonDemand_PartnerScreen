import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { get } from '../../services/API';
import { ThreeDots } from "react-loader-spinner";

const MyProject = () => {
    const navigate = useNavigate();
    const [currentTime, setCurrentTime] = useState('');
    const [searchTerm, setSearchTerm] = useState(''); // Search term state
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [myProjectList, setMyProjectList] = useState([]); // State for project list
    const rowsPerPage = 5;

    const handleCurrentProject = (id) => {
        navigate(`/ProjectDetails/${id}`);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        setLoading(true); // Set loading to true before API call
        setError(null); // Reset error state
        getAllByList();
    }, []); // Only run once on component mount

    const getAllByList = () => {
        get('/get/projects')
            .then((response) => {
                const projectList = response.data.data;
                console.log('myProjectList', projectList);
                setMyProjectList(projectList || []);
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
                setError("Error fetching data."); // Set error message
            })
            .finally(() => {
                setLoading(false); // Set loading to false after fetching
            });
    };

    // Filter projects based on search term
    const filteredProjects = myProjectList.filter((project) =>
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
            <div className="row">
                <div className="col-12 col-md-2">
                    <div className="position-relative">
                        <i className="fas fa-search position-absolute search-btn"></i>
                        <input
                            type="text"
                            className="form-control ps-5"
                            placeholder="Search"
                            style={{ borderRadius: '30px' }}
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
                        ) : currentProjects.length === 0 ? (
                            <tr>
                                <td colSpan="7" style={{ textAlign: "center" }}>
                                    No projects found.
                                </td>
                            </tr>
                        ) : (
                            currentProjects.map((project) => (
                                <tr key={project.id}>
                                    <td data-label="Project Name">{project.name}</td>
                                    <td data-label="Total Contractual Employees">{project.total_candidates}</td>
                                    <td data-label="Project Start Date">
                                        {moment(Number(project.start_date)).isValid()
                                            ? moment(Number(project.start_date)).format('DD MMM YYYY')
                                            : 'Invalid Date'}
                                    </td>
                                    <td data-label="Project End Date">
                                        {moment(Number(project.end_date)).isValid()
                                            ? moment(Number(project.end_date)).format('DD MMM YYYY')
                                            : 'Invalid Date'}
                                    </td>
                                    <td data-label="Shift Timings">{project.shift_timings}</td>
                                    <td data-label="Hiring Status">
                                        <span className="status-hiring">● {project.hiring_status ? "Hiring" : "Not Hiring"}</span>
                                    </td>
                                    <td data-label="Action">
                                        <span
                                            className="view-details"
                                            onClick={() => handleCurrentProject(project.id)}
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
