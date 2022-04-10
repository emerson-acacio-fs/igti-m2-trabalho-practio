import { ReactNode } from 'react';
import * as S from './styles';

type ReportCardProps = {
  title: string;
  children: ReactNode;
  totalIncomePercentage: number | undefined;
  totalIncome: number | undefined;
};

export function ReportCard({
  title,
  children,
  totalIncomePercentage,
  totalIncome,
}: ReportCardProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.TotalIncome>
        Redimento total: R$ {Number(totalIncome).toFixed(2)} (
        {Number(totalIncomePercentage).toFixed(2)}%)
      </S.TotalIncome>
      <S.ListWrapper>{children}</S.ListWrapper>
    </S.Wrapper>
  );
}
