export const formatThePercentage = (percentage: number): string => {
  if (percentage >= 0) {
    return `+${(Math.round(percentage * 100) / 100).toFixed(2)}`;
  }
  return (Math.round(percentage * 100) / 100).toFixed(2);
};
