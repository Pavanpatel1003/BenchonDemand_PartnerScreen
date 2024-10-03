import React from "react";
import notepedblack from "../../assets/image/notepedblack.png";

const AddRequirement = () => {
  return (
    <>
      <div class="container-fluid table-format">
        <div className="table-heading">
          <h5>Add a New Requirement</h5>
        </div>
        <form>
          <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
            <div class="col label-set">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                value="Ui/UX Project"
              />
            </div>
            <div class="col label-set">
              <label for="startDate" class="form-label">
                Start Date
              </label>
              <input
                type="text"
                class="form-control"
                id="startDate"
                placeholder="DD-MM-YY"
              />
            </div>
            <div class="col label-set">
              <label for="countryList" class="form-label">
                Country List
              </label>
              <input
                type="text"
                class="form-control"
                id="countryList"
                value="Afghanistan"
              />
            </div>
            <div class="col label-set">
              <label for="workType" class="form-label">
                Work Type
              </label>
              <input
                type="text"
                class="form-control"
                id="workType"
                value="Remote"
              />
            </div>
            <div class="col label-set">
              <div className="increment-decrement">
                <div className="me-3">
                  <label for="numberPosition" class="form-label">
                    Number of Positions
                  </label>
                  <div class="input-group">
                    <button
                      class="increment-decrement-wrap"
                      type="button"
                      id="btnMinusPosition"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      class="form-control text-center increment-decrement-wrap"
                      id="numberPosition"
                      value="1"
                    />
                    <button
                      class="increment-decrement-wrap"
                      type="button"
                      id="btnPlusPosition"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <label for="experienceRequired" class="form-label">
                    Experience Required
                  </label>
                  <div class="input-group">
                    <button
                      class="increment-decrement-wrap"
                      type="button"
                      id="btnMinusExperience"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      class="form-control text-center increment-decrement-wrap"
                      id="experienceRequired"
                      value="1"
                    />
                    <button
                      class="increment-decrement-wrap"
                      type="button"
                      id="btnPlusExperience"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3 mt-3">
            <div class="col label-set">
              <label for="primarySkills" class="form-label">
                Primary skill(s) with experience
              </label>
              <div class="input-icon">
                <input
                  type="text"
                  class="form-control"
                  id="primarySkills"
                  placeholder="Type to search"
                />
                <i class="fa-solid fa-trash"></i>{" "}
              </div>
            </div>
            <div class="col label-set">
              <label for="secondarySkills" class="form-label">
                Secondary skill(s) with experience
              </label>
              <div class="input-icon">
                <input
                  type="text"
                  class="form-control"
                  id="secondarySkills"
                  placeholder="Type to search"
                />
                <i class="fa-solid fa-trash"></i>{" "}
              </div>
            </div>
            <div class="col label-set">
              <label for="uploadJobDescription" class="form-label">
                Upload Job Description
              </label>
              <div class="input-icon">
                <input
                  type="file"
                  class="form-control"
                  id="uploadJobDescription"
                />
                <i class="fa-solid fa-upload"></i>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div class="col label-set">
              <label for="primarySkills" class="form-label">
                Inform Partners
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="sendUpdates"
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div class="col label-set">
              <label for="selectPartners" class="form-label">
                Select Partners
              </label>
              <select class="form-select select-name-btn" id="selectPartners">
                <option selected>Akash Test</option>
                <option>Vivek Test</option>
              </select>
              <div class="select-name">
                Akash Test <i class="fas fa-times"></i>
              </div>
            </div>
            <div class="col label-set"></div>
            <div className="col requirenment-cancel-create-btn">
              <div class="requirenment-cancel-create-btn">
                <button type="button" class="btn-cancel me-2">
                  <i class="fas fa-times"></i> Cancel
                </button>
                <button type="submit" class="btn-create">
                  <span className="me-2">
                    <img src={notepedblack} alt="" />
                  </span>
                  <span>Create</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRequirement;
