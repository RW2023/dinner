import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme='business'>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <meta
        name='description'
        content='Eats Meal Planner is a meal planning app that allows you to plan your meals for the week.'
        />
        <title>Eats Meal Planner</title>
      </head>
      <body>
          <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
