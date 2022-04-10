import styled, { css } from 'styled-components';

type WrapperProps = {
  isRed: boolean;
};

export const Wrapper = styled.li`
  ${({ theme }) => css`
    border: 0.1rem solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xsmall};

    & > ul {
      list-style-type: none;
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) =>
    css`
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
      text-align: center;
    `}
`;

export const TotalIncome = styled.div<WrapperProps>`
  ${({ theme, isRed }) =>
    css`
      font-size: ${theme.font.sizes.small};
      text-align: center;
      color: ${isRed ? 'red' : 'green'};
    `}
`;

export const ListWrapper = styled.ul`
  ${({ theme }) =>
    css`
      & > li {
        margin-bottom: ${theme.spacings.xxsmall};
        border-bottom: 0.1rem solid ${theme.colors.gray};
        padding: ${theme.spacings.xxsmall};
      }
    `}
`;
