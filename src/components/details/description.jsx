import React from "react";
import PropTypes from "prop-types";

const BookDescription = ({ book }) => {
  const { longDescription, categories, pageCount, publishedDate } = book;

  const getCategories = (categories) => {
    return categories
        .reduce((categoriesStr, category) => `${categoriesStr}, ${category}`, "")
        .slice(2);
  };
  
  return (
    <div className="m-4">
      <h3 className="text-lg font-medium text-gray-900 mb-2">About the Book</h3>
      <p className="leading-relaxed mb-4">{longDescription}</p>
      <div className="flex items-center mb-4">
        <span className="text-gray-700 font-medium mr-2">Category:</span>
        <span className="text-gray-600">{getCategories(categories)}</span>
      </div>
      <div className="flex items-center mb-4">
        <span className="text-gray-700 font-medium mr-2">Pages:</span>
        <span className="text-gray-600">{pageCount.toString()}</span>
      </div>
      <div className="flex items-center mb-4">
        <span className="text-gray-700 font-medium mr-2">Published Date:</span>
        <span className="text-gray-600">{publishedDate.split("T")[0]}</span>
      </div>
    </div>
  );
};

export default BookDescription;
