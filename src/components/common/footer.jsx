import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 bottom-0 w-full py-2">
      <span className="text-sm text-white sm:text-center">
      <Link to="/">© 2023 Books Cart™</Link>. All Rights Reserved.
    </span>
    </footer>
  );
};

export default Footer;