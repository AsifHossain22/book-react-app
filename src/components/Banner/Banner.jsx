import React from "react";
import bookimage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bookimage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold w-8/12">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn btn-primary mt-10">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
