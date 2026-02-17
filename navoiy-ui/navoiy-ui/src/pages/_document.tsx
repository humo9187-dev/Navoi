import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';
const meta = {
  title: 'Navoiy Theatre',
  description:
    'Alisher Navoiy Nomidagi Ozbekiston Davlat Akademik Katta Teatri',
};

const Document: React.FC = () => {
  return (
    <Html suppressHydrationWarning lang="en">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="http-base-url" content={API_BASE_URL} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
