import { useEffect, useState } from 'react';
import { getData, InvestmentWithReports } from 'utils/getData';

export function useDataFromAPI(): InvestmentWithReports[] {
  const [data, setData] = useState<InvestmentWithReports[]>([]);

  useEffect(() => {
    getData(setData);
  }, []);

  return data;
}
