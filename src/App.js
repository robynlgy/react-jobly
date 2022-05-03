import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/companies" element={<Companies />}/>
          <Route path="/companies/:name" element={<Company />}/>
          <Route path="/jobs" element={<Jobs />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
