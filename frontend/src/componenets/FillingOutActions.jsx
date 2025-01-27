import React, { useState } from "react";
import { useRPGStatsContext } from "../contexts/RPGStatsContext";
import ActionsForm from "./ActionsForm";

const FillingOutActions = () => {
  const { areasOfLife } = useRPGStatsContext();
  const [currentAOLInd, setCurrentAOLInd] = useState(0);

  const getNextAreaFn = () => {
    setCurrentAOLInd((prev) => prev + 1);
  };

  if (currentAOLInd >= areasOfLife.length) {
    return <p>all done!</p>;
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
