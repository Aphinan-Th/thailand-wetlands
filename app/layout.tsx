import './globals.css';
import type { Metadata } from 'next';
import { DM_Serif_Display, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

const serif = DM_Serif_Display({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Wetlands of Thailand | An Ecological Journey',
  description: 'Explore the delicate balance of Thailand\'s wetland ecosystems through an immersive scrollytelling experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        inter.variable, 
        serif.variable,
        "font-sans antialiased",
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}