import React, { act } from "react";
import { useRPGStatsContext } from "../contexts/RPGStatsContext";

const Actions = () => {
  const { areasOfLife } = useRPGStatsContext();
  console.log(areasOfLife);
  return (
    <div>
      <h2>List of Actions togglable by mukltiple settings.. coming soon!</h2>
      <ul>
        {areasOfLife.map((aOL, i) =>
          aOL.actions.map((action, j) => (
            <li key={`${i}-${j}`}>{action.name}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Actions;
