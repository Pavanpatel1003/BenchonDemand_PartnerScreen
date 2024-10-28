import React, { useState } from 'react';
import { ThreeDots } from "react-loader-spinner";

const PartnerOnBench = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const rowsPerPage = 5; // Number of rows per page

    // Sample data (you might replace this with actual data)
    const data = [
        {
            name: "Ui Designer",
            projectName: "Ui/Ux Project",
            clientName: "Akash BOD",
            primarySkills: "2",
            secondarySkills: "IND",
            yoe: 9,
            startDate: "17 Jul 24"
        },
        // Add more rows here as needed
    ];

    // Pagination calculations
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentData = data.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(data.length / rowsPerPage);

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
                                    <td colSpan="8" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
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
                                        No projects found.
                                    </td>
                                </tr>
                            ) : (
                                currentData.map((row, index) => (
                                    <tr key={index}>
                                        <td data-label="Name">{row.name}</td>
                                        <td data-label="Project Name">{row.projectName}</td>
                                        <td data-label="Client Name">{row.clientName}</td>
                                        <td data-label="Primary Skills">{row.primarySkills}</td>
                                        <td data-label="Secondary Skills">{row.secondarySkills}</td>
                                        <td data-label="Yoe">{row.yoe}</td>
                                        <td data-label="Start Date">{row.startDate}</td>
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
        </>
    );
}

export default PartnerOnBench;
