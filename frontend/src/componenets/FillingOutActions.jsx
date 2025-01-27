import React, { useState } from "react";
import { useRPGStatsContext } from "../contexts/RPGStatsContext";
import ActionsForm from "./ActionsForm";
import { useNavigate } from "react-router-dom";

const FillingOutActions = () => {
  const navigate = useNavigate();
  const { areasOfLife } = useRPGStatsContext();
  const [currentAOLInd, setCurrentAOLInd] = useState(0);

  const getNextAreaFn = () => {
    setCurrentAOLInd((prev) => prev + 1);
  };

  if (currentAOLInd >= areasOfLife.length) {
    navigate("/dashboard");
  }
  return (
    <div>
      <ActionsForm
        AreaOfLife={areasOfLife[currentAOLInd]}
        getNextAreaFn={getNextAreaFn}
      />
    </div>
  );
};

export default FillingOutActions;
