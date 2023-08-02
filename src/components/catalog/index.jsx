import React from "react";
import BookCard from "./book-cards";

const Catalog = ({ items }) => {
  return (
    <>
      <h1 className="text-3xl font-bold py-8 px-4">Books Catalog</h1>
      <div className="flex flex-wrap overflow-y-auto justify-center">
      {items.map((book) => (
        <BookCard key={book.id} {...{ book }} />
      ))}
    </div>
    </>
  );
}

export default Catalog;