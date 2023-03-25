import React from "react";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./addnotes.css";
let url = "https://notetakerappbackend.onrender.com/successfulLogin/postnotes";
const Addnotes = () => {
  let token = window.localStorage.getItem("token");
  let addnotesdata = useRef();
  let navigate = useNavigate();
  async function handlenotes(e) {
    e.preventDefault();
    const data = {
      title: addnotesdata.current.title.value,
      description: addnotesdata.current.description.value,
    };
    const response = await axios.post(url, data, {
      headers: {
        Authorization: token,
      },
    });
    console.log(response);
    if (response.data.status === "success") {
      navigate("/home");
    }
  }
  return (
    <div style={{ backgroundColor: "palevioletred" }}>
      <div>
        <form id="addnotesform" ref={addnotesdata}>
          <h1>AddNotes</h1>
          <h3>Title</h3>
          <input
            type="text"
            placeholder="enteryourtitle"
            id="title"
            style={{ height: "40px" }}
          />
          <h3>Description</h3>
          <input
            type="text"
            placeholder="enter your notes description"
            id="description"
            style={{ marginTop: "10px", height: "300px" }}
          />
          <button id="addbtn" onClick={handlenotes}>
            ADDNOTES
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addnotes;
