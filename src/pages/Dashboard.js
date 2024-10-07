import React from "react";
import { useNavigate } from "react-router-dom";
import search from "../assets/image/search.svg";
import peopleCommunity from "../assets/image/peopleCommunity.svg";
import folderplus from "../assets/image/folderplus.svg";
import timebeg from "../assets/image/timebeg.svg";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  LineChart,
  Line,
} from "recharts";


const Dashboard = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const data = [
    { name: "React", value: 1.8, fill: "#ffcc80" },
    { name: "Node.js", value: 2.0, fill: "#cfd8dc" },
    { name: "Node.js", value: 1.1, fill: "#f8bbd0" },
    { name: "Node.js", value: 1.5, fill: "#b3e5fc" },
    { name: "UI/UX", value: 1.8, fill: "#fff9c4" },
    { name: "Node.js", value: 1.5, fill: "#e1bee7" }
  ];

  const newdata = [
    { name: '1', React: 0, Node: 0, BigData: 0, ASAPNET: 0 },
    { name: '2', React: 2, Node: 0, BigData: 0, ASAPNET: 0 },
    { name: '3', React: 0, Node: 2, BigData: 0, ASAPNET: 0 },
    { name: '4', React: 0, Node: 0, BigData: 1, ASAPNET: 0 },
    { name: '5', React: 0, Node: 0, BigData: 0, ASAPNET: 1 },
    { name: '6', React: 0, Node: 0, BigData: 0, ASAPNET: 0 },
  ];

  return (
    <>
      <div className="container-fluid common-top">
        <div className="row card-box g-4">
          {[
            // Array mapping for card items
            {
              title: "Open Positions",
              number: "02",
              icon: search,
              path: "/OpenPosition",
              newTitle: "Open Positions",
            },
            {
              title: "Scheduled Interviews",
              number: "04",
              icon: peopleCommunity,
              path: "/currentBenchinfo",
              newTitle: "Scheduled Interviews",
            },
            {
              title: "Onboarded Candidates",
              number: "01",
              icon: folderplus,
              path: "/PartnerOnboarded",
              newTitle: "Onboarded Candidates",
            },
            {
              title: "Candidates on Bench",
              number: "03",
              icon: timebeg,
              path: "/PartnerOnBench",
              newTitle: "Candidates on Bench",
            },
          ].map(({ title, number, icon, path }) => (
            <div key={title} className="col-12 col-md-6 col-lg-3">
              <div
                className="card-item"
                onClick={() => handleNavigation(path)}
              >
                <div className="card-content">
                  <h3 className="number">{number}</h3>
                  <p className="text">{title}</p>
                </div>
                <div className="icon">
                  <img src={icon} alt={`${title} Icon`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charts and Tables */}
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 g-4 g-lg-3">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="chart-dropdown">
                  <h5 className="card-title mt-2">Top Available Skills</h5>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={newdata}
                    margin={{ top: 20, right: 70, left: -25, bottom: 5 }}
                  >

                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 2]} />
                    <CartesianGrid stroke="#ccc" />
                    <Tooltip />

                    {/* Lines for each technology */}
                    <Line type="monotone" dataKey="React" stroke="#9052ff" strokeWidth={1} dot={{ fill: '#9052ff', r: 5 }} />
                    <Line type="monotone" dataKey="Node" stroke="#329bff" strokeWidth={1} dot={{ fill: '#329bff', r: 5 }} />
                    <Line type="monotone" dataKey="BigData" stroke="#f5c200" strokeWidth={1} dot={{ fill: '#f5c200', r: 5 }} />
                    <Line type="monotone" dataKey="ASAPNET" stroke="#777777" strokeWidth={1} dot={{ fill: '#777777', r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="chart-dropdown">
                  <h5 className="card-title">Total Utilized Skills</h5>
                  <div className="chart-drop">
                    <select className="form-select chart-box-set">
                      <option>Last Year</option>
                      {/* Additional options can be added here */}
                    </select>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={data}
                    margin={{ top: 20, right: 70, left: -25, bottom: 5 }}
                    barCategoryGap="20%" // Adds space between the columns
                  >
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" tick={false} /> {/* Hides the bottom text */}
                    <YAxis domain={[0, 2]} />
                    <Tooltip />
                    <Bar
                      dataKey="value"
                      fill="#8884d8"
                      radius={[50, 50, 50, 50]} // Top rounded corners
                    >
                      <LabelList
                        dataKey="name"
                        position="center"
                        fill="#000" // Text color
                        angle={-90} // Keep text horizontal
                        style={{ textAnchor: "middle" }} // Center the text
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Current Projects Table */}
        <div className="container-fluid table-formats">
          <div className="row">
            <div className="table-heading-set">
              <h5 className="table-heading">Current Projects</h5>
              <div
                className="view-all"
                onClick={() => handleNavigation("/CurrentProject")}
              >
                View all
              </div>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Total Contractual Employees</th>
                    <th>Project Start Date</th>
                    <th>Project End Date</th>
                    <th>Shift Timings</th>
                    <th>Hiring Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Project Name">Ui/UX</td>
                    <td data-label="Total Contractual Employees">6</td>
                    <td data-label="Project Start Date">18 July 24</td>
                    <td data-label="Project End Date">31 Aug 24</td>
                    <td data-label="Shift Timings">IST</td>
                    <td data-label="Hiring Status">
                      <span className="status-hiring">● Hiring</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* My Partners Table */}
        <div className="container-fluid table-formats">
          <div className="row">
            <div className="table-heading-set">
              <h5 className="table-heading">My Partners</h5>
              <div
                className="view-all"
                onClick={() => handleNavigation("/myPartner")}
              >
                View all
              </div>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Partner Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Point of Contact</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Partner Name">
                      <div className="d-flex align-items-center">
                        <span className="avatar RN">BOD</span>
                        <span className="ml-2 ms-3">BenchOnDemand LLP</span>
                      </div>
                    </td>
                    <td data-label="Email">akash@benchondemand.com</td>
                    <td data-label="Phone Number">5657484934</td>
                    <td data-label="Point of Contact">Akash Paliwal</td>
                    <td data-label="Address">
                      <span className="view-details">View Details</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
