interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  profileImage?: string;
  occupation: string;
  monthlyIncome: number;
  age: number;
  riskTolerance: 'low' | 'medium' | 'high';
  bankAccounts: BankAccount[];
  budgetCategories: BudgetCategory[];
  financialGoals: FinancialGoal[];
}

interface BankAccount {
  id: string;
  bankName: string;
  accountType: 'checking' | 'savings' | 'investment';
  balance: number;
  transactions: Transaction[];
}

interface BudgetCategory {
  id: string;
  name: string;
  limit: number;
  spent: number;
  transactions: Transaction[];
}

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
}

interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
}

export type {
  UserProfile,
  BankAccount,
  BudgetCategory,
  Transaction,
  FinancialGoal
};
