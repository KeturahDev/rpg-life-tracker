import "./App.css";
import ActionsForm from "./componenets/ActionsForm";
import AreasOfLifeForm from "./componenets/AreasOfLifeForm";
import Dashboard from "./componenets/Dashboard";

function App() {
  return (
    <>
      <h1>RPG Life Tracker </h1>
      <div className="card">
        <Dashboard />
        <AreasOfLifeForm />
        <ActionsForm
          AreaOfLife={{ name: "Social Life", actions: [], points: 0 }}
        />
      </div>
    </>
  );
}

export default App;
