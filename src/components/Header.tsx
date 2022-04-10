import styled, { css } from 'styled-components';

export const Header = styled.h1`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    height: 7rem;
    line-height: 7rem;
    text-align: center;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;
