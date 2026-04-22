/**
 * format-utils.ts: Date and text formatting utilities
 *
 * Provides helper functions for consistently formatting dates, durations,
 * and other display strings across the portfolio sections.
 *
 * Dependencies: None
 * Used by: experience-card.tsx, education-card.tsx
 */

/**
 * Formats a date string in "YYYY-MM" format to a human-readable month and year.
 *
 * @param dateStr - Date string in "YYYY-MM" format (e.g., "2022-01")
 * @returns Formatted string (e.g., "January 2022")
 *
 * @example
 * formatMonthYear('2022-01') // => "January 2022"
 */
export function formatMonthYear(dateStr: string): string {
  const [year, month] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1);
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

/**
 * Returns the formatted end date, or the string "Present" if endDate is null.
 *
 * @param endDate - Date string in "YYYY-MM" format, or null for current jobs
 * @returns "Present" or the formatted date string
 *
 * @example
 * formatEndDate(null)       // => "Present"
 * formatEndDate('2021-12')  // => "December 2021"
 */
export function formatEndDate(endDate: string | null): string {
  if (endDate === null) return 'Present';
  return formatMonthYear(endDate);
}

/**
 * Builds a date range string combining a start and end date.
 *
 * @param startDate - Date string in "YYYY-MM" format
 * @param endDate   - Date string in "YYYY-MM" format, or null
 * @returns Formatted range string (e.g., "January 2022 – Present")
 *
 * @example
 * formatDateRange('2022-01', null)       // => "January 2022 – Present"
 * formatDateRange('2020-06', '2021-12')  // => "June 2020 – December 2021"
 */
export function formatDateRange(startDate: string, endDate: string | null): string {
  return `${formatMonthYear(startDate)} – ${formatEndDate(endDate)}`;
}

/**
 * Truncates a string to a maximum number of characters, appending an ellipsis
 * if the string was truncated.
 *
 * @param text   - The string to truncate
 * @param maxLen - Maximum number of characters before truncation
 * @returns The original or truncated string
 *
 * @example
 * truncate('Hello World', 5) // => "Hello..."
 */
export function truncate(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  return `${text.slice(0, maxLen)}...`;
}
