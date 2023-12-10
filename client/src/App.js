import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import HomePage from "./Components/HomePage";
import Update from "./Components/Update";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
