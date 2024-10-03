import React from 'react'

const ClientProjectDetails = () => {
    return (
        <>
            <div class="container-fluid table-format">
                <div className="table-heading">
                    <h5>Project Details</h5>
                </div>
                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-2 g-lg-3">
                    <div class="col">
                        <div class="summary-card">
                            <h6>Status</h6>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="summary-card">
                            <h6>Primary Skills</h6>
                            <p>Big Data</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="summary-card">
                            <h6>Secondary Skills</h6>
                            <p>AI ML</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="summary-card">
                            <h6>Client Name</h6>
                            <p>India</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="summary-card">
                            <h6>Project Name</h6>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientProjectDetails
