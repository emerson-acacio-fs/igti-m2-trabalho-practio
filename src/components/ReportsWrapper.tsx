import styled, { css } from 'styled-components';

export const ReportsWrapper = styled.ul`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    list-style-type: none;
    height: calc(100vh - 9rem);
    overflow: auto;
    & > li {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`;
