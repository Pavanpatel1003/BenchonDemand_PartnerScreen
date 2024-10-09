import React from 'react'
import { useNavigate } from "react-router-dom";

const MyProject = () => {
    const navigate = useNavigate();

    const handleCurrentProject = (path) => {
        console.log(`Navigating to: ${path}`);
        navigate(path);
    };

    return (
        <>
            <div class="container-fluid table-format">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Total Contractual Employees</th>
                                <th>Project Start date</th>
                                <th>Project End date</th>
                                <th>Shift Timings</th>
                                <th>Hiring Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Project Name">UI/UX Project</td>
                                <td data-label="Total Contractual Employees">0</td>
                                <td data-label="Project Start date">18 Jul 24</td>
                                <td data-label="Project End date">31 Aug 24</td>
                                <td data-label="Shift Timings">IST</td>
                                <td data-label="Hiring Status">
                                    <span class="status-hiring">● Hiring</span>
                                </td>
                                <td data-label="Action">
                                    <span
                                        class="view-details"
                                        onClick={() => handleCurrentProject("/ProjectDetails")}
                                    >
                                        View Details
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default MyProject
