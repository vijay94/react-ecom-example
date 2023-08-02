import React from "react";

const BookAuthors = ({ authors, size = "medium" }) => {
  const authorNames = authors.join(", ");
  const sizeClass =
    size === "small" ? "text-xs text-left" : "m-4 text-base";

  return <span className={`${sizeClass} text-gray-700`}>{authorNames}</span>;
};

export default BookAuthors;