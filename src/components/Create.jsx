import React, { useState } from "react";
import data from "../data.json";

const Create = () => {
  const [form, setform] = useState(null);
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("The move is Created but is not add to movie List in the normal website will be added")
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setform({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="create-form text-center">
        <div className="input">
          <lable htmlFor="movieName">Name: </lable>
          <input
            type="text"
            name="name"
            id="movieName"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <lable htmlFor="Date">Date: </lable>
          <input type="date" name="date" id="Date" onChange={handleChange} required/>
        </div>
        <div className="input">
          <lable htmlFor="Description">Description: </lable>
          <input
            type="text"
            name="Description"
            id="Description"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <lable htmlFor="movieName">Image: </lable>
          <input
            type="file"
            name="img"
            id="movieName"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>
        {message && (<p>{message}</p>)}
        <input type="submit" value="submit" className="btn btn-success " />
      </form>
    </div>
  );
};

export default Create;
