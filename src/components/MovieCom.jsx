import React, { useState, useEffect } from "react";
import jsondata from "../data.json";
import { Link } from 'react-router-dom';

const itemsPerPage = 20;

const MovieCom = ({ value }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setcurrentItems] = useState([]);
  const [data, setData] = useState(jsondata);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    // Filter data based on the provided value
    const filteredData = value
      ? data.filter((e) => e.name.toLowerCase().includes(value.toLowerCase()))
      : data;

    // Update currentItems based on the filtered data
    setcurrentItems(filteredData.slice(startIndex, endIndex));
  }, [value, currentPage, data]);
  useEffect(() => {
    setCurrentPage(1)
  }, [value]);
  const handlePageChange = (pageNumber, e) => {
    setCurrentPage(pageNumber);
    let elements = document.querySelectorAll(".page-link");
    elements.forEach((el) => {
      el.classList.remove("active-page");
    });
    e.target.classList.add("active-page");
  };

  return (
    <div className="container text-center">
      <div>
        <ul className="d-flex align-center justify-content-between flex-wrap gap-3 costum-1">
          {currentItems.map((item, index) => (
            <Link to={`/movie/product/${index}`} key={index} className="card">
              <div>
                <img src={item.img} alt={item.name} className="img" />
                <p className="card-title">{item.name}</p>
                <p className="card-subtitle">{item.subtitle}</p>
                <p className="info-color">{item.date}</p>
              </div>
            </Link>
          ))}
        </ul>

        {/* Display pagination buttons */}
        <div className="costum-2">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              {Array.from({ length: totalPages }, (_, index) => (
                <React.Fragment key={index}>
                    <button
                      onClick={(e) => handlePageChange(index + 1, e)}
                      disabled={currentPage === index + 1}
                      className={`page-item page-link ${
                        currentPage === index + 1 ? "active-page" : ""
                      }`}
                    >
                      {index + 1}
                    </button>
                 
                </React.Fragment>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MovieCom;
