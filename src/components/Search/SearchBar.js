import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Card from "../CardComponent/Card";
import axios from "axios";
function SearchBar() {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyBtb33GcMJz8tu-Untjs0_xYZUQ8wwnFW4" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      {" "}
      <div className="header">
        <div className="row1">
          <h1>
            A room without books <br /> is like a body without a soul
          </h1>
        </div>
        <div className="row2">
          <div className="search">
            <input
              type="text"
              placeholder="Search your favourite books"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <BiSearchAlt className="button" />
          </div>

          <img src="./Images/book3.png" alt="" />
        </div>
      </div>
      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
}

export default SearchBar;
