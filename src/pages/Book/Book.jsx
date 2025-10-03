import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  //   const data = use(bookPromise);
  //   console.log(data);

  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
  } = book;

  console.log(book);
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm border p-6">
        <figure className="p-5 bg-gray-100 w-2/3 mx-auto">
          <img src={image} alt="Shoes" className="h-[166px]" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-2.5">
            {tags.map((tag) => (
              <button>{tag}</button>
            ))}
          </div>

          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Published by : {publisher}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              <FaStarHalfAlt /> {rating}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
