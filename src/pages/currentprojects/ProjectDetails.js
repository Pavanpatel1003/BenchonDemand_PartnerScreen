import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const navigate = useNavigate();

  const handleRequirement = (path) => {
    console.log(`Navigating to: ${path}`);
    navigate(path);
  };

  return (
    <>
      <div class="container-fluid table-format">
        <div className="table-heading">
          <h5>Project Details</h5>
        </div>
        <form>
          <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 g-2 g-lg-4">
            <div class="col label-set">
              <label for="projectName">Name</label>
              <input
                type="text"
                class="form-control"
                id="projectName"
                placeholder="Ui/UX Project"
              />
            </div>
            <div class="col label-set">
              <label for="startDate">Start Date</label>
              <input
                type="text"
                class="form-control"
                id="startDate"
                placeholder="DD-MM-YY"
              />
            </div>
            <div class="col label-set">
              <label for="endDate">End Date</label>
              <input
                type="text"
                class="form-control"
                id="endDate"
                placeholder="DD-MM-YY"
              />
            </div>
            <div class="col label-set">
              <label for="totalHeadcount">Total Headcount</label>
              <input
                type="number"
                class="form-control"
                id="totalHeadcount"
                placeholder="0"
              />
            </div>
            <div class="col label-set">
              <label for="description">Description</label>
              <input
                type="text"
                class="form-control"
                id="description"
                placeholder="UI/UX or the web portal"
              />
            </div>
          </div>
          <div class="project-details-button-set">
            <div>
              <button
                type="button"
                class="btn btn-requirement btn-block"
                onClick={() => handleRequirement("/AddRequirement")}
              >
                Add Requirement
              </button>
            </div>
            <div className="top-space">
              <button type="button" class="btn-cancel me-3">
                <span className="me-2">
                  <i class="fa-solid fa-xmark"></i>
                </span>
                <span>Cancel</span>
              </button>
              <button type="submit" class="btn-cancel">
                <span className="me-2">
                  <i class="fa-solid fa-arrows-rotate"></i>
                </span>
                <span>Update</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProjectDetails;
