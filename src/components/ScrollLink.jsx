import React from "react";

export const ScrollLink = ({ to, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={`#${to}`}
      onClick={handleClick}
      className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </a>
  );
};
