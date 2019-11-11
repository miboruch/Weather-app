import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 160px;
  height: 38px;
  color: white;
  background: #000;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: none;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-align: center;
  cursor: pointer;
  margin-top: 2rem;
`;

export default Button;
