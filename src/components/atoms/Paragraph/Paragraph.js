import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.fontSize.s};
  letter-spacing: 2px;
  padding: .7rem 2rem;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  margin: 0;
  
  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xs};
    `};
  ${({ medium }) =>
    medium &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
    `};
  ${({ large }) =>
    large &&
    css`
      font-size: ${({ theme }) => theme.fontSize.m};
    `}
  ${({ temperature }) =>
    temperature &&
    css`
      font-size: ${({ theme }) => theme.fontSize.temperature};
      font-weight: 200;
      padding: 0 2rem 2rem 2rem;
    `}
  ${({ city }) =>
    city &&
    css`
      font-size: ${({ theme }) => theme.fontSize.city};
    `}
  ${({ error }) =>
    error &&
    css`
      color: tomato;
    `}
`;

export default Paragraph;
