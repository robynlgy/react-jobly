import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./shared/UserContext";

/** Landing page component with simple banner */
function HomePage() {
    const { currentUser } = useContext(UserContext);

    return (
        <section className="HomePage">
            <h1 className="mb-5 display-1 HomePage-jobly">Jobly</h1>

            <h2 className="my-4">All the jobs in one, convenient place.</h2>

            {currentUser
                ? <h2>Welcome Back, {currentUser.firstName}!</h2>
                :
                <div>
                    <Link className="btn btn-outline-dark mx-2" to="/login">Login</Link>
                    <Link className="btn btn-outline-dark mx-2" to="/signup">Sign Up</Link>
                </div>}
        </section>
    )
}

export default HomePage