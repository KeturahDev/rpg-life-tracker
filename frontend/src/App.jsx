import "./App.css";
import AreasOfLifeForm from "./componenets/AreasOfLifeForm";
import Dashboard from "./componenets/Dashboard";

function App() {
  return (
    <>
      <h1>RPG Life Tracker </h1>
      <div className="card">
        <Dashboard />
        <AreasOfLifeForm />
      </div>
    </>
  );
}

export default App;
