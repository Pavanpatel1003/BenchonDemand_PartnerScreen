import React from "react";

const InterviewSheduleDetails = () => {
  return (
    <>
      <div class="container-fluid table-format">
        <div className="table-heading">
          <h5>Schedule Interview</h5>
        </div>
        <form>
          <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3 label-set">
            <div class="col label-set">
              <label for="projectName" class="form-label">
                Project Name
              </label>
              <input
                type="text"
                class="form-control"
                id="projectName"
                placeholder="Proj 1"
              />
            </div>
            <div class="col label-set">
              <label for="requirement" class="form-label">
                Requirement
              </label>
              <input
                type="text"
                class="form-control"
                id="requirement"
                placeholder="Full Stack"
              />
            </div>
            <div class="col label-set">
              <label for="candidateName" class="form-label">
                Candidate Name
              </label>
              <input
                type="text"
                class="form-control"
                id="candidateName"
                placeholder="React Node Guy"
              />
            </div>
            <div class="col label-set">
              <label for="date" class="form-label">
                Date
              </label>
              <input type="date" class="form-control" id="date" />
            </div>
            <div class="col label-set">
              <label for="time" class="form-label">
                Time
              </label>
              <input
                type="text"
                class="form-control"
                id="time"
                placeholder="Full Stack"
              />
            </div>
            <div class="col label-set">
              <label for="zone" class="form-label">
                Zone
              </label>
              <input
                type="text"
                class="form-control"
                id="zone"
                placeholder="React Node Guy"
              />
            </div>
            <div class="col label-set">
              <label for="zone" class="form-label">
                Zone
              </label>
              <input
                type="text"
                class="form-control"
                id="zone"
                placeholder="React Node Guy"
              />
            </div>
            <div class="col label-set">
              <label for="meetingURL" class="form-label">
                Meeting URL
              </label>
              <input
                type="url"
                class="form-control"
                id="meetingURL"
                placeholder="Enter meeting URL"
              />
            </div>
            <div class="col label-set">
              <label for="note" class="form-label">
                Note
              </label>
              <input
                type="text"
                class="form-control"
                id="note"
                placeholder="Enter any note"
              />
            </div>
            <div class="col label-set">
              <label for="Employee Location" class="form-label">
                Employee Location
              </label>
              <input
                type="text"
                class="form-control"
                id="note"
                placeholder="Enter any note"
              />
            </div>
            <div class="col label-set">
              <label for="Resource Skills" class="form-label">
                Resource Skills
              </label>
              <input
                type="text"
                class="form-control"
                id="note"
                placeholder="Enter any note"
              />
            </div>
            <div class="col label-set">
              <label for="note" class="form-label">
                Note
              </label>
              <input
                type="text"
                class="form-control"
                id="note"
                placeholder="Enter any note"
              />
            </div>
            <div class="col label-set">
              <label for="note" class="form-label">
                Meeting URL
              </label>
              <input
                type="text"
                class="form-control"
                id="note"
                placeholder="Enter any note"
              />
            </div>
            <div class="col label-set">
              <label for="note" class="form-label">
                Interview Status
                <span className="scheduled ms-2">
                  <i class="fa-solid fa-calendar"></i>
                </span>
              </label>
              <input
                type="text"
                class="form-control"
                id="note"
                placeholder="Scheduled"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default InterviewSheduleDetails;
