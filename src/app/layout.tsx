/**
 * layout.tsx: Root application layout
 *
 * Wraps the entire application with the Material-UI ThemeProvider and
 * CssBaseline so that the MUI theme is applied globally. Also renders the
 * fixed Navbar that persists across all pages.
 *
 * Dependencies: @mui/material, theme-config, navbar, globals.css
 * Used by: Next.js App Router (root layout)
 */

import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from './theme-registry';
import Navbar from '@/components/layout/navbar';
import { APP_NAME, APP_DESCRIPTION } from '@/constants/app-constants';

/** Page metadata for SEO and browser tab */
export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

/** Props for the RootLayout component */
interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Root layout component rendered by Next.js for every page.
 * Provides the MUI theme, global CSS reset, and the fixed navbar.
 *
 * @param children - Page content rendered by Next.js routing
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {/* Fixed navigation bar present on all pages */}
          <Navbar />

          {/* Page content */}
          <main>{children}</main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
