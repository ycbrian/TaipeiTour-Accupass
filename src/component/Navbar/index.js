import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="nav--wrapper">
      <p className="nav--findAct">找活動</p>
      <p className="nav--explore">探索活動</p>
      <p className="nav--holdAct">辦活動</p>
    </nav>
  );
};

export default Navbar;
