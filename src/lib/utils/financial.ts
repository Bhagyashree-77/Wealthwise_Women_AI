export function calculateSIP(
  monthlyInvestment: number,
  years: number,
  expectedReturn: number
): {
  invested: number;
  returns: number;
  totalValue: number;
} {
  const monthlyRate = expectedReturn / 12 / 100;
  const months = years * 12;
  
  const totalValue = monthlyInvestment * 
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * 
    (1 + monthlyRate);
  
  const invested = monthlyInvestment * months;
  const returns = totalValue - invested;

  return {
    invested,
    returns,
    totalValue
  };
}
