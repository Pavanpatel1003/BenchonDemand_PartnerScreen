import React from 'react'
import { useNavigate } from "react-router-dom";

const ClientResource = () => {

    const navigate = useNavigate();

    const handleCreate = (path) => {
        console.log(`Navigating to: ${path}`);
        navigate(path);
    };

    return (
        <>
            <div class="container-fluid table-format">
                <div class="create-btn-set">
                    <button class="create-btn" onClick={() => handleCreate("/ClientRequirement")}>
                        <span>Add Resource</span>
                    </button>
                </div>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Project Email</th>
                                <th>Client Name</th>
                                <th>Primary Skills</th>
                                <th>Secoundary Skills</th>
                                <th>YOE</th>
                                <th>Start Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>React Node Guy</td>
                                <td>Proj 1</td>
                                <td>Akash BOD</td>
                                <td>React.NodeJs</td>
                                <td>Javascript</td>
                                <td>9</td>
                                <td>17 July 24</td>
                                <td>
                                    <span className="status-hiring">● Active</span>
                                </td>
                            </tr>
                            <tr>
                                <td>React Node Guy</td>
                                <td>Proj 1</td>
                                <td>Akash BOD</td>
                                <td>React.NodeJs</td>
                                <td>Javascript</td>
                                <td>9</td>
                                <td>17 July 24</td>
                                <td>
                                    <span className="status-hiring">● Active</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ClientResource
