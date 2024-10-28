import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { get } from '../../services/API'; // Assuming you have an API service for fetching data

const MyResource = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const rowsPerPage = 5; // Number of rows per page

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await get('/get/resources'); // Replace with your actual API endpoint
                setData(response.data.data || []);
            } catch (err) {
                setError("Error fetching resources.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Pagination calculations
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentData = data.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(data.length / rowsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleCreate = (path) => {
        navigate(path);
    };

    return (
        <div className="container-fluid table-format">
            <div className="create-btn-set">
                <button className="create-btn" onClick={() => handleCreate("/Requirement")}>
                    <span>Add Resource</span>
                </button>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Project Email</th>
                            <th>Client Name</th>
                            <th>Primary Skills</th>
                            <th>Secondary Skills</th>
                            <th>YOE</th>
                            <th>Start Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="8" style={{
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
                                <td colSpan="8" style={{ textAlign: "center" }}>
                                    {error}
                                </td>
                            </tr>
                        ) : currentData.length === 0 ? (
                            <tr>
                                <td colSpan="8" style={{ textAlign: "center" }}>
                                    No resources found.
                                </td>
                            </tr>
                        ) : (
                            currentData.map((row, index) => (
                                <tr key={index}>
                                    <td data-label="Name">{row.name}</td>
                                    <td data-label="Project Email">{row.projectEmail}</td>
                                    <td data-label="Client Name">{row.clientName}</td>
                                    <td data-label="Primary Skills">{row.primarySkills}</td>
                                    <td data-label="Secondary Skills">{row.secondarySkills}</td>
                                    <td data-label="YOE">{row.yoe}</td>
                                    <td data-label="Start Date">{row.startDate}</td>
                                    <td data-label="Status">
                                        <span className={`status-hiring ${row.status.toLowerCase()}`}>
                                            ● {row.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination controls */}
            {data.length > rowsPerPage && (
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
}

export default MyResource;
