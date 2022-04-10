import { Header } from 'components/Header';
import { ReportCard } from 'components/ReportCard';
import { ReportsWrapper } from 'components/ReportsWrapper';
import { useDataFromAPI } from 'hooks/useDataFromAPI';

type HomeProps = { version?: string | undefined };

export function Home({ version = '1.0.1' }: HomeProps): JSX.Element {
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
            reports={investment.reports}
          />
        ))}
      </ReportsWrapper>
    </>
  );
}
