import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNav>
      <p className="nav-findAct">找活動</p>
      <p className="nav-explore">探索活動</p>
      <p className="nav-holdAct">辦活動</p>
    </StyledNav>
  );
};

let StyledNav = styled.nav`
  width: auto;
  height: 50px;
  background-color: #0088d2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  font-size: 2.2rem;
  font-weight: 300;
  .nav- {
    &explore {
      margin-left: -9rem;
    }
    &holdAct {
      margin-left: 30rem;
    }
  }
`;

export default Navbar;
