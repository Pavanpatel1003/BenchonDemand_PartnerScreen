import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const ClientProject = () => {

    const [positions, setPositions] = useState([
        {
            positionName: "UI/UX Project",
            projectName: "0",
            startDate: "18 Jul 24",
            EndDate: "31 Aug 24",
            Time: "IST",
            hiring: "Hirings",
        },
        {
            positionName: "UI/UX Project",
            projectName: "0",
            startDate: "18 Jul 24",
            EndDate: "31 Aug 24",
            Time: "IST",
            hiring: "Hirings",
        },
    ]); // Example data

    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };


    return (
        <>
            <div className="container-fluid table-format">

                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Total Contractual Employees</th>
                                <th>Project Start Date</th>
                                <th>Project End Date</th>
                                <th>Shifting Timings</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {positions.map((position, index) => (
                                <tr key={index}>
                                    <td>{position.positionName}</td>
                                    <td>{position.projectName}</td>
                                    <td>{position.startDate}</td>
                                    <td>{position.EndDate}</td>
                                    <td>{position.Time}</td>
                                    <td>
                                        <span className="status-hiring">{position.hiring}</span>
                                    </td>
                                    <td>
                                        <span className="view-details" onClick={() => handleNavigation("/ClientProjectDetails")}>View Details</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ClientProject;


