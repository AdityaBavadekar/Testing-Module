import React from 'react';
import Sidebar from '@/components/ui/Sidebar/Sidebar';
import TestHeader from '@/components/TestHeader';
import { ErrorBoundary } from 'react-error-boundary';
import { QuestionsProvider } from '@/context/QuestionsContext';
"use client";

const TestPageLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  if (!children) {
    throw new Error('TestPageLayout requires children');
  }

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <QuestionsProvider>
        <div className="relative flex bg-gradient-to-b from-yellow-200 to-blue-300 min-h-screen">
          <Sidebar />
          <main className="flex-1 p-6 ml-24">
            <TestHeader />
            {children}
          </main>
        </div>
      </QuestionsProvider>
    </ErrorBoundary>
  );
};

export default TestPageLayout;
