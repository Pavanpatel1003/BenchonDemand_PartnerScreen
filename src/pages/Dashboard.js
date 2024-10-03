import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Chart } from "primereact/chart";
import search from "../assets/image/search.svg";
import peopleCommunity from "../assets/image/peopleCommunity.svg";
import folderplus from "../assets/image/folderplus.svg";
import timebeg from "../assets/image/timebeg.svg";

const Dashboard = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  useEffect(() => {
    // Simulating fetching data for the chart
    const data = {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Sales",
          data: [540, 325, 702, 620],
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <>
      <div className="container-fluid common-top">
        <div className="row card-box g-4">
          {[
            // Array mapping for card items
            {
              title: "Open Positions",
              number: 2,
              icon: search,
              path: "/OpenPosition",
              newTitle: "Open Positions",
            },
            {
              title: "Current Available Bench",
              number: 4,
              icon: peopleCommunity,
              path: "/currentBenchinfo",
              newTitle: "Current Available Bench",
            },
            {
              title: "Current Projects",
              number: 1,
              icon: folderplus,
              path: "/currentProject",
              newTitle: "Current Projects",
            },
            {
              title: "Upcoming Projects",
              number: 3,
              icon: timebeg,
              path: "/upcomingProjects",
              newTitle: "Upcoming Projects",
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
                <h5 className="card-title mt-2">Top Available Skills</h5>
                <Chart type="bar" data={chartData} options={chartOptions} />
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
                <Chart type="bar" data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>

        {/* Current Projects Table */}
        <div className="container-fluid table-format">
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
                    <td>Ui/UX</td>
                    <td>6</td>
                    <td>18 July 24</td>
                    <td>31 Aug 24</td>
                    <td>IST</td>
                    <td>
                      <span className="status-hiring">● Hiring</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* My Partners Table */}
        <div className="container-fluid table-format">
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
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="avatar RN">BOD</span>
                        <span className="ml-2 ms-3">BenchOnDemand LLP</span>
                      </div>
                    </td>
                    <td>akash@benchondemand.com</td>
                    <td>5657484934</td>
                    <td>Akash Paliwal</td>
                    <td>
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
