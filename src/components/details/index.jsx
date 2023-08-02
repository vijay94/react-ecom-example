import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getBook } from "../../clients/books.api";
import BookPriceAndRating from "../common/book-rating";
import BookAuthors from "../common/book-authors";
import Thumbnail from "../common/book-thumbnail";
import BookTitle from "../common/book-title";
import BookDescription from "./description";

const BookDetails = ({ onAddToCart }) => {
  const { isbn } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBook(isbn)
      .then((books) => {
        if (books && books.length > 0) {
          setBook(books[0]);
        } else {
          setBook(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
        setBook(null);
      });
  }, [history, isbn]);

  const handleAddToCart = () => {
    onAddToCart(book);
  };

  if (!book) {
    return <h1>No valid book details found</h1>;
  }

  return (
    <div className="flex flex-col justify-between">
      <div className="container mx-auto flex flex-wrap">
        <div className="flex flex-wrap flex-col px-16 pt-16 pb-4 md:p-4 w-full md:w-1/4">
          <Thumbnail url={book.thumbnailUrl} title={book.title} size="large" />
          <button
            onClick={handleAddToCart}
            className="w-full p-4 bg-orange-600 text-white text-xl font-bold hover:bg-orange-500 active:bg-orange-600 hover:text-gray-800 hover:outline hover:outline-orange-600"
            title="Add To Cart"
          >
            Add To Cart
          </button>
        </div>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-left">
          <BookTitle title={book.title} size="large" />
          <BookAuthors authors={book.authors} />
          <BookPriceAndRating
            price={book.price}
            rating={book.rating}
            discount={book.discount}
          />
          <BookDescription book={book} />
        </div>
      </div>
    </div>
  );
};

BookDetails.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default BookDetails;
