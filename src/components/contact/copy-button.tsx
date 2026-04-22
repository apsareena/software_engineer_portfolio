/**
 * copy-button.tsx: Copy-to-clipboard button with Snackbar feedback
 *
 * Renders a small IconButton that copies a provided text value to the
 * system clipboard. Shows a success Snackbar for COPY_SUCCESS_DURATION ms.
 *
 * Dependencies: @mui/material, app-constants
 * Used by: contact-card.tsx
 */

'use client';

import React, { useState } from 'react';
import { IconButton, Snackbar, Tooltip, Alert } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { COPY_SUCCESS_MESSAGE, COPY_SUCCESS_DURATION } from '@/constants/app-constants';

/** Props for the CopyButton component */
interface CopyButtonProps {
  /** The text value to copy to the clipboard */
  value: string;
  /** Accessible label for the icon button */
  ariaLabel?: string;
}

/**
 * Icon button that copies `value` to the clipboard and shows a Snackbar
 * success notification for COPY_SUCCESS_DURATION milliseconds.
 *
 * @param value     - Text to copy
 * @param ariaLabel - Optional accessible label (default: "Copy to clipboard")
 */
export default function CopyButton({
  value,
  ariaLabel = 'Copy to clipboard',
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  /**
   * Copies the value to the clipboard and triggers the success state.
   */
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setSnackbarOpen(true);
      setTimeout(() => setCopied(false), COPY_SUCCESS_DURATION);
    } catch {
      // Clipboard API unavailable — silently ignore
    }
  }

  return (
    <>
      <Tooltip title={copied ? 'Copied!' : 'Copy to clipboard'}>
        <IconButton
          onClick={handleCopy}
          aria-label={ariaLabel}
          size="small"
          sx={{ color: copied ? '#1ABC9C' : '#6C757D' }}
        >
          {copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
        </IconButton>
      </Tooltip>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={COPY_SUCCESS_DURATION}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {COPY_SUCCESS_MESSAGE}
        </Alert>
      </Snackbar>
    </>
  );
}
