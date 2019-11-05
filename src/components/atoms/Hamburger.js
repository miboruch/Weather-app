import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { MenuContext } from '../../context/MenuContext';

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
  height: 1px;
  position: relative;
  background: #000;
  transition: background 0.4s ease;
  ${({ isOpen }) =>
    isOpen &&
    css`
      background: transparent;
    `}
  ::before,
  ::after {
    content: '';
    width: 28px;
    height: 1px;
    background: #000;
    position: absolute;
    left: 0;
    transition: all 0.5s ease;
  }
  ::before {
    top: -6px;
    transform: rotate(0);
    ${({ isOpen }) =>
      isOpen &&
      css`
        top: 0;
        transform: rotate(43deg);
      `}
  }
  ::after {
    top: 6px;
    transform: rotate(0);
    ${({ isOpen }) =>
      isOpen &&
      css`
        top: 0;
        transform: rotate(-43deg);
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
