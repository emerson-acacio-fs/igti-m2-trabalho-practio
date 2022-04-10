import { Header } from 'components/Header';
import { ReportCard } from 'components/ReportCard';
import { ReportsWrapper } from 'components/ReportsWrapper';
import { useDataFromAPI } from 'hooks/useDataFromAPI';

type HomeProps = { version?: string };

export function Home({ version }: HomeProps): JSX.Element {
  const data = useDataFromAPI();

  return (
    <>
      <Header>{`react-investment v${version}`}</Header>
      <ReportsWrapper>
        {data.map((investment) => (
          <ReportCard
            key={investment.id}
            title={investment.description}
            totalIncome={investment.totalIncome}
            totalIncomePercentage={investment.totalIncomePercentage}
          >
            {investment.reports.map((report) => (
              <li
                key={report.id}
              >{`${report.month}/${report.year} --- ${report.value} ---  ${report.percentage}`}</li>
            ))}
          </ReportCard>
        ))}
      </ReportsWrapper>
    </>
  );
}

Home.defaultProps = { version: '1.0.1' };
