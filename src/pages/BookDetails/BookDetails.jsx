import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);

  const data = useLoaderData();

  const bookInfo = data.find((book) => book.bookId === bookId);
  console.log(bookInfo);

  const {
    author,
    bookName,
    category,
    image,
    publisher,
    review,
    rating,
    tags,
    totalPages,
    yearOfPublishing,
  } = bookInfo;

  return (
    <div className="p-6">
      {/* BookInfo */}
      <div className="flex justify-center items-center p-6">
        {/* Image */}
        <div className="w-6/12">
          <img
            src={image}
            alt=""
            className="rounded-2xl bg-[#13131305] mx-auto w-[300px]"
          />
        </div>
        {/* Content */}
        <div className="w-6/12">
          <h2 className="text-[#131313] text-[40px] font-bold">{bookName}</h2>
          <p className="text-[#13131380] text-xl font-medium pt-2">
            By : {author}
          </p>
          <div className="divider"></div>
          <p className="text-[#13131380] text-xl font-medium">{category}</p>
          <div className="divider"></div>
          <p className="text-[#131313] font-bold">
            Review :{" "}
            <span className="text-[#13131370] font-normal">{review}</span>
          </p>
          <div className="flex gap-2.5 mt-5">
            <span className="text-[#131313] font-bold">Tag</span>
            <div className="flex gap-2.5">
              {tags.map((tag) => (
                <button className="badge badge-soft badge-success">
                  #{tag}
                </button>
              ))}
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex gap-12">
            <div>
              <p className="text-[#13131370]">Number Of Pages:</p>
              <p className="text-[#13131370]">Publisher:</p>
              <p className="text-[#13131370]">Year Of Publishing:</p>
              <p className="text-[#13131370]">Rating:</p>
            </div>
            <div>
              <p className="text-[#131313] font-semibold">{totalPages}</p>
              <p className="text-[#131313] font-semibold">{publisher}</p>
              <p className="text-[#131313] font-semibold">{yearOfPublishing}</p>
              <p className="text-[#131313] font-semibold">{rating}</p>
            </div>
          </div>
          <div className="flex gap-5 mt-5">
            <button className="btn btn-accent bg-transparent hover:bg-red-600 hover:text-white border-[#13131330] shadow-none">
              Read
            </button>
            <button className="btn btn-info text-white hover:text-[#131313] hover:bg-transparent hover:border-[#13131330] shadow-none">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
