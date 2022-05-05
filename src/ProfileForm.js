import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import { useContext } from "react";
import UserContext from "./UserContext";

/** Form component used for updating user.
 * props: updateProfile
 * state: formData
 */
function ProfileForm({ updateProfile }) {
    const { currentUser } = useContext(UserContext);
    const initialValue = {
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
    };

    const [formData, setFormData] = useState(initialValue);
    const [success, setSuccess] = useState(null);

    /** Update form input. */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData((fData) => ({
            ...fData,
            [name]: value,
        }));
    }

    /** Call parent function. */
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            updateProfile(formData);
            setSuccess("Updated Successfully");
        } catch (err) {
            console.log("ERROR", err)
            setSuccess(err);
        }
    }

    const formInputsHTML = (
        <div className="mb-3">
            <label htmlFor="Update-username">Username: </label>
            <input
                id="Update-username"
                disabled={true}
                name="username"
                className="form-control"
                value={currentUser.username}
                aria-label="Update-form-username"
            />
            <label htmlFor="Update-firstName">First Name: </label>
            <input
                id="Update-firstName"
                name="firstName"
                className="form-control"
                placeholder="Enter First Name"
                onChange={handleChange}
                value={formData.firstName}
                aria-label="Update-form-firstName"
            />
            <label htmlFor="Update-lastName">Last Name: </label>
            <input
                id="Update-lastName"
                name="lastName"
                className="form-control"
                placeholder="Enter Last Name"
                onChange={handleChange}
                value={formData.lastName}
                aria-label="Update-form-lastName"
            />
            <label htmlFor="Update-email">Email: </label>
            <input
                // type="email"
                id="Update-email"
                name="email"
                className="form-control"
                placeholder="Enter Email:"
                onChange={handleChange}
                value={formData.email}
                aria-label="Update-form-email"
            />
        </div>
    );

    return (
        <form
            className="UpdateForm my-3 justify-content-center container"
            onSubmit={handleSubmit}
        >
            {formInputsHTML}

            {success === "Updated Successfully" && <div role="alert" className="alert alert-success">{success}</div>}

            {success && success.error && <div role="alert" className="alert alert-danger">{success.error.message}</div>}

            <button className="UpdateForm-Btn btn-primary btn ms-3 py-1 btn-sm">
                Save Changes
            </button>
        </form>
    );
}

export default ProfileForm;
