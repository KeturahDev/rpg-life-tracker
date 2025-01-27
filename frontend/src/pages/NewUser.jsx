import React from "react";
import AreasOfLifeForm from "../componenets/AreasOfLifeForm";
import { useRPGStatsContext } from "../contexts/RPGStatsContext";
import FillingOutActions from "../componenets/FillingOutActions";

const NewUser = () => {
  const { areasOfLife } = useRPGStatsContext();
  console.log("areasOfLife", areasOfLife);
  return (
    <div>
      <h2>Welcome!</h2>
      <p>Lets create the starting point for your characters stats!</p>
      {areasOfLife[0] ? <FillingOutActions /> : <AreasOfLifeForm />}
    </div>
  );
};

export default NewUser;
