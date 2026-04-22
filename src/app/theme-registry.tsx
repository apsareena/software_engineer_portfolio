/**
 * theme-registry.tsx: MUI ThemeProvider wrapper for Next.js App Router
 *
 * Next.js App Router renders Server Components on the server, so emotion's
 * styles must be extracted and injected into the HTML via useServerInsertedHTML.
 * Without this, the server-rendered emotion <style> tags differ from what the
 * client expects, causing hydration mismatches.
 *
 * This implementation follows the official MUI + Next.js App Router guide:
 * https://mui.com/material-ui/integrations/nextjs/
 *
 * Dependencies: @mui/material, @emotion/cache, @emotion/react, theme-config
 * Used by: app/layout.tsx
 */

'use client';

import React, { useState } from 'react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme-config';

/** Props for the ThemeRegistry component */
interface ThemeRegistryProps {
  children: React.ReactNode;
}

/**
 * Creates an emotion cache that tracks which styles have been inserted so they
 * can be flushed and injected server-side via useServerInsertedHTML.
 */
function createEmotionCache() {
  let insertedStyles: { name: string; isGlobal: boolean }[] = [];

  const cache = createCache({ key: 'mui' });
  cache.compat = true;

  // Intercept insertions so we know what was added during SSR
  const prevInsert = cache.insert;
  cache.insert = (...args) => {
    const [selector, serialized] = args;
    if (cache.inserted[serialized.name] === undefined) {
      insertedStyles.push({ name: serialized.name, isGlobal: !selector });
    }
    return prevInsert(...args);
  };

  const flush = () => {
    const styles = insertedStyles;
    insertedStyles = [];
    return styles;
  };

  return { cache, flush };
}

/**
 * Provides the MUI theme and SSR-safe emotion cache to the application.
 * Injects emotion styles into the server-rendered HTML to prevent hydration
 * mismatches between server and client.
 *
 * @param children - Application content to render within the theme context
 */
export default function ThemeRegistry({ children }: ThemeRegistryProps) {
  // Initialise the emotion cache once (stable across renders)
  const [{ cache, flush }] = useState(createEmotionCache);

  // Inject server-side styles into <head> before hydration
  useServerInsertedHTML(() => {
    const insertedStyles = flush();
    if (insertedStyles.length === 0) return null;

    const styles = insertedStyles
      .map(({ name }) => cache.inserted[name])
      .join('');

    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${insertedStyles.map(({ name }) => name).join(' ')}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        {/* MUI CSS normalise/reset */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
