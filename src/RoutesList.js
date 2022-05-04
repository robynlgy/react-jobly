import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/companies/:name" element={<Company />} />
      <Route path="/jobs" element={<Jobs />} />
    </Routes>
  );
}

export default RoutesList;
