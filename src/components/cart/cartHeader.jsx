import React from 'react';

const CartHeader = ({ onCloseClick }) => {
    return (
        <div className="flex flex-wrap bg-gray-500 p-2 justify-between">
            <h3 className="text-left text-white text-xl title-font font-medium">
                Your Cart
            </h3>
            <button
                title="close cart"
                className="bg-red-800 py-1 px-2 text-white text-large font-bold cursor-pointer hover:bg-red-600 active:bg-red-400 focus:outline-white"
                onClick={() => {
                    onCloseClick();
                }}
            >
                X
            </button>
        </div>
    );
};

export default CartHeader;