import styled from 'styled-components';

type WrapperProps = {
  isRed: boolean;
};
export const Value = styled.span``;

export const Gain = styled.span`
  text-align: end;
`;

export const Wrapper = styled.li<WrapperProps>`
  ${Value},${Gain} {
    color: ${({ isRed }) => (isRed ? 'red' : 'green')};
  }
  display: grid;
  grid-template-columns: 10rem auto 10rem;
  gap-columns: 1.5rem;
  font-weight: ${({ theme }) => theme.font.bold};
`;
export const InvestmentDate = styled.span``;
