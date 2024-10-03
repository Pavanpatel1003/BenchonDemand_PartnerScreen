import React, { useEffect, useState } from "react";
import noteped from "../../assets/image/noteped.png";
import { useNavigate } from "react-router-dom";
import { get } from '../../services/API';

const MyPartner = () => {
  const navigate = useNavigate();

  const handleCreate = (path) => {
    console.log(`Navigating to: ${path}`);
    navigate(path);
  };

  const [partnerInfo, setPartnerInfo] = useState([])

  useEffect(() => {
    get(
      '/get/partners').then((response) => {
        const notificationInfo = response.data;
        console.log('Partnerinfo', notificationInfo);
        setPartnerInfo(notificationInfo.data)
      })
  }, [])

  return (
    <>
      <div class="container-fluid table-format">
        <div class="create-btn-set">
          <button class="create-btn" onClick={() => handleCreate("/Create")}>
            <span className="mx-3">
              <img src={noteped} alt="noteped" />
            </span>
            <span>Create</span>
          </button>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Point of Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                partnerInfo.map(partner => {
                  return  <tr>
                  <td data-label="Name">{partner.name}</td>
                  <td data-label="Email">{partner.email}</td>
                  <td data-label="Phone Number">{partner.phone.country_code}-{partner.phone.phone}</td>
                  <td data-label="Point of Contact">{partner.point_of_contact}</td>
                  <td data-label="Action"><span class="view-details">View Details</span></td>
                </tr>
                })
              }
              {/* <tr>
                <td data-label="Name">{partnerInfo.name}</td>
                <td data-label="Email">akash@benchondemand.com</td>
                <td data-label="Phone Number">+91-9876456323</td>
                <td data-label="Point of Contact">Akash Paliwal</td>
                <td data-label="Action"><span class="view-details">View Details</span></td>
              </tr>
              <tr>
                <td data-label="Name">BenchOnDemand LLP</td>
                <td data-label="Email">akash@benchondemand.com</td>
                <td data-label="Phone Number">+91-9876456323</td>
                <td data-label="Point of Contact">Akash Paliwal</td>
                <td data-label="Action"><span class="view-details">View Details</span></td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyPartner;
