import React from "react";
import { useRPGStatsContext } from "../contexts/RPGStatsContext";

const Dashboard = () => {
  const { areasOfLife } = useRPGStatsContext();
  return (
    <div>
      <h3>Areas of life</h3>
      {areasOfLife.map((aol, i) => (
        <p key={i}>{aol.name}</p>
      ))}
    </div>
  );
};

export default Dashboard;
