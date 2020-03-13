import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer--wrapper">
      <a
        href="https://tw.linkedin.com/"
        className="footer--linkWrapper"
        target="_blank"
      >
        <i className="fab fa-linkedin-in footer--link" />
      </a>
      <p className="footer--text">
        盈科泛利股份有限公司 © Accuvally Inc. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
