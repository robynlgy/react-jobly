import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import NavBar from "./NavBar";
import UserContext from "./UserContext";
import AlertContext from "./AlertContext";
import { useEffect, useState } from "react";
import JoblyApi from "./api";
import jwt from "jwt-decode";
import LoadingSpinner from "./LoadingSpinner";

/** App with user auth methods for jobly application
 *
 * state: currentUser, token, isLoading
 * props: none
 */
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(true);
  const [alerts, setAlerts] = useState(null);


  function clearAlerts(){
    setAlerts(null)
  }


  async function signup(formData) {
    setIsLoading(true);
    try {
      const response = await JoblyApi.signup(formData);
      JoblyApi.token = response;
      setToken(response);
    } catch (err) {
      setAlerts(err);
    }
    setIsLoading(false);
  }

  async function login(formData) {
    setIsLoading(true);
    try {
      const response = await JoblyApi.login(formData);
      JoblyApi.token = response;
      setToken(response);
    } catch (err) {
      setAlerts(err);
    }
    setIsLoading(false);
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
    JoblyApi.token = null;
    localStorage.clear();
  }

  async function updateProfile(formData) {
    setIsLoading(true);
    try {
      const response = await JoblyApi.updateProfile(currentUser.username, {
        ...formData,
      });

      setCurrentUser(response);
      setAlerts(["Successfully updated!"])
    } catch (err) {
      setAlerts(err);
    }
    setIsLoading(false);
  }

  /** useEffect runs on initial render and on changes in token state
   *  - makes request to API for user details from token payload
   *  - updates currentUser and sets token in localStorage
   */
  useEffect(
    function getUser() {
      async function getNewUser() {
        const username = jwt(token).username;
        // JSON.parse(atob(token.split(".")[1])).username;
        const response = await JoblyApi.getUser(username);
        setCurrentUser({ ...response });
        localStorage.setItem("token", token);
        setIsLoading(false);
      }
      if (token) {
        JoblyApi.token = token;
        getNewUser();
      } else {
        setIsLoading(false);
      }
    },
    [token]
  );

  if (isLoading) return < LoadingSpinner />

  return (
    <AlertContext.Provider value={{ alerts }}>
      <UserContext.Provider value={{ currentUser }}>
        <div className="App">
          <BrowserRouter>
            <NavBar logout={logout} clearAlerts={clearAlerts} />
            <RoutesList
              signup={signup}
              login={login}
              logout={logout}
              updateProfile={updateProfile}
            />
          </BrowserRouter>
        </div>
      </UserContext.Provider>
    </AlertContext.Provider>
  );
}

export default App;
