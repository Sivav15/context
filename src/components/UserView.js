import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserView = () => {
  const params = useParams();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    loading();
  }, []);

  const loading = async () => {
  try {
    let user = await axios.get(
      `https://62a9fa733b314385543fa2da.mockapi.io/users/${params.id}`
    );

    setUserData(user.data);
  } catch (error) {
    console.log(error);
  }
  };

  return (
    <div className="card-body">
      <div className="table-responsive">
        <table
          className="table table-bordered"
          id="dataTable"
          width="100%"
          cellspacing="0"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userData.name}</td>
              <td>{userData.position}</td>
              <td>{userData.office}</td>
              <td>{userData.age}</td>
              <td>{userData.startDate}</td>
              <td>${userData.salary}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserView;
