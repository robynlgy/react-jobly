import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import NavBar from "./NavBar";
import UserContext from "./UserContext";
import { useEffect, useState } from "react";
import JoblyApi from "./api";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function signup(formData) {
    const response = await JoblyApi.signup(formData);

    JoblyApi.token = response;
    setToken(response);
    // setCurrentUser(JSON.parse(atob(response.token.split('.')[1])));
  }

  async function login(formData) {
    const response = await JoblyApi.login(formData);

    JoblyApi.token = response;
    setToken(response);
    // setCurrentUser(JSON.parse(atob(response.data.token.split('.')[1])));
  }

  // async function updateProfile(formData) {
  //   const response = await JoblyApi.request(
  //     "users/" + currentUser.username,
  //     { ...formData },
  //     "patch"
  //   );

  //   setCurrentUser((prevUser) => ({ ...prevUser, ...response.user }));
  // }

  useEffect(
    function getUser() {
      async function getNewUser() {
        const username = JSON.parse(atob(token.split(".")[1])).username;
        const response = await JoblyApi.getUser(username);
        setCurrentUser((prevUser) => ({
          ...prevUser,
          ...response,
        }));
        setIsLoading(false)
      }
      if (isLoading && token) getNewUser();
    },
    [token]
  );

  return (
    <UserContext.Provider value={{ currentUser }}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <RoutesList
            signup={signup}
            login={login}
            // updateProfile={updateProfile}
          />
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
