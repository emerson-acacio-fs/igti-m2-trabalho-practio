import { formatThePercentage } from 'utils/formatThePercentage';
import { ReportWithPercentage } from 'utils/getData';
import { numberToMonth } from 'utils/numberToMonth';
import * as S from './styles';

type ReportCardItemProps = {
  report: ReportWithPercentage;
};

export function ReportCardItem({ report }: ReportCardItemProps): JSX.Element {
  return (
    <S.Wrapper isRed={report.percentage < 0}>
      <S.InvestmentDate>
        {numberToMonth(report.month)}/{report.year}
      </S.InvestmentDate>
      <S.Value>R$ {report.value.toFixed(2)}</S.Value>
      <S.Gain>{formatThePercentage(report.percentage)}</S.Gain>
    </S.Wrapper>
  );
}
