import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "./UserContext";

/** Nav component with links to home, companies, and jobs components
 * props: logout
 */
function NavBar({ logout, clearAlerts }) {

    const initialState = {
        companies: "nav-link d-inline",
        jobs: "nav-link d-inline",
        profile: "nav-link d-inline",
        login: "nav-link d-inline",
        signup: "nav-link d-inline"
    }

    const { currentUser } = useContext(UserContext);
    const [isActive, setIsActive] = useState(initialState);

    function handleClick(evt) {

        const currentNav = evt.target.innerHTML.toLowerCase();
        setIsActive({ ...initialState, [currentNav]: "active nav-link d-inline " });
    }

    return (
        <nav className="NavBar navbar navbar-dark bg-dark" onClick={clearAlerts}>
            {currentUser
                ? <div className="container">
                    <Link className="navbar-brand d-inline" to="/">Jobly</Link>
                    <div>
                        <Link onClick={handleClick} className={isActive.companies} to="/companies">Companies</Link>
                        <Link onClick={handleClick} className={isActive.jobs} to="/jobs">Jobs</Link>
                        <Link onClick={handleClick} className={isActive.profile} to="/profile">Profile</Link>
                        <button className="NavBar-logout nav-link bg-dark border-0 d-inline" onClick={logout}>Logout</button>
                    </div>
                </div>

                : <div className="container">

                    <Link className="navbar-brand d-inline" to="/">Jobly</Link>
                    <div>
                        <Link onClick={handleClick} className={isActive.login} to="/login">Login</Link>
                        <Link onClick={handleClick} className={isActive.signup} to="/signup">Sign Up</Link>
                    </div>
                </div>}

        </nav>
    )
}

export default NavBar