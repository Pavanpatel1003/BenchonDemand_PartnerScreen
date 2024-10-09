import React from 'react'

const PartnerOnBench = () => {
    return (
        <>
            <div class="container-fluid table-format">
                <div className="table-heading">
                    <h5>List of Candidates on Bench</h5>
                </div>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Project Name</th>
                                <th>Client Name</th>
                                <th>Primary Skills</th>
                                <th>Secoundary Skills</th>
                                <th>Yoe</th>
                                <th>Start Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Name">Ui Designer</td>
                                <td data-label="Project Name">Ui/Ux Project</td>
                                <td data-label="Client Name">Akash BOD</td>
                                <td data-label="Primary Skills">2</td>
                                <td data-label="Secoundary Skills">
                                    <span className="status-hiring">IND</span>
                                </td>
                                <td data-label="Yoe">9</td>
                                <td data-label="Start Date">17 Jul 24</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default PartnerOnBench
