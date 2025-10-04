// import React, { use } from "react";
import { FaRegStar } from "react-icons/fa";

import { Link } from "react-router";

const Book = ({ book }) => {
  //   const data = use(bookPromise);
  //   console.log(data);

  const { bookId, bookName, author, image, rating, category, tags } = book;

  console.log(book);
  return (
    <Link to={`/bookDetails/${bookId}`} className="mx-auto">
      <div className="card bg-base-100 w-96 border border-[#13131315] p-6">
        <figure className="p-5 bg-gray-100 w-[326px] h-[230px] mx-auto">
          <img src={image} alt="" className="h-[166px]" />
        </figure>
        <div className="card-body p-0 mt-6">
          <div className="flex gap-2.5">
            {tags.map((tag) => (
              <button className="badge badge-soft badge-success">{tag}</button>
            ))}
          </div>

          <h2 className="card-title">{bookName}</h2>
          <p className="border-b border-dashed border-[#13131315] pb-4">
            By : {author}
          </p>
          <div className="card-actions justify-between pt-1">
            <div className="border-none">{category}</div>
            <div className="border-none flex items-center gap-1.5">
              {rating}
              <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
