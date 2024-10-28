import React, { useState, useEffect } from "react";
import { getBYID } from '../../services/API';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const InterviewDetails = () => {
  const [currentTime, setCurrentTime] = useState("");
  const { id } = useParams();
  const [interviewDetailsData, setInterviewDetailsData] = useState({});

  const getInterviewDetails = () => {
    getBYID(`get/interview-details?id=`, id)
      .then((response) => {
        const interviewData = response.data.data;
        setInterviewDetailsData(interviewData || {});
      })
      .catch((error) => {
        console.error("Error fetching interview details:", error);
      });
  };

  useEffect(() => {
    getInterviewDetails();

    const timer = setInterval(() => {
      setCurrentTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderSkills = (candidate) => {
    if (candidate?.primary_skills) {
      return candidate.primary_skills.map((skill) => skill.skill).join(', ');
    }
    return 'N/A';
  };

  return (
    <div className="container-fluid table-format">
      <div className="table-heading">
        <h5>Interview Details</h5>
      </div>

      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-2 g-lg-3">
        <div className="col">
          <div className="summary-card">
            <h6>Project Name</h6>
            <p>{interviewDetailsData?.project?.name || "N/A"}</p>
          </div>
        </div>
        <div className="col">
          <div className="summary-card">
            <h6>Interview Date</h6>
            <p>
              {interviewDetailsData?.interview?.date && moment(Number(interviewDetailsData?.interview?.date)).isValid()
                ? moment(Number(interviewDetailsData?.interview?.date)).format('DD MMM YYYY')
                : 'Invalid Date'}
            </p>
          </div>
        </div>
        <div className="col">
          <div className="summary-card">
            <h6>Interview Time</h6>
            <p>{moment(interviewDetailsData?.interview?.time, "HH:mm").format("h:mm A") || "N/A"}</p>
          </div>
        </div>
        <div className="col">
          <div className="summary-card">
            <h6>Work Location</h6>
            <p>{interviewDetailsData?.candidate?.location?.country || "N/A"}</p>
          </div>
        </div>
        <div className="col">
          <div className="summary-card">
            <h6>Time Zone</h6>
            <p>{interviewDetailsData?.timezone || "N/A"}</p>
          </div>
        </div>
        <div className="col">
          <div className="summary-card">
            <h6>Interview Skills</h6>
            <p>
              {interviewDetailsData?.requirement?.primary_skills?.map((data) => data.skill).join(', ') || 'N/A'}
            </p>
          </div>
        </div>
        <div className="col">
          <div className="summary-card">
            <h6>Experience Required</h6>
            <p>{interviewDetailsData?.requirement?.experience_required}</p>
          </div>
        </div>
        <div className="col">
          <div className="summary-card">
            <h6>Partner Updated</h6>
            <p>{interviewDetailsData?.partner_updated || 'N/A'}</p>
          </div>
        </div>
        <div className="col">
          <div className="summary-card">
            <h6>Employee Location</h6>
            <p>{interviewDetailsData?.employee_location || "N/A"}</p>
          </div>
        </div>
        <div className="col">
          <div className="summary-card">
            <h6>Resource Skills</h6>
            <p>{renderSkills(interviewDetailsData?.candidate)}</p>
          </div>
        </div>
        <div className="col">
          <div className="summary-card">
            <h6>Note</h6>
            <p>{interviewDetailsData?.interview?.note || "No notes available"}</p>
          </div>
        </div>
        <div className="col">
          <div className="summary-card">
            <h6>Candidate Name</h6>
            <p>{interviewDetailsData?.candidate?.name?.first_name || "N/A"} {interviewDetailsData?.candidate?.name?.last_name || "N/A"}</p>
          </div>
        </div>
        <div className="col">
          <div className="summary-card">
            <h6>Interview Status</h6>
            <p className="badge-ind">{interviewDetailsData?.interview?.interview_status || "Pending"}</p>
          </div>
        </div>
        <div className="col">
          <div className="summary-card">
            <h6>Meeting URL</h6>
            <p className="link-set">{interviewDetailsData?.meeting_url || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewDetails;
