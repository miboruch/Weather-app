import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CityInformation = () => {
  return (
    <StyledWrapper>
      <Paragraph city>Krakow</Paragraph>
      <Paragraph temperature>
        16<sup>o</sup>
      </Paragraph>
      <Paragraph large>Most cloudy</Paragraph>
    </StyledWrapper>
  );
};

export default CityInformation;
