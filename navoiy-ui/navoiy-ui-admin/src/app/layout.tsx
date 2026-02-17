import { AuthGuard } from './auth-guard';
import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
