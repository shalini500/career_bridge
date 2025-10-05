"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrolltoTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const ScrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed animate-pulse bottom-4 right-4">
      {visible && (
        <button
          onClick={ScrolltoTop}
          className="flex items-center justify-center w-12 h-12 text-white bg-teal-900 rounded-full focus:outline-none"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrolltoTop;
