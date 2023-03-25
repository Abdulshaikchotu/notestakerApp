import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addnotes from "./Addnotes/addnotes";
import Home from "./home/home";
import Login from "./login/login";
import Register from "./register/register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addnotes" element={<Addnotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
