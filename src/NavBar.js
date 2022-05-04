import { Link } from "react-router-dom";

/** Nav component with links to home, companies, and jobs components */
function NavBar() {
    return (
        <nav className="NavBar navbar navbar-dark bg-dark">
            <div className="container">
                <Link className="NavBar-jobly navbar-brand" to="/">Jobly</Link>
                <Link className="NavBar-companies nav-link" to="/companies">Companies</Link>
                <Link className="NavBar-jobs nav-link" to="/jobs">Jobs</Link>
            </div>

        </nav>
    )
}

export default NavBar