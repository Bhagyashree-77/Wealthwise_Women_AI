import React from 'react';
import { Card } from '@/components/ui/Card';
import { ExternalLink, Youtube, BookOpen, FileText } from 'lucide-react';
import { useResources } from '@/lib/hooks/useResources';

export function ResourceLibrary() {
  const resources = [
    {
      id: '1',
      type: 'video',
      title: 'Understanding Mutual Funds in India',
      description: 'Learn the basics of mutual fund investing in the Indian market',
      url: 'https://youtube.com/watch?v=example1'
    },
    {
      id: '2',
      type: 'article',
      title: 'Tax Saving under Section 80C',
      description: 'Complete guide to tax-saving investments in India',
      url: 'https://example.com/tax-saving'
    },
    {
      id: '3',
      type: 'course',
      title: 'Stock Market Basics for Indian Investors',
      description: 'Understanding BSE, NSE, and fundamental analysis',
      url: 'https://example.com/stock-market'
    },
    {
      id: '4',
      type: 'article',
      title: 'Understanding UPI and Digital Payments',
      description: 'Guide to digital payment systems in India',
      url: 'https://example.com/upi-guide'
    }
  ];

  return (
    <Card title="Learning Resources" description="Curated educational content for Indian investors">
      <div className="space-y-4">
        {resources.map((resource) => (
          <a
            key={resource.id}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 rounded-lg border hover:border-purple-500 transition-colors"
          >
            <div className="flex items-start space-x-3">
              {resource.type === 'video' && <Youtube className="h-5 w-5 text-red-500" />}
              {resource.type === 'article' && <FileText className="h-5 w-5 text-blue-500" />}
              {resource.type === 'course' && <BookOpen className="h-5 w-5 text-green-500" />}
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{resource.title}</h3>
                <p className="text-sm text-gray-500">{resource.description}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400" />
            </div>
          </a>
        ))}
      </div>
    </Card>
  );
}
