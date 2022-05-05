import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";

/** Landing page component with simple banner */
function HomePage() {
    const { currentUser } = useContext(UserContext);

    return (
        <section className="HomePage">
            <h1 className="mt-5">Jobly</h1>

            <h2>Find your next soul crusher!</h2>

            {currentUser
                ? <h2>Welcome Back, {currentUser.firstName}!</h2>
                :
                <div>
                    <Link className="btn btn-primary mx-2" to="/login">Login</Link>
                    <Link className="btn btn-primary mx-2" to="/signup">Sign Up</Link>
                </div>}
        </section>
    )
}

export default HomePage