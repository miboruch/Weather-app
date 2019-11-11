import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  width: 300px;
  height: 40px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  font-size: 14px;
  color: #fff;
  font-family: ${({theme}) => theme.font.family.montserrat}
  letter-spacing: 2px;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 14px;
    color: #fff;
    font-family: ${({theme}) => theme.font.family.montserrat}
    letter-spacing: 2px;
  }
`;

const Input = ({ placeholder, ...props }) => {
  return <StyledInput placeholder={placeholder} {...props} />;
};

Input.propTypes = {
  placeholder: PropTypes.string
};

export default Input;
