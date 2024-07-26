import './globals.scss';
import React from 'react';
import { Providers } from './providers';

export const metadata = {
  title: 'StarWars App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
