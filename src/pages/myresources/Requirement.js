import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';

const Requirement = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            start_date: "",
            end_date: "",
            total_candidates: "",
            description: "",
            middleName: "",
            lastName: "",
            email: "",
            phoneNo: "",
            availability: "",
            experience: "",
            workType: "",
            gender: "",
            countryList: "",
            city: "",
            clientName: "",
            business: "",
            primarySkills: "",
            secondarySkills: "",
            certificate: "",
            uploadJobDescription: null, // For file upload
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email format").required("Required"),
            phoneNo: Yup.string().required("Required"),
            start_date: Yup.date().required("Required").nullable(),
            // Add other validation as needed
        }),
        onSubmit: (values) => {
            // Process form submission
            console.log('Form Data:', values);
        },
    });

    return (
        <div className="container-fluid table-format">
            <div className="table-heading">
                <h5>Add a New Requirement</h5>
            </div>
            <form onSubmit={formik.handleSubmit} className='req'>
                <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
                    <div className="col label-set">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                            id="name"
                            name="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            placeholder='Name'
                        />
                        {formik.touched.name && formik.errors.name ? <div className="invalid-feedback">{formik.errors.name}</div> : null}
                    </div>
                    <div className="col label-set">
                        <label htmlFor="middleName" className="form-label">Middle Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="middleName"
                            name="middleName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.middleName}
                            placeholder='Middle Name'
                        />
                    </div>
                    <div className="col label-set">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            placeholder='Last Name'
                        />
                    </div>
                    <div className="col label-set">
                        <label htmlFor="email" className="form-label">Email*</label>
                        <input
                            type="email"
                            className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                            id="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder="Enter an email address"
                        />
                        {formik.touched.email && formik.errors.email ? <div className="invalid-feedback">{formik.errors.email}</div> : null}
                    </div>
                    <div className="col label-set">
                        <label htmlFor="phoneNo" className="form-label">Phone Number*</label>
                        <input
                            type="tel"
                            className={`form-control ${formik.touched.phoneNo && formik.errors.phoneNo ? 'is-invalid' : ''}`}
                            id="phoneNo"
                            name="phoneNo"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phoneNo}
                            placeholder="+91 (IND) Enter a phone number"
                        />
                        {formik.touched.phoneNo && formik.errors.phoneNo ? <div className="invalid-feedback">{formik.errors.phoneNo}</div> : null}
                    </div>
                    <div className="col label-set">
                        <label htmlFor="start_date">Start Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="start_date"
                            name="start_date"
                            placeholder="DD-MM-YY"
                            value={formik.values.start_date ? moment(formik.values.start_date).format("YYYY-MM-DD") : ""}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className="col label-set">
                        <label htmlFor="availability" className="form-label">Availability*</label>
                        <input
                            type="text"
                            className="form-control"
                            id="availability"
                            name="availability"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.availability}
                            placeholder="Availability"
                        />
                    </div>
                    <div className="col label-set">
                        <label htmlFor="experience" className="form-label">Years of Experience*</label>
                        <input
                            type="number"
                            className="form-control"
                            id="experience"
                            name="experience"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.experience}
                            placeholder="0"
                        />
                    </div>
                    <div className="col label-set">
                        <label htmlFor="workType" className="form-label">Current Designation</label>
                        <input
                            type="text"
                            className="form-control"
                            id="workType"
                            name="workType"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.workType}
                            placeholder="Current Designation"
                        />
                    </div>
                    <div className="col label-set">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            className={`form-select ${formik.touched.gender && formik.errors.gender ? 'is-invalid' : ''}`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.gender}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        {formik.touched.gender && formik.errors.gender ? (
                            <div className="invalid-feedback">{formik.errors.gender}</div>
                        ) : null}
                    </div>
                    <div className="col label-set">
                        <label htmlFor="countryList" className="form-label">Country List</label>
                        <input
                            type="text"
                            className="form-control"
                            id="countryList"
                            name="countryList"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.countryList}
                            placeholder="Country List"

                        />
                    </div>
                    <div className="col label-set">
                        <label htmlFor="city" className="form-label">City</label>
                        <input
                            type="text"
                            className="form-control"
                            id="city"
                            name="city"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.city}
                            placeholder="Primary Skills"
                        />
                    </div>
                    <div className="col label-set">
                        <label htmlFor="clientName" className="form-label">Client Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="clientName"
                            name="clientName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.clientName}
                            placeholder="Client Name"
                        />
                    </div>
                    <div className="col label-set">
                        <label htmlFor="business" className="form-label">Business Unit</label>
                        <input
                            type="text"
                            className="form-control"
                            id="business"
                            name="business"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.business}
                            placeholder="Business"
                        />
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3 mt-3">
                    <div className="col label-set">
                        <label htmlFor="primarySkills" className="form-label">Primary skill(s) with experience</label>
                        <div className="input-icon">
                            <input
                                type="text"
                                className="form-control"
                                id="primarySkills"
                                name="primarySkills"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.primarySkills}
                                placeholder="Primary Skills"
                            />
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </div>
                    <div className="col label-set">
                        <label htmlFor="secondarySkills" className="form-label">Secondary skill(s) with experience</label>
                        <div className="input-icon">
                            <input
                                type="text"
                                className="form-control"
                                id="secondarySkills"
                                name="secondarySkills"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.secondarySkills}
                                placeholder="Secoundary Skills"
                            />
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </div>
                    <div className="col label-set">
                        <label htmlFor="certificate" className="form-label">Certification</label>
                        <input
                            type="text"
                            className="form-control"
                            id="certificate"
                            name="certificate"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Certificate"
                            value={formik.values.certificate}
                        />
                    </div>
                    <div className="col label-set">
                        <label htmlFor="uploadJobDescription" className="form-label">Upload Job Description</label>
                        <input
                            type="file"
                            className="form-control"
                            id="uploadJobDescription"
                            name="uploadJobDescription"
                            onChange={(event) => {
                                formik.setFieldValue("uploadJobDescription", event.currentTarget.files[0]);
                            }}
                        />
                    </div>
                </div>

                <div className="form-group mt-4">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Requirement;
