import React from 'react'
import { useNavigate } from "react-router-dom";

const MyResource = () => {

    const navigate = useNavigate();

    const handleCreate = (path) => {
        console.log(`Navigating to: ${path}`);
        navigate(path);
    };

    return (
        <>
            <div class="container-fluid table-format">
                <div class="create-btn-set">
                    <button class="create-btn" onClick={() => handleCreate("/Requirement")}>
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
                                <td data-label="Name">React Node Guy</td>
                                <td data-label="Project Email">Proj 1</td>
                                <td data-label="Client Name">Akash BOD</td>
                                <td data-label="Primary Skills">React.NodeJs</td>
                                <td data-label="Secoundary Skills">Javascript</td>
                                <td data-label="YOE">9</td>
                                <td data-label="Start Date">17 July 24</td>
                                <td data-label="Status">
                                    <span className="status-hiring">● Active</span>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="Name">React Node Guy</td>
                                <td data-label="Project Email">Proj 1</td>
                                <td data-label="Client Name">Akash BOD</td>
                                <td data-label="Primary Skills">React.NodeJs</td>
                                <td data-label="Secoundary Skills">Javascript</td>
                                <td data-label="YOE">9</td>
                                <td data-label="Start Date">17 July 24</td>
                                <td data-label="Status">
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

export default MyResource
