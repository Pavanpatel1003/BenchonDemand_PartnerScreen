import React from "react";

const ShortlistCandidates = () => {
  return (
    <>
      <div class="container-fluid table-format">
        <div className="table-heading">
          <h5>Interview Details</h5>
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
                <td>Anil</td>
                <td>Ui/Ux Project</td>
                <td>Akash BOD</td>
                <td>2</td>
                <td>IND</td>
                <td>9</td>
                <td>24 March 24</td>               
              </tr>
              <tr>
                <td>Renu</td>
                <td>Develop</td>
                <td>Akash BOD</td>
                <td>2</td>
                <td>IND</td>
                <td>9</td>
                <td>24 March 24</td>               
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ShortlistCandidates;
