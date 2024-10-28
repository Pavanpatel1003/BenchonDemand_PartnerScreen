import React, { useState, useEffect } from "react";
import { getBYID } from '../../services/API';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  const [projectDetailsData, setProjectDetailsData] = useState('');

  useEffect(() => {
    getBYID(`get/project?id=`, id).then((response) => {
      const projectDetails = response.data.data;
      console.log('projectDetails', projectDetails);
      setProjectDetailsData(projectDetails || {})
    }).catch((error) => {
      console.error("Error fetching projects:", error);
    });
  }, []);


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
              <p>{projectDetailsData.name}</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Start Date</h6>
              <p>{moment(Number(projectDetailsData?.start_date)).isValid()
                ? moment(Number(projectDetailsData?.start_date)).format('DD MMM YYYY')
                : 'Invalid Date'}
              </p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>End Date</h6>
              <p>
                {moment(Number(projectDetailsData?.end_date)).isValid()
                  ? moment(Number(projectDetailsData?.end_date)).format('DD MMM YYYY')
                  : 'Invalid Date'}
              </p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Deployed Resources</h6>
              <p>{projectDetailsData.manager_name}</p>
            </div>
          </div>
          <div class="col">
            <div class="summary-card">
              <h6>Description</h6>
              <p>{projectDetailsData.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
