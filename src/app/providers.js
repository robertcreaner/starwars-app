'use client';
import React from 'react';
import Header from '../components/Header/Header';
import { Content, Theme } from '@carbon/react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme theme="g100">
        <Header />
      </Theme>
      <Content>{children}</Content>
    </QueryClientProvider>
  );
}
