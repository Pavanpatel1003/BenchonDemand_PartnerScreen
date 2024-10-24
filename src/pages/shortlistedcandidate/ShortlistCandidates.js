import React from "react";

const ShortlistCandidates = () => {
  return (
    <>
      <div class="container-fluid table-format">
        <div className="table-heading">
          <h5>List Of Shortlisted Candidate</h5>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Project Name</th>
                <th>Client Name</th>
                <th>Primary Skills</th>
                <th>Secoundary Skills</th>
                <th>yoe</th>
                <th>Start Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Name">Anil</td>
                <td data-label="Project Name">Ui/Ux Project</td>
                <td data-label="Client Name">Akash BOD</td>
                <td data-label="Primary Skills">2</td>
                <td data-label="Secoundary Skills">IND</td>
                <td data-label="yoe">9</td>
                <td data-label="Start Date">24 March 24</td>
              </tr>
              <tr>
                <td data-label="Name">Anil</td>
                <td data-label="Project Name">Ui/Ux Project</td>
                <td data-label="Client Name">Akash BOD</td>
                <td data-label="Primary Skills">2</td>
                <td data-label="Secoundary Skills">IND</td>
                <td data-label="yoe">9</td>
                <td data-label="Start Date">24 March 24</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ShortlistCandidates;
