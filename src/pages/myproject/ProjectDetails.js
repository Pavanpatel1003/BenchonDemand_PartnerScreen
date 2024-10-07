import React from "react";

const ProjectDetails = () => {


  return (
    <>
      <div class="container-fluid table-format">
        <div className="table-heading">
          <h5>Project Details</h5>
        </div>
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-2 g-lg-3">
          <div class="col">
            <div class="summary-card">
              <h6>Name</h6>
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Start Date</h6>
              <p>15 Jul 25</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>End Date</h6>
              <p>15 Jul 25</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Deployed Resources</h6>
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Description</h6>
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
