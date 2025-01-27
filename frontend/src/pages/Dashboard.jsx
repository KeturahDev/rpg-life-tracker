import React from "react";
import AreasOfLife from "../componenets/AreasOfLife";
import Actions from "../componenets/Actions";

const Dashboard = () => {
  return (
    <div>
      <h2>Your Stats</h2>
      <AreasOfLife />
      <Actions />
    </div>
  );
};

export default Dashboard;
