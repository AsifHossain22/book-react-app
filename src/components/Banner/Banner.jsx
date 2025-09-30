import React from "react";
import bookimage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex justify-between items-center py-20">
      <div>
        <h2>Books to freshen up your bookshelf</h2>
        <button className="btn btn-primary">View The List</button>
      </div>
      <div className="flex justify-end items-center">
        <img src={bookimage} alt="" className="w-3/12" />
      </div>
    </div>
  );
};

export default Banner;
