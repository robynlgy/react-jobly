import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";
import { useContext } from "react";
import UserContext from "./UserContext";

/** List of possible endpoints in our app, along with associated components */
function RoutesList({ signup, login, updateProfile }) {
  const { currentUser } = useContext(UserContext);

  if (currentUser) {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/:name" element={<Company />} />
        <Route path="/jobs" element={<Jobs />} />
        {/* <Route path="/profile" element={<ProfileForm updateProfile={updateProfile} />} /> */}
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/signup" element={<SignupForm signup={signup} />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }
}

export default RoutesList;
