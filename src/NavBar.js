import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";

/** Nav component with links to home, companies, and jobs components
 * props: logout
 */
function NavBar({ logout, clearAlerts}) {

    const { currentUser } = useContext(UserContext);

    return (
        <nav className="NavBar navbar navbar-dark bg-dark" onClick={clearAlerts}>
            {currentUser
                ? <div className="container">
                    <Link className="NavBar-jobly navbar-brand" to="/">Jobly</Link>
                    <div>
                    <Link className="NavBar-companies nav-link d-inline active" aria-current="page" to="/companies">Companies</Link>
                    <Link className="NavBar-jobs nav-link d-inline" to="/jobs">Jobs</Link>
                    <Link className="NavBar-profile nav-link d-inline" to="/profile">Profile</Link>
                    <button className="NavBar-logout nav-link bg-dark border-0 d-inline" onClick={logout}>Logout</button>
                    </div>
                </div>

                : <div className="container">

                    <Link className="NavBar-jobly navbar-brand" to="/">Jobly</Link>
                    <div>
                    <Link className="NavBar-login nav-link d-inline" to="/login">Login</Link>
                    <Link className="NavBar-signup nav-link d-inline" to="/signup">Sign Up</Link>
                    </div>
                </div>}

        </nav>
    )
}

export default NavBar