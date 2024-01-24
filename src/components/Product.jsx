import React from "react";
import { useParams } from "react-router-dom";
import jsondata from "../data.json";

const Product = () => {
  const { id } = useParams();

  return (
    <div className="container movie-detail d-flex align-center">
      <div className="content">
        <h1>Movie Detail</h1>
        <h1>{jsondata[id].name}</h1>
        <p>{jsondata[id].subtitle}</p> 
        <button className="btn btn-success">Watch Now</button>
      </div>
      <img src={jsondata[id].img} alt={jsondata[id].name} />
    </div>
  );
};

export default Product;
