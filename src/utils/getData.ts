import _ from 'lodash';
import { Dispatch, SetStateAction } from 'react';

type Investment = {
  id: string;
  description: string;
};
export type Report = {
  id: string;
  investmentId: string;
  month: number;
  year: number;
  value: number;
};

export type ReportWithPercentage = {
  percentage: number;
} & Report;

export type InvestmentWithReports = {
  reports: ReportWithPercentage[];
  totalIncome: number;
  totalIncomePercentage: number;
} & Investment;

export type Data = { investments: Investment[]; reports: Report[] };

export async function getData(
  setData: Dispatch<SetStateAction<InvestmentWithReports[]>>,
): Promise<void> {
  try {
    const data = await fetch('static/investments-2-1-2-2.json');
    const json: Data = await data.json();
    const newData = json.investments.map((investment) => {
      const newInvest = {
        ...investment,
        reports: _.sortBy(
          json.reports.filter(
            (report) => report.investmentId === investment.id,
          ),
          ['year', 'month'],
        ),
      };
      const firstValue = Number(_.first(newInvest.reports)?.value);
      const totalIncome = Number(_.last(newInvest.reports)?.value) - firstValue;
      const totalIncomePercentage = (totalIncome / firstValue) * 100;

      const finalInvest: InvestmentWithReports = {
        id: newInvest.id,
        description: newInvest.description,
        totalIncomePercentage,
        totalIncome,
        reports: [
          { ...newInvest.reports[0], percentage: 0 },
          ...newInvest.reports.slice(1).map((report, i) => {
            const percentage =
              ((report.value - newInvest.reports[i].value) /
                newInvest.reports[i].value) *
              100;
            return { ...report, percentage };
          }),
        ],
      };

      return finalInvest;
    });

    setData(newData);
  } catch (err) {
    console.error(err);
    setData([]);
  }
}
