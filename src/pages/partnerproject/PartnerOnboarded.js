import React from 'react'

const PartnerOnboarded = () => {
    return (
        <>
            <div class="container-fluid table-format">
                <div className="table-heading">
                    <h5>List of Onboarded Candidates</h5>
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
                                <td>Ui Designer</td>
                                <td>Ui/Ux Project</td>
                                <td>Akash BOD</td>
                                <td>2</td>
                                <td>
                                    <span className="status-hiring">IND</span>
                                </td>
                                <td>9</td>
                                <td>17 Jul 24</td>
                            </tr>
                            <tr>
                                <td>Ui Designer</td>
                                <td>Ui/Ux Project</td>
                                <td>Akash BOD</td>
                                <td>2</td>
                                <td>
                                    <span className="status-hiring">IND</span>
                                </td>
                                <td>9</td>
                                <td>17 Jul 24</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default PartnerOnboarded
