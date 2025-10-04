import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  // const [allBooks, setAllBooks] = useState([]);

  //   useEffect(() => {
  //     fetch("booksData.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAllBooks(data);
  //       });
  //   }, []);

  //   const bookPromise = fetch("./booksData.json").then((res) => res.json());
  return (
    <div className="py-10">
      <h2 className="text-[40px] font-bold text-center p-6">Books</h2>
      <Suspense fallback={<span>Loading Books...</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
