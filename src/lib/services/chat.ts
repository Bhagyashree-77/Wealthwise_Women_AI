import { ChatMessage, ChatSession, ChatContext, FinancialRecommendation } from '@/lib/types/chat';

export async function sendChatMessage(
  message: string,
  context?: ChatContext
): Promise<ChatMessage> {
  // Simulated AI response generation
  await new Promise(resolve => setTimeout(resolve, 1000));

  const responses = [
    {
      trigger: /investment|portfolio|stock/i,
      response: "Based on your portfolio analysis and current market conditions, I recommend focusing on diversification. Your technology sector exposure is currently higher than optimal. Would you like specific recommendations for rebalancing?",
      category: 'investment'
    },
    {
      trigger: /risk|safety|protect/i,
      response: "I notice your portfolio has a moderate risk profile. Given recent market volatility, consider increasing your defensive positions. I can help you identify suitable defensive stocks or ETFs.",
      category: 'risk'
    },
    {
      trigger: /goal|target|plan/i,
      response: "Looking at your financial goals, you're currently on track for retirement but could accelerate your emergency fund savings. Would you like me to create a personalized savings plan?",
      category: 'planning'
    }
  ];

  let responseContent = "I understand you're asking about financial matters. Could you please be more specific about what you'd like to know?";

  for (const template of responses) {
    if (template.trigger.test(message)) {
      responseContent = template.response;
      break;
    }
  }

  return {
    id: Date.now().toString(),
    role: 'assistant',
    content: responseContent,
    timestamp: new Date().toISOString()
  };
}

export async function getFinancialRecommendations(): Promise<FinancialRecommendation[]> {
  await new Promise(resolve => setTimeout(resolve, 800));

  return [
    {
      id: '1',
      title: 'Portfolio Rebalancing Opportunity',
      description: 'Your technology sector allocation has drifted above target. Consider rebalancing to maintain your risk profile.',
      type: 'Portfolio Management',
      category: 'action_required',
      priority: 'high',
      impact: 'Reduce portfolio volatility by 15%',
      confidence: 0.89,
      actionSteps: [
        'Review current tech sector allocation',
        'Identify overweight positions',
        'Plan gradual rebalancing strategy',
        'Consider tax implications'
      ]
    },
    {
      id: '2',
      title: 'Emergency Fund Enhancement',
      description: 'Current emergency fund covers 4 months of expenses. Consider increasing to 6 months for better security.',
      type: 'Risk Management',
      category: 'opportunity',
      priority: 'medium',
      impact: 'Improve financial security buffer',
      confidence: 0.92,
      actionSteps: [
        'Analyze current monthly expenses',
        'Set up automated savings transfer',
        'Review high-yield savings options',
        'Track progress monthly'
      ]
    }
  ];
}

export async function getChatHistory(): Promise<ChatSession[]> {
  await new Promise(resolve => setTimeout(resolve, 500));

  return [
    {
      id: '1',
      title: 'Investment Strategy Discussion',
      lastMessage: 'Let me analyze your portfolio allocation...',
      timestamp: new Date().toISOString(),
      category: 'investment'
    },
    {
      id: '2',
      title: 'Retirement Planning',
      lastMessage: 'Based on your goals, here\'s a recommended savings rate...',
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      category: 'planning'
    }
  ];
}

export async function getChatContext(): Promise<ChatContext> {
  await new Promise(resolve => setTimeout(resolve, 300));

  return {
    portfolioValue: 150000,
    riskTolerance: 'medium',
    investmentGoals: ['retirement', 'house_down_payment'],
    marketConditions: {
      trend: 'bullish',
      volatility: 'medium'
    }
  };
}
