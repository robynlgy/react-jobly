import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

/** List of possible endpoints in our app, along with associated components */
function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/companies/:name" element={<Company />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/profile" element={<ProfileForm />} />
    </Routes>
  );
}

export default RoutesList;
