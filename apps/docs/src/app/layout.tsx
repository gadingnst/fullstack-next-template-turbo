import '@/styles/bundle.css';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', adjustFontFallback: false });

/**
 * HTML Metadata in App Route
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#basic-fields
 */
export const metadata = {
  title: {
    default: 'My Docs',
    template: '%s - My Docs'
  }
} satisfies Metadata;

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
