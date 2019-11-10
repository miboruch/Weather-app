import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { MenuContext } from '../../../context/MenuContext';

const StyledHamburger = styled.button`
  cursor: pointer;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  z-index: 900;
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;
  :focus {
    outline: none;
  }
`;

const InnerHamburger = styled.div`
  width: 28px;
  height: 2px;
  position: relative;
  background: #fff;
  transition: all 0.4s ease;
  ${({ isOpen }) =>
    isOpen &&
    css`
      top: 0;
      transform: rotate(-43deg);
    `}

  ::before {
    top: 6px;
    transform: rotate(0);
    content: '';
    width: 18px;
    height: 2px;
    background: #fff;
    position: absolute;
    left: 0;
    transition: all 0.5s ease;
    ${({ isOpen }) =>
      isOpen &&
      css`
        top: 0;
        transform: rotate(85deg);
        width: 28px;
      `}
  }
`;

const Hamburger = () => {
  const { isOpen, toggleMenu } = useContext(MenuContext);

  return (
    <StyledHamburger onClick={toggleMenu}>
      <InnerHamburger isOpen={isOpen} />
    </StyledHamburger>
  );
};

export default Hamburger;
