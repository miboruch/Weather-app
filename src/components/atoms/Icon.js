import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';

const StyledIcon = styled(ReactSVG)``;

const Icon = ({ description }) => {
  const iconSource = {
    sunny: 'url(...)'
  };

  return <StyledIcon />;
  /* src = {iconSource[description]} */
};

Icon.defaultProps = {
  description: 'sunny'
};

Icon.propTypes = {
  description: PropTypes.oneOf(['sunny, rainy'])
};
