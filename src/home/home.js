import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import "./home.css";

const Home = () => {
  let navigate = useNavigate();
  let [data, setdata] = useState([]);
  let [edit, setedit] = useState("");
  useEffect(() => {
    // console.log(token);
    let token = window.localStorage.getItem("token");
    let url =
      "https://notetakerappbackend.onrender.com/successfulLogin/getallnotes";

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setdata(data.data));
  }, []);

  let handledelete = async (id) => {
    let url = `https://notetakerappbackend.onrender.com/successfulLogin/deletenotes${id}`;

    await Axios.delete(url).then((data) => {
      console.log(data.data);
      setdata(data.filter((ele) => ele._id !== id));
    });
    // console.log(dele);
  };

  let handlededit = async (id) => {
    let ur = `https://notetakerappbackend.onrender.com/successfulLogin/putnotes/${id}`;
    await Axios.put(ur, { title: edit }).then((res) => {
      console.log(res.data);
    });
  };
  function logout() {
    window.localStorage.setItem("token", " ");
    navigate("/login");
  }
  return (
    <div>
      <div id="navbar">
        <ul id="orderlist">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/addnotes">
            {" "}
            <li>+AddNote</li>
          </Link>
          <li>X DeleteAll</li>
          <li onClick={logout}>LogOut</li>
        </ul>
      </div>
      <div>
        <input
          type="text"
          placholder="input titlw if u want editing..."
          onChange={(e) => setedit(e.target.value)}
          value={edit}
        />
      </div>
      <div>
        {data.map((ele, key) => {
          return (
            <>
              <div
                key={key}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h3>date:{Date.now()}</h3>
                <h1>{ele.title}</h1>
                <p>{ele.description}</p>
                <button onClick={() => handledelete(ele._id)}>Delete</button>
                <button onClick={() => handlededit(ele._id)}>Edit</button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
