import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eats APP',
  description: 'Meal Planner APP',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
