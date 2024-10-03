import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Create = () => {
  // Validation Schema using Yup
  const validationSchema = Yup.object({
    partnerName: Yup.string().required('Partner Name is required !'),
    email: Yup.string().email('Invalid email address').required('Email is required !'),
    phoneNo: Yup.string().required('Phone Number is required !'),
  });

  return (
    <>
      <div className="container-fluid table-format">
        <div className="table-heading">
          <h5>Partner Details</h5>
        </div>

        <Formik
          initialValues={{
            partnerName: '',
            email: '',
            phoneNo: '',
            subject: '',
            altEmail: '',
            altPhone: '',
            pointOfContact: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            // Handle form submission here
          }}
        >
          {({ handleChange, handleBlur }) => (
            <Form>
              <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-4">
                <div className="col label-set">
                  <label htmlFor="email" className="form-label">
                    Email*
                  </label>
                  <Field
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter an email address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
                <div className="col label-set">
                  <label htmlFor="partnerName" className="form-label">
                    Partner Name*
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="partnerName"
                    name="partnerName"
                    placeholder="Enter a partner name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="partnerName" component="div" className="text-danger" />
                </div>
                <div className="col label-set">
                  <label htmlFor="phoneNo" className="form-label">
                    Phone*
                  </label>
                  <Field
                    type="tel"
                    className="form-control"
                    id="phoneNo"
                    name="phoneNo"
                    placeholder="+91 (IND) Enter a phone number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="phoneNo" component="div" className="text-danger" />
                </div>
                <div className="col label-set">
                  <label htmlFor="altEmail" className="form-label">
                    Alternative Email
                  </label>
                  <Field
                    type="email"
                    className="form-control"
                    id="altEmail"
                    name="altEmail"
                    placeholder="Enter an alternative email address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col label-set">
                  <label htmlFor="altPhone" className="form-label">
                    Alternative Phone
                  </label>
                  <Field
                    type="tel"
                    className="form-control"
                    id="altPhone"
                    name="altPhone"
                    placeholder="Enter an alternative number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col label-set">
                  <label htmlFor="pointOfContact" className="form-label">
                    Point Of Contact
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="pointOfContact"
                    name="pointOfContact"
                    placeholder="Enter a point of contact"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div className="partner-details-create-btn">
                <button type="submit" className="partner-details-create-btn-wrap">
                  Create a Partner
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Create;
