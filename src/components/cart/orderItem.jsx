import React from "react";
import { Link } from 'react-router-dom';

import BookAuthors from '../common/book-authors';
import Thumbnail from '../common/book-thumbnail';
import BookTitle from '../common/book-title';

const OrderItem = ({ book, calculateDiscountedPrice }) => {
    return (
        <Link title={book.title} to={`/books/${book.isbn}`}>
            <div className="flex flex-wrap flex-row gap-1 m-1">
                <div className="w-1/4">
                    <Thumbnail url={book.thumbnailUrl} title={book.title} size="small" />
                </div>
                <div className="flex-1 flex flex-wrap flex-col items-start">
                    <BookTitle title={book.title} size="small" />
                    <BookAuthors authors={book.authors} size="small" />
                    <span className="text-xs font-bold text-gray-700">₹{calculateDiscountedPrice(book)}</span>
                </div>
            </div>
        </Link>
    );
}

export default OrderItem;