import 'shared/styles/global.css';
import { Raleway } from 'next/font/google';
import { withMetadata } from 'shared/utils/pageMetadata';

import { SITE_NAME } from '@/configs/env';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway'
});

/**
 * HTML Metadata in App Route
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#basic-fields
 */
export const metadata = withMetadata({
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  }
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html className={raleway.className} lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
