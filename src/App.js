import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import NavBar from "./NavBar";
import UserContext from "./UserContext";
import { useState } from "react";
import JoblyApi from "./api";

function App() {

  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);

  async function signup(formData) {
    const response = await JoblyApi.request("/auth/register", { ...formData }, "post");

    setToken(response.data.token);
    setUser(JSON.parse(atob(response.data.token.split('.')[1])));
  }

  async function login(formData) {
    const response = await JoblyApi.request("/auth/token", { ...formData }, "post");

    setToken(response.data.token);
    setUser(JSON.parse(atob(response.data.token.split('.')[1])));
  }

  async function updateProfile(formData) {
    const response = await JoblyApi.request(("/users/" + user.username), { ...formData }, "patch");

    setUser({ ...user }, response.data);
  }

  return (
    <UserContext.Provider value={{ user }}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <RoutesList />
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
