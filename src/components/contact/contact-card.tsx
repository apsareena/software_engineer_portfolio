/**
 * contact-card.tsx: Individual contact information card
 *
 * Renders a single contact detail (email, phone, or location) as a styled card
 * with an icon, label, and clickable value. Email cards also include a
 * copy-to-clipboard button.
 *
 * Dependencies: @mui/material, @mui/icons-material, copy-button
 * Used by: contact-section.tsx
 */

import React from 'react';
import { Box, Card, CardContent, Typography, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CopyButton from './copy-button';

/** Supported contact detail types */
type ContactType = 'email' | 'phone' | 'location';

/** Props for the ContactCard component */
interface ContactCardProps {
  /** The type of contact detail */
  type: ContactType;
  /** The value to display (email address, phone, or city) */
  value: string;
}

/** Maps contact types to their MUI icon components */
const ICONS: Record<ContactType, React.ReactNode> = {
  email: <EmailIcon sx={{ color: '#3498DB' }} />,
  phone: <PhoneIcon sx={{ color: '#1ABC9C' }} />,
  location: <LocationOnIcon sx={{ color: '#e74c3c' }} />,
};

/** Maps contact types to their display labels */
const LABELS: Record<ContactType, string> = {
  email: 'Email',
  phone: 'Phone',
  location: 'Location',
};

/**
 * Renders a contact detail card with icon, label, and a clickable value.
 * Email and phone values are rendered as mailto:/tel: links respectively.
 *
 * @param type  - 'email' | 'phone' | 'location'
 * @param value - The contact detail string
 */
export default function ContactCard({ type, value }: ContactCardProps) {
  /** Builds an href for email or phone links */
  function buildHref(): string | undefined {
    if (type === 'email') return `mailto:${value}`;
    if (type === 'phone') return `tel:${value.replace(/\s/g, '')}`;
    return undefined;
  }

  const href = buildHref();

  return (
    <Card
      sx={{
        p: 0,
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        '&:hover': { boxShadow: '0 4px 16px rgba(0,0,0,0.1)' },
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2.5, '&:last-child': { pb: 2.5 } }}>
        {/* Icon */}
        <Box sx={{ flexShrink: 0 }}>{ICONS[type]}</Box>

        {/* Label + value */}
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
            {LABELS[type]}
          </Typography>
          {href ? (
            <Link
              href={href}
              underline="hover"
              sx={{ display: 'block', color: '#2C3E50', fontWeight: 500, wordBreak: 'break-all' }}
            >
              {value}
            </Link>
          ) : (
            <Typography variant="body2" sx={{ color: '#2C3E50', fontWeight: 500 }}>
              {value}
            </Typography>
          )}
        </Box>

        {/* Copy button for email */}
        {type === 'email' && (
          <Box sx={{ flexShrink: 0 }}>
            <CopyButton value={value} ariaLabel="Copy email address" />
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
