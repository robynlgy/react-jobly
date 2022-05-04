import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";

/** Nav component with links to home, companies, and jobs components
 * props: logout
 */
function NavBar({ logout }) {

    const { currentUser } = useContext(UserContext);

    return (
        <nav className="NavBar navbar navbar-dark bg-dark">
            {currentUser
                ? <div className="container">
                    <Link className="NavBar-jobly navbar-brand" to="/">Jobly</Link>
                    <Link className="NavBar-companies nav-link" to="/companies">Companies</Link>
                    <Link className="NavBar-jobs nav-link" to="/jobs">Jobs</Link>
                    <Link className="NavBar-profile nav-link" to="/profile">Profile</Link>
                    <button className="NavBar-logout nav-link bg-dark border-0" onClick={logout}>Logout</button>
                </div>

                : <div className="container">
                    <Link className="NavBar-jobly navbar-brand" to="/">Jobly</Link>
                    <Link className="NavBar-login nav-link" to="/login">Login</Link>
                    <Link className="NavBar-signup nav-link" to="/signup">Sign Up</Link>
                </div>}

        </nav>
    )
}

export default NavBar