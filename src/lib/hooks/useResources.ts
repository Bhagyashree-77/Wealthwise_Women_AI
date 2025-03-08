import { useState } from 'react';

export function useResources() {
  const [resources] = useState([
    {
      id: '1',
      type: 'video',
      title: 'Understanding Market Cycles',
      description: 'Learn how market cycles affect your investments',
      url: 'https://youtube.com/watch?v=example1'
    },
    {
      id: '2',
      type: 'article',
      title: 'Beginners Guide to Stock Analysis',
      description: 'Step-by-step guide to analyzing stocks',
      url: 'https://example.com/stock-analysis'
    },
    {
      id: '3',
      type: 'course',
      title: 'Personal Finance Mastery',
      description: 'Comprehensive guide to managing personal finances',
      url: 'https://example.com/finance-course'
    }
  ]);

  return { resources };
}
