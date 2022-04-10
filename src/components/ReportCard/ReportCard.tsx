import { ReportCardItem } from 'components/ReportCardItem';
import { formatThePercentage } from 'utils/formatThePercentage';
import { ReportWithPercentage } from 'utils/getData';
import * as S from './styles';

type ReportCardProps = {
  title: string;
  totalIncomePercentage: number;
  totalIncome: number;
  reports: ReportWithPercentage[];
};

export function ReportCard({
  title,
  totalIncomePercentage,
  totalIncome,
  reports,
}: ReportCardProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.TotalIncome isRed={totalIncome < 0}>
        Redimento total: R$ {Number(totalIncome).toFixed(2)} (
        {formatThePercentage(totalIncomePercentage)}%)
      </S.TotalIncome>
      <S.ListWrapper>
        {reports.map((report) => (
          <ReportCardItem key={report.id} report={report} />
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  );
}
