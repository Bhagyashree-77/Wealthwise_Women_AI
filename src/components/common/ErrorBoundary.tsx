import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Card } from '@/components/ui/Card';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Card className="bg-red-50 border-red-200">
          <div className="text-red-700">
            <h2 className="text-lg font-semibold">Something went wrong</h2>
            <p className="mt-2">Please try refreshing the page or contact support if the problem persists.</p>
          </div>
        </Card>
      );
    }

    return this.props.children;
  }
}
