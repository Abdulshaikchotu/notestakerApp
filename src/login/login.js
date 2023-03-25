import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
let url = "https://notetakerappbackend.onrender.com/login";
let Login = () => {
  let logindata = useRef();
  let navigate = useNavigate();
  async function loginfun(e) {
    e.preventDefault();
    const data = {
      email: logindata.current.email.value,
      password: logindata.current.password.value,
    };
    const response = await axios.post(url, data);
    console.log(response);
    if (response.data.status === "success") {
      window.localStorage.setItem("token", response.data.token);
      console.log(window.localStorage.getItem("token"));
      navigate("/home");
    }
  }
  return (
    <>
      <div id="login">
        <form ref={logindata} className="loginform">
          <h1>SignIn</h1>
          <input type="email" placeholder="email" id="email" />
          <input type="text" placeholder="password" id="password" />
          <button onClick={loginfun} id="btn">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
