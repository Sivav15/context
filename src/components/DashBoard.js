import React from "react";
import DashItem from "./DashItem";

const DashBoard = () => {
  const data = [
    { title: "EARNINGS (MONTHLY)", price: "$40,000", theam: "primary" ,icon:"fa-calendar" },
    { title: "EARNINGS (ANNUAL)", price: "$215,000", theam: "success" ,icon:"fa-dollar-sign" },
    { title: "TASKS", price: "50%", theam: "info" ,icon:"fa-clipboard-list" },
    { title: "PENDING REQUESTS", price: "18", theam: "warning" ,icon:"fa-comments" },
  ];
  return (
    <>
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a href="#!" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">    
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>

      {/* <!-- Content Row --> */}
      <div className="row">
        {data.map((val,i) => {
          return <DashItem value={val} key={i}></DashItem>;
        })}
      </div>
    </>
  );
};

export default DashBoard;
