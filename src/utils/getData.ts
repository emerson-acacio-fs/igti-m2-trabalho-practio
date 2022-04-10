import _ from 'lodash';
import { Dispatch, SetStateAction } from 'react';

type Investment = {
  id: string;
  description: string;
};
type Report = {
  id: string;
  investmentId: string;
  month: number;
  year: number;
  value: number;
  percentage?: number;
};

export type InvestmentWithReports = {
  reports: Report[];
  totalIncome?: number | undefined;
  totalIncomePercentage?: number;
} & Investment;
export type Data = { investments: Investment[]; reports: Report[] };

export async function getData(
  setData: Dispatch<SetStateAction<InvestmentWithReports[]>>,
): Promise<void> {
  try {
    const data = await fetch('static/investments-2-1-2-2.json');
    const json: Data = await data.json();
    const newData = json.investments.map((investment) => {
      const newInvest: InvestmentWithReports = {
        ...investment,
        reports: _.sortBy(
          json.reports.filter(
            (report) => report.investmentId === investment.id,
          ),
          ['year', 'month'],
        ),
      };
      const firstValue = Number(_.first(newInvest.reports)?.value);
      newInvest.totalIncome =
        Number(_.last(newInvest.reports)?.value) - firstValue;
      newInvest.totalIncomePercentage =
        (newInvest.totalIncome / firstValue) * 100;

      if (newInvest.reports.length) {
        newInvest.reports[0].percentage = 0;
        for (let i = 1; i < newInvest.reports.length; i += 1) {
          newInvest.reports[i].percentage = Math.round(
            ((newInvest.reports[i].value - newInvest.reports[i - 1].value) /
              newInvest.reports[i - 1].value) *
              100,
          );
        }
      }
      return newInvest;
    });

    setData(newData);
  } catch (err) {
    console.error(err);
    setData([]);
  }
}
