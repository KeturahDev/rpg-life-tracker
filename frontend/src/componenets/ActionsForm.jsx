import React, { useEffect, useState } from "react";
import { useRPGStatsContext } from "../contexts/RPGStatsContext";

// action type = {action: string, point: number}[]
const ActionsForm = ({ AreaOfLife, getNextAreaFn }) => {
  const [actionInput, setActionInput] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  const [actions, setActions] = useState([]);
  const { editAOLActions } = useRPGStatsContext();

  const addActions = (e) => {
    e.preventDefault();

    setActions((prev) => [
      ...prev,
      { name: actionInput, difficulty: selectedDifficulty },
    ]);
    setActionInput("");
    setSelectedDifficulty("easy");
  };

  const removeAction = (actionName) => {
    setActions(actions.filter((action) => action.name !== actionName));
  };

  const submitActions = () => {
    editAOLActions(AreaOfLife, actions);
    getNextAreaFn();
    setActions([]);
    setSelectedDifficulty("easy");
  };

  return (
    <div>
      <h2>Actions for {AreaOfLife.name}</h2>

      <form onSubmit={addActions}>
        <input
          type="text"
          placeholder="Call a friend"
          value={actionInput}
          onChange={(e) => setActionInput(e.target.value)}
        />
        <>
          <label>
            Easy
            <input
              type="radio"
              id="1"
              name="difficulty"
              value="easy"
              checked={selectedDifficulty == "easy"}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            />
          </label>
          <label>
            Medium
            <input
              type="radio"
              id="1"
              name="difficulty"
              value="medium"
              checked={selectedDifficulty == "medium"}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            />
          </label>
          <label>
            Hard
            <input
              type="radio"
              id="1"
              name="difficulty"
              value="hard"
              checked={selectedDifficulty == "hard"}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            />
          </label>
        </>
        <button type="submit">Add</button>
      </form>
      <ul>
        {actions.map((action, i) => (
          <li key={i}>
            {action.name} {action.difficulty}
            <button onClick={() => removeAction(action.name)}>x</button>
          </li>
        ))}
      </ul>
      <button onClick={submitActions}>Save</button>
    </div>
  );
};

export default ActionsForm;
