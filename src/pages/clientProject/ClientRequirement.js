import React from 'react'

const ClientRequirement = () => {
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
                                Middle Name
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
                                Last Name
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
                                Email*
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="workType"
                                value="Remote"
                            />
                        </div>
                        <div class="col label-set">
                            <label for="workType" class="form-label">
                                Phone Number*
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="workType"
                                value="Remote"
                            />
                        </div>
                        <div class="col label-set">
                            <label for="workType" class="form-label">
                                Start Date*
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="workType"
                                value="Remote"
                            />
                        </div>
                        <div class="col label-set">
                            <label for="workType" class="form-label">
                                Availability*
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="workType"
                                value="Remote"
                            />
                        </div>
                        <div class="col label-set">
                            <label for="workType" class="form-label">
                                Tears of Experience*
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="workType"
                                value="Remote"
                            />
                        </div>
                        <div class="col label-set">
                            <label for="workType" class="form-label">
                                Current Designation
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="workType"
                                value="Remote"
                            />
                        </div>
                        <div class="col label-set">
                            <label for="workType" class="form-label">
                                Gender
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="workType"
                                value="Remote"
                            />
                        </div>
                        <div class="col label-set">
                            <label for="workType" class="form-label">
                                Country List
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="workType"
                                value="Remote"
                            />
                        </div>
                        <div class="col label-set">
                            <label for="workType" class="form-label">
                                City
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="workType"
                                value="Remote"
                            />
                        </div>
                        <div class="col label-set">
                            <label for="workType" class="form-label">
                                Client Name
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="workType"
                                value="Remote"
                            />
                        </div>
                        <div class="col label-set">
                            <label for="workType" class="form-label">
                                Business Unit
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="workType"
                                value="Remote"
                            />
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
                                <i class="fa-solid fa-trash"></i>
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
                                <i class="fa-solid fa-trash"></i>
                            </div>
                        </div>
                        <div class="col label-set">
                            <label for="secondarySkills" class="form-label">
                                Enter Certificate
                            </label>
                            <div class="input-icon">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="secondarySkills"
                                    placeholder="Enter Certificate"
                                />
                                <i class="fa-solid fa-trash"></i>
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
                        <div className="col requirenment-cancel-create-btn">
                            <div class="requirenment-cancel-create-btn">
                                <div class="create-btn-set">
                                    <button class="create-btn">
                                        <span>Add Resource</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ClientRequirement
