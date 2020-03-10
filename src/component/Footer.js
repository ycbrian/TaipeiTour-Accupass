import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p className="footer-text">
        盈科泛利股份有限公司 © Accuvally Inc. All Rights Reserved.
      </p>
    </StyledFooter>
  );
};

let StyledFooter = styled.footer`
  width: 100%;
  height: 5rem;
  background-color: #2b2b2b;
  color: #a5a5a5;
  display: flex;
  align-items: center;
  .footer {
    &-text {
      font-size: 1.5rem;
      margin-left: 30vw;
    }
  }
`;
export default Footer;
