import 'shared/styles/global.css';
import './globals.css';
import { Raleway } from 'next/font/google';
import { withMetadata } from 'shared/utils/pageMetadata';

const raleway = Raleway({
  subsets: ['cyrillic'],
  variable: '--font-raleway'
});

export const metadata = withMetadata({
  title: 'Create Turborepo',
  description: 'Generated by create turbo'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
